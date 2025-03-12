import {
  MediaGenresArray,
  MediaParentLabelArray,
  AnimeFormatArray,
  IAnime,
  MediaStatusArray,
  MediaStatusObj,
  dateTimeToZod,
  dateToZod,
} from "@actunime/types";
import { z } from "zod";
import { Add_Character_ZOD } from "./_characterZOD";
import { Add_Company_ZOD } from "./_companyZOD";
import { Add_Groupe_ZOD } from "./_groupeZOD";
import { Add_Manga_ZOD } from "./_mangaZOD";
import {
  Create_Link_ZOD,
  LinkBody,
  MediaDateBody,
  MediaDateZodSchema,
  MediaImageZodSchema,
  MediaTitleBody,
  MediaTitleZodSchema,
} from "./_media";
import { Add_Person_ZOD } from "./_personZOD";
import { Add_Track_ZOD } from "./_trackZOD";
import { PaginationBody, zodBoolean, zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";
import { MediaSourceArray } from "@actunime/utils";

const Anime_Episode_ZOD = z.object({
  airing: z.optional(zodNumber()),
  nextAiringDate: z.optional(z.string()),
  total: z.optional(zodNumber()),
  durationMinute: z.optional(zodNumber()),
});

const AnimeEpisodeBody = z.object({
  airing: z.number(),
  nextAiringDate: z.string(),
  total: z.number(),
  durationMinute: z.number(),
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

export const Create_Anime_ZOD = z
  .object({
    groupe: Add_Groupe_ZOD,
    parent: z.optional(Add_Anime_ZOD),
    manga: z.optional(Add_Manga_ZOD),
    source: z.enum(MediaSourceArray),
    title: MediaTitleZodSchema,
    date: z.optional(MediaDateZodSchema),
    cover: z.optional(Add_Image_ZOD.partial()),
    banner: z.optional(Add_Image_ZOD.partial()),
    synopsis: z.optional(z.string()),
    format: z.enum(AnimeFormatArray),
    vf: z.optional(zodBoolean()),
    genres: z.optional(z.array(z.enum(MediaGenresArray))),
    // themes: z.optional(z.array(z.string())),
    status: z.enum(MediaStatusArray),
    trailer: z.optional(youtubeUrlSchema),
    episodes: z.optional(Anime_Episode_ZOD),
    adult: zodBoolean(),
    explicit: zodBoolean(),
    links: z.optional(z.array(Create_Link_ZOD)),
    companys: z.optional(z.array(Add_Company_ZOD)),
    staffs: z.optional(z.array(Add_Person_ZOD)),
    characters: z.optional(z.array(Add_Character_ZOD)),
    tracks: z.optional(z.array(Add_Track_ZOD)),
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

export type ICreate_Anime_ZOD = z.infer<typeof Create_Anime_ZOD>;

export const AnimeCreateBody = PatchParamsBody.partial().extend({
  data: Create_Anime_ZOD
})

export type IAnimeCreateBody = z.infer<typeof AnimeCreateBody>;

export const Create_Anime_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Anime_ZOD,
});

export type ICreate_Anime_ZOD_FORM = z.infer<typeof Create_Anime_ZOD_FORM>;

export const PreCreateAnimeZodSchema = z.object({
  title: MediaTitleZodSchema,
});

export const Create_Anime_Update_ZOD = z.object({
  groupe: z.optional(Add_Groupe_ZOD),
  parent: z.optional(Add_Anime_ZOD),
  parentPath: z.optional(z.enum(["Anime", "Manga"])),
  title: z.optional(MediaTitleZodSchema),
  date: z.optional(MediaDateZodSchema),
  image: z.optional(MediaImageZodSchema),
  synopsis: z.optional(z.string()),
  source: z.optional(z.string().optional()),
  sourcePath: z.optional(z.enum(["Anime", "Manga"])),
  format: z.optional(z.enum(AnimeFormatArray)),
  vf: z.optional(z.boolean()),
  genres: z.optional(z.array(z.string())),
  themes: z.optional(z.array(z.string())),
  trailer: z.optional(youtubeUrlSchema),
  status: z.optional(z.enum(MediaStatusArray)),
  episodes: z.optional(Anime_Episode_ZOD),
  adult: z.optional(z.boolean()),
  explicit: z.optional(z.boolean()),
  links: z.optional(z.array(Create_Link_ZOD)),
  companys: z.optional(z.array(Add_Company_ZOD)),
  staffs: z.optional(z.array(Add_Person_ZOD)),
  characters: z.optional(z.array(Add_Character_ZOD)),
  tracks: z.optional(z.array(Add_Track_ZOD)),
});

export const AnimeDataToZOD = (data: IAnime) => {
  if (!data) return;

  let toZOD: ICreate_Anime_ZOD = {
    groupe: data.groupe,
    parent: data.parent as any,
    source: data.source as any,
    title: {
      ...data.title,
      alias: data.title?.alias || [],
    },
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    ...(data.date
      ? {
        date: {
          start: dateToZod(data.date.start),
          end: dateToZod(data.date.end),
        },
      }
      : null),
    status: data.status as any,
    format: data.format as any,
    vf: data.vf || false,
    ...(data.episodes
      ? {
        episodes: {
          ...data.episodes,
          nextAiringDate: dateTimeToZod(data.episodes.nextAiringDate),
        },
      }
      : null),
    adult: data.adult || false,
    trailer: data.trailer,
    explicit: data.explicit || false,
    genres: data.genres,
    links: data.links,
    companys: data.companys,
    staffs: (data.staffs as any),
    characters: (data.characters as any),
    tracks: data.tracks,
  };

  let safeParse = Create_Anime_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
