import {
  MediaGenresArray,
  MediaParentLabelArray,
  MediaStatusArray,
  IManga,
  MangaFormatArray,
} from '@actunime/types';
import { z } from 'zod';
import { CharacterAddBody } from './_characterZOD';
import { CompanyAddBody } from './_companyZOD';
import { GroupeAddBody } from './_groupeZOD';
import {
  DateBody,
  FromBody,
  MediaDateBody,
  MediaLinkBody,
  MediaTitleBody,
  YoutubeURLStringBody,
} from './_media';
import { PersonAddBody } from './_personZOD';
import { PaginationBody, zodBoolean, zodNumber } from './_util';
import { ImageAddBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';

const Manga_ChapterVolume_ZOD = z.object({
  airing: z.optional(zodNumber()),
  nextAiringDate: z.optional(DateBody.partial()),
  total: z.optional(zodNumber()),
});

export const MangaQueryBody = z.object({
  title: MediaTitleBody.partial(),
  date: MediaDateBody.partial(),
  format: z.enum(MangaFormatArray),
  vf: z.boolean(),
  genres: z.array(z.enum(MediaGenresArray)),
  status: z.enum(MediaStatusArray),
  trailer: YoutubeURLStringBody,
  chapters: Manga_ChapterVolume_ZOD.partial(),
  volumes: Manga_ChapterVolume_ZOD.partial(),
  adult: z.boolean(),
  explicit: z.boolean(),
  links: MediaLinkBody.partial(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const MangaSortBody = z.object({
  vf: z.number().refine(check, checkErr),
  status: z.number().refine(check, checkErr),
  adult: z.number().refine(check, checkErr),
  explicit: z.number().refine(check, checkErr),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
});

export const MangaPaginationBody = PaginationBody.extend({
  sort: MangaSortBody.partial(),
  query: MangaQueryBody.partial(),
  from: FromBody,
}).partial();

export type IMangaPaginationBody = z.infer<typeof MangaPaginationBody>;

export const MangaAddBody = z.object({
  id: z.string(),
  parentLabel: z.optional(z.enum(MediaParentLabelArray)),
});

export type IMangaAddBody = z.infer<typeof MangaAddBody>;

export const MangaBody = z
  .object({
    groupe: GroupeAddBody,
    parent: z.optional(MangaAddBody),
    // source: z.optional(MangaAddBody),
    title: MediaTitleBody,
    date: z.optional(MediaDateBody.partial()),
    cover: z.optional(ImageAddBody),
    banner: z.optional(ImageAddBody),
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
    links: z.optional(z.array(MediaLinkBody)),
    companys: z.optional(z.array(CompanyAddBody)),
    staffs: z.optional(z.array(PersonAddBody)),
    characters: z.optional(z.array(CharacterAddBody)),
  })
  .strict();

export type IMangaBody = z.infer<typeof MangaBody>;

export const MangaCreateBody = PatchParamsBody.partial().extend({
  data: MangaBody,
});

export type IMangaCreateBody = z.infer<typeof MangaCreateBody>;

export const MangaDataToZOD = (data: IManga) => {
  if (!data) return;

  const toZOD: IMangaBody = {
    groupe: data.groupe!,
    // parent: data.parent,
    // source: data.source,

    title: data.title as any,
    synopsis: data.synopsis,
    cover: data.cover,
    banner: data.banner,
    date: data.date,
    status: data.status as any,
    format: data.format as any,
    vf: data.vf || ('false' as any),
    chapters: data.chapters,
    volumes: data.volumes,
    adult: data.adult || ('false' as any),
    explicit: data.explicit || ('false' as any),
    genres: (data.genres || []) as any,
    links: data.links || [],
    companys: data.companys || [],
    staffs: (data.staffs || []) as any,
    characters: (data.characters || []) as any,
  };

  const safeParse = MangaBody.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
