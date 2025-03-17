import {
  MediaGenresArray,
  MediaParentLabelArray,
  AnimeFormatArray,
  IAnime,
  MediaStatusArray,
  MediaStatusObj,
  MediaSourceArray,
} from "@actunime/types";
import { z } from "zod";
import { CharacterAddBody } from "./_characterZOD";
import { CompanyAddBody } from "./_companyZOD";
import { GroupeAddBody } from "./_groupeZOD";
import { MangaAddBody } from "./_mangaZOD";
import {
  Create_Link_ZOD,
  DateBody,
  LinkBody,
  MediaDateBody,
  MediaDateSortBody,
  MediaTitleBody,
} from "./_media";
import { PersonAddBody } from "./_personZOD";
import { TrackAddBody } from "./_trackZOD";
import { PaginationBody, zodBoolean } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";

const AnimeEpisodeBody = z.object({
  airing: z.number(),
  nextAiringDate: z.optional(DateBody.partial()),
  total: z.number(),
  durationMinutes: z.number(),
})

export const Add_Anime_ZOD = z.object({
  id: z.string(),
  parentLabel: z.optional(z.enum(MediaParentLabelArray)),
});

// Définir une regex pour les URL de vidéos YouTube
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

// Créer un schéma Zod pour valider les URL YouTube
const youtubeUrlSchema = z.string().regex(youtubeUrlRegex, {
  message: "L'URL doit être une URL de vidéo YouTube valide."
});


export const AnimeQueryBody = z.object({
  title: MediaTitleBody.partial(),
  date: MediaDateBody.partial(),
  format: z.enum(AnimeFormatArray),
  vf: z.boolean(),
  genres: z.array(z.enum(MediaGenresArray)),
  status: z.enum(MediaStatusArray),
  trailer: youtubeUrlSchema,
  episodes: AnimeEpisodeBody.partial(),
  adult: z.boolean(),
  explicit: z.boolean(),
  links: LinkBody.partial(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type IAnimeQueryBody = z.infer<typeof AnimeQueryBody>;

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const AnimeSortBody = z.object({
  vf: z.number().refine(check, checkErr),
  status: z.number().refine(check, checkErr),
  adult: z.number().refine(check, checkErr),
  date: MediaDateSortBody,
  explicit: z.number().refine(check, checkErr),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
})

export type IAnimeSortBody = z.infer<typeof AnimeSortBody>;

export const AnimePaginationBody = PaginationBody.extend({
  sort: AnimeSortBody.partial(),
  query: AnimeQueryBody.partial()
})

export type IAnimePaginationBody = z.infer<typeof AnimePaginationBody>;

export const Anime_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: AnimeSortBody.partial(),
  query: AnimeQueryBody.partial()
})

export type IAnime_Pagination_ZOD = z.infer<typeof Anime_Pagination_ZOD>;

export type IAdd_Anime_ZOD = z.infer<typeof Add_Anime_ZOD>;

export const AnimeBody = z.object({
  groupe: GroupeAddBody,
  parent: z.optional(Add_Anime_ZOD.partial()),
  manga: z.optional(MangaAddBody.partial()),
  source: z.enum(MediaSourceArray),
  title: MediaTitleBody,
  date: z.optional(MediaDateBody.partial()),
  cover: z.optional(Add_Image_ZOD.partial()),
  banner: z.optional(Add_Image_ZOD.partial()),
  synopsis: z.optional(z.string()),
  format: z.enum(AnimeFormatArray),
  vf: z.optional(zodBoolean()),
  genres: z.optional(z.array(z.enum(MediaGenresArray))),
  // themes: z.optional(z.array(z.string())),
  status: z.enum(MediaStatusArray),
  trailer: z.optional(youtubeUrlSchema),
  episodes: z.optional(AnimeEpisodeBody.partial()),
  adult: zodBoolean(),
  explicit: zodBoolean(),
  links: z.optional(z.array(Create_Link_ZOD)),
  companys: z.optional(z.array(CompanyAddBody)),
  staffs: z.optional(z.array(PersonAddBody)),
  characters: z.optional(z.array(CharacterAddBody)),
  tracks: z.optional(z.array(TrackAddBody)),
})
  .strict()
  .refine(
    (data) => {
      if (data.parent?.id) {
        if (!data.parent.parentLabel) {
          return false;
        }
      }
      let status = data.status;

      if (status) {
        if (["AIRING", "PAUSED"].includes(status)) {
          if (!data.date?.start) {
            return false;
          }
          if (!data.episodes?.airing) {
            return false;
          }
          if (!data.episodes?.nextAiringDate) {
            return false;
          }
        }

        if (["ENDED", "STOPPED"].includes(status)) {
          if (!data.episodes?.airing) {
            return false;
          }
          if (!data.episodes?.total) {
            return false;
          }
          if (!data.date?.start) {
            return false;
          }
          if (!data.date?.end) {
            return false;
          }
        }

        if (["POSTPONED"].includes(status)) {
          if (!data.date?.start) {
            return false;
          }
        }
      }
      return true;
    },
    (data) => {
      if (data.parent?.id) {
        if (!data.parent?.parentLabel) {
          return {
            message:
              "Ce champ est obligatoire si vous avez spécifié un parent.",
            path: ["parentLabel"],
          };
        }
      }
      let status = data.status;
      let message = `Le statut spécifié est: "${MediaStatusObj[status].label}", alors remplir ce champ est obligatoire !`;

      if (status) {
        if (["AIRING", "PAUSED"].includes(status)) {
          if (!data.date?.start) {
            return {
              message,
              path: ["date.start"],
            };
          }
          if (!data.episodes?.airing) {
            return {
              message,
              path: ["episodes.airing"],
            };
          }
          if (!data.episodes?.nextAiringDate) {
            return {
              message,
              path: ["episodes.nextAiringDate"],
            };
          }
        }

        if (["ENDED", "STOPPED"].includes(status)) {
          if (!data.episodes?.airing) {
            return {
              message,
              path: ["episodes.airing"],
            };
          }
          if (!data.episodes?.total) {
            return {
              message,
              path: ["episodes.total"],
            };
          }
          if (!data.date?.start) {
            return {
              message,
              path: ["date.start"],
            };
          }
          if (!data.date?.end) {
            return {
              message,
              path: ["date.end"],
            };
          }
        }

        if (["POSTPONED"].includes(status)) {
          if (!data.date?.start) {
            return {
              message,
              path: ["date.start"],
            };
          }
        }
      }

      return {
        message: "Nous avons un problème.",
        path: ["CreateAnime"],
      };
    },
  );

export type IAnimeBody = z.infer<typeof AnimeBody>;

export const AnimeCreateBody = PatchParamsBody.partial()
  .extend({ data: AnimeBody })

export type IAnimeCreateBody = z.infer<typeof AnimeCreateBody>;

export const AnimeDataToZOD = (data: IAnime) => {
  if (!data) return;

  let toZOD: IAnimeBody = {
    groupe: data.groupe,
    parent: data.parent,
    source: data.source,
    title: { ...data.title, alias: data.title?.alias || [] },
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    date: data.date,
    status: data.status,
    format: data.format,
    vf: data.vf || false,
    episodes: data.episodes,
    adult: data.adult || false,
    trailer: data.trailer,
    explicit: data.explicit || false,
    genres: data.genres,
    links: data.links,
    companys: data.companys,
    staffs: data.staffs,
    characters: data.characters,
    tracks: data.tracks,
  };

  let safeParse = AnimeCreateBody.safeParse({ data: toZOD });

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
