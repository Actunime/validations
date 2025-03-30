import { z } from 'zod';
import { CharacterAddBody } from './_characterZOD';
import { CompanyAddBody } from './_companyZOD';
import { GroupeAddBody } from './_groupeZOD';
import { DateBody, MediaDateBody, MediaDateSortBody, MediaLinkBody, MediaTitleBody, YoutubeURLStringBody, } from './_media';
import { PersonAddBody } from './_personZOD';
import { PaginationBody, zodBoolean } from './_util';
import { ImageAddBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';
import { MangaFormatArray, MediaGenresArray, MediaParentLabelArray, MediaSourceArray, MediaStatusArray } from '@actunime/types';
const MangaChapterVolumeBody = z.object({
    airing: z.number(),
    nextAiringDate: z.optional(DateBody.partial()),
    total: z.number(),
    durationMinutes: z.number(),
});
export const MangaQueryBody = z.object({
    title: MediaTitleBody.partial(),
    date: MediaDateBody.partial(),
    format: z.enum(MangaFormatArray),
    vf: z.boolean(),
    genres: z.array(z.enum(MediaGenresArray)),
    status: z.enum(MediaStatusArray),
    trailer: YoutubeURLStringBody,
    chapters: MangaChapterVolumeBody.partial(),
    volumes: MangaChapterVolumeBody.partial(),
    adult: z.boolean(),
    explicit: z.boolean(),
    links: MediaLinkBody.partial(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const MangaSortBody = z.object({
    vf: z.number().refine(check, checkErr),
    status: z.number().refine(check, checkErr),
    adult: z.number().refine(check, checkErr),
    date: MediaDateSortBody,
    explicit: z.number().refine(check, checkErr),
    createdAt: z.number().refine(check, checkErr),
    updatedAt: z.number().refine(check, checkErr),
});
export const MangaPaginationBody = PaginationBody.extend({
    sort: MangaSortBody.partial(),
    query: MangaQueryBody.partial(),
});
export const MangaAddBody = z.object({
    id: z.string(),
    parentLabel: z.optional(z.enum(MediaParentLabelArray)),
});
export const MangaBody = z
    .object({
    groupe: GroupeAddBody,
    parent: z.optional(MangaAddBody),
    source: z.optional(z.enum(MediaSourceArray)),
    title: MediaTitleBody,
    date: z.optional(MediaDateBody.partial()),
    cover: z.optional(ImageAddBody.partial()),
    banner: z.optional(ImageAddBody.partial()),
    synopsis: z.optional(z.string()),
    format: z.enum(MangaFormatArray),
    vf: z.optional(zodBoolean()),
    genres: z.optional(z.array(z.enum(MediaGenresArray))),
    status: z.optional(z.enum(MediaStatusArray)),
    trailer: z.optional(YoutubeURLStringBody),
    chapters: z.optional(MangaChapterVolumeBody.partial()),
    volumes: z.optional(MangaChapterVolumeBody.partial()),
    adult: z.optional(zodBoolean()),
    explicit: z.optional(zodBoolean()),
    links: z.optional(z.array(MediaLinkBody)),
    companys: z.optional(z.array(CompanyAddBody)),
    staffs: z.optional(z.array(PersonAddBody)),
    characters: z.optional(z.array(CharacterAddBody))
})
    .strict();
export const MangaCreateBody = PatchParamsBody.partial().extend({
    data: MangaBody,
});
export const MangaDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        groupe: data.groupe,
        parent: data.parent,
        source: data.source,
        title: data.title,
        synopsis: data.synopsis,
        cover: data.cover,
        banner: data.banner,
        date: data.date,
        status: data.status,
        format: data.format,
        vf: data.vf,
        chapters: data.chapters,
        volumes: data.volumes,
        adult: data.adult,
        trailer: data.trailer,
        explicit: data.explicit,
        genres: data.genres,
        links: data.links,
        companys: data.companys,
        staffs: data.staffs,
        characters: data.characters
    };
    const safeParse = MangaBody.safeParse({ data: toZOD });
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
