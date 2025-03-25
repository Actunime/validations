import { MediaGenresArray, MediaParentLabelArray, MediaStatusArray, MangaFormatArray, } from '@actunime/types';
import { z } from 'zod';
import { CharacterAddBody } from './_characterZOD';
import { CompanyAddBody } from './_companyZOD';
import { GroupeAddBody } from './_groupeZOD';
import { DateBody, FromBody, MediaDateBody, MediaLinkBody, MediaTitleBody, YoutubeURLStringBody, } from './_media';
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
const check = (v) => [-1, 1].includes(v);
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
export const MangaAddBody = z.object({
    id: z.string(),
    parentLabel: z.optional(z.enum(MediaParentLabelArray)),
});
export const MangaBody = z
    .object({
    groupe: GroupeAddBody,
    parent: z.optional(MangaAddBody),
    title: MediaTitleBody,
    date: z.optional(MediaDateBody.partial()),
    cover: z.optional(ImageAddBody),
    banner: z.optional(ImageAddBody),
    synopsis: z.optional(z.string()),
    format: z.enum(MangaFormatArray),
    vf: z.optional(zodBoolean()),
    genres: z.optional(z.array(z.enum(MediaGenresArray))),
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
export const MangaCreateBody = PatchParamsBody.partial().extend({
    data: MangaBody,
});
export const MangaDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        groupe: data.groupe,
        title: data.title,
        synopsis: data.synopsis,
        cover: data.cover,
        banner: data.banner,
        date: data.date,
        status: data.status,
        format: data.format,
        vf: data.vf || 'false',
        chapters: data.chapters,
        volumes: data.volumes,
        adult: data.adult || 'false',
        explicit: data.explicit || 'false',
        genres: (data.genres || []),
        links: data.links || [],
        companys: data.companys || [],
        staffs: (data.staffs || []),
        characters: (data.characters || []),
    };
    const safeParse = MangaBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
