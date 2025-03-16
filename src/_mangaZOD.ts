import {
  MediaGenresArray,
  MediaParentLabelArray,
  MediaSourceArray,
  MediaStatusArray,
  dateTimeToZod,
  dateToZod,
  IManga,
  MangaFormatArray,
} from "@actunime/types";
import { z } from "zod";
import { Add_Character_ZOD } from "./_characterZOD";
import { Add_Company_ZOD } from "./_companyZOD";
import { Add_Groupe_ZOD } from "./_groupeZOD";
import {
  Create_Link_ZOD,
  FromBody,
  LinkBody,
  MediaDateBody,
  MediaDateZodSchema,
  MediaTitleBody,
  MediaTitleZodSchema,
  MediaTrailerZod,
} from "./_media";
import { Add_Person_ZOD } from "./_personZOD";
import { Add_Track_ZOD } from "./_trackZOD";
import { PaginationBody, zodBoolean, zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";

const Manga_ChapterVolume_ZOD = z.object({
  airing: z.optional(zodNumber()),
  nextAiringDate: z.optional(z.string()),
  total: z.optional(zodNumber()),
});

export const MangaQueryBody = z.object({
  title: MediaTitleBody.partial(),
  date: MediaDateBody.partial(),
  format: z.enum(MangaFormatArray),
  vf: z.boolean(),
  genres: z.array(z.enum(MediaGenresArray)),
  status: z.enum(MediaStatusArray),
  trailer: MediaTrailerZod,
  chapters: Manga_ChapterVolume_ZOD.partial(),
  volumes: Manga_ChapterVolume_ZOD.partial(),
  adult: z.boolean(),
  explicit: z.boolean(),
  links: LinkBody.partial(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const MangaSortBody = z.object({
  vf: z.number().refine(check, checkErr),
  status: z.number().refine(check, checkErr),
  adult: z.number().refine(check, checkErr),
  explicit: z.number().refine(check, checkErr),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
})

export const MangaPaginationBody = PaginationBody.extend({
  sort: MangaSortBody.partial(),
  query: MangaQueryBody.partial(),
  from: FromBody,
}).partial()

export type IMangaPaginationBody = z.infer<typeof MangaPaginationBody>;

export const Manga_Pagination_ZOD = z
  .object({
    page: zodNumber(),
    limit: zodNumber(),
    strict: z.boolean().optional(),
    sort: z
      .object({
        updaptedAt: z.enum(["DESC", "ASC"]).optional(),
        createdAt: z.enum(["DESC", "ASC"]).optional(),
      })
      .partial()
      .strict(),
    query: z
      .object({
        name: z.string().optional(),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    with: z
      .object({
        groupe: z.boolean().optional(),
        parent: z.boolean().optional(),
        source: z.boolean().optional(),
        staffs: z.boolean().optional(),
        companys: z.boolean().optional(),
        characters: z.boolean().optional(),
      })
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type IManga_Pagination_ZOD = z.infer<typeof Manga_Pagination_ZOD>;

export const Add_Manga_ZOD = z
  .object({ id: z.string(), parentLabel: z.optional(z.enum(MediaParentLabelArray)) })

export type IAdd_Manga_ZOD = z.infer<typeof Add_Manga_ZOD>;

export const Create_Manga_ZOD = z
  .object({
    groupe: Add_Groupe_ZOD,
    parent: z.optional(Add_Manga_ZOD),
    source: z.optional(Add_Manga_ZOD),
    title: MediaTitleZodSchema,
    date: z.optional(MediaDateZodSchema),
    cover: z.optional(Add_Image_ZOD),
    banner: z.optional(Add_Image_ZOD),
    synopsis: z.optional(z.string()),
    format: z.enum(MangaFormatArray),
    vf: z.optional(zodBoolean()),
    genres: z.optional(z.array(z.enum(MediaGenresArray))),
    // themes: z.optional(z.array(z.enum())),
    status: z.enum(MediaStatusArray),
    chapters: z.optional(Manga_ChapterVolume_ZOD),
    volumes: z.optional(Manga_ChapterVolume_ZOD),
    adult: zodBoolean(),
    explicit: zodBoolean(),
    links: z.optional(z.array(Create_Link_ZOD)),
    companys: z.optional(z.array(Add_Company_ZOD)),
    staffs: z.optional(z.array(Add_Person_ZOD)),
    characters: z.optional(z.array(Add_Character_ZOD))
  })
  .strict();

export type ICreate_Manga_ZOD = z.infer<typeof Create_Manga_ZOD>;

export const MangaCreateBody = PatchParamsBody.partial().extend({
  data: Create_Manga_ZOD
})

export type IMangaCreateBody = z.infer<typeof MangaCreateBody>;

export const Create_Manga_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Manga_ZOD,
});

export type ICreate_Manga_ZOD_FORM = z.infer<typeof Create_Manga_ZOD_FORM>;


export const MangaDataToZOD = (data: IManga) => {
  if (!data) return;

  const toZOD: ICreate_Manga_ZOD = {
    groupe: data.groupe!,
    parent: data.parent as any,
    source: data.source as any,

    title: data.title as any,
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    ...(data.date
      ? {
        date: {
          start: dateToZod(data.date.start),
          end: dateToZod(data.date.end),
        } as any,
      }
      : {}),
    status: data.status as any,
    format: data.format as any,
    vf: data.vf || ("false" as any),
    ...(data.chapters
      ? {
        chapters: {
          ...data.chapters,
          nextAiringDate: dateTimeToZod(data.chapters.nextAiringDate),
        },
      }
      : {}),
    ...(data.volumes
      ? {
        volumes: {
          ...data.volumes,
          nextAiringDate: dateTimeToZod(data.volumes.nextAiringDate),
        },
      }
      : {}),
    adult: data.adult || ("false" as any),
    explicit: data.explicit || ("false" as any),
    genres: (data.genres || []) as any,
    links: data.links || [],
    companys: data.companys || [],
    staffs: (data.staffs || []) as any,
    characters: (data.characters || []) as any,
  };

  const safeParse = Create_Manga_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
