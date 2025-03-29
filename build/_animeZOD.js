import { z } from 'zod';
import { CharacterAddBody } from './_characterZOD';
import { CompanyAddBody } from './_companyZOD';
import { GroupeAddBody } from './_groupeZOD';
import { MangaAddBody } from './_mangaZOD';
import { DateBody, MediaDateBody, MediaDateSortBody, MediaLinkBody, MediaTitleBody, YoutubeURLStringBody, } from './_media';
import { PersonAddBody } from './_personZOD';
import { TrackAddBody } from './_trackZOD';
import { PaginationBody, zodBoolean } from './_util';
import { ImageAddBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';
import { AnimeFormatArray, MediaGenresArray, MediaParentLabelArray, MediaSourceArray, MediaStatusArray, MediaStatusObj, } from '@actunime/types';
const AnimeEpisodeBody = z.object({
    airing: z.number(),
    nextAiringDate: z.optional(DateBody.partial()),
    total: z.number(),
    durationMinutes: z.number(),
});
export const AnimeQueryBody = z.object({
    title: MediaTitleBody.partial(),
    date: MediaDateBody.partial(),
    format: z.enum(AnimeFormatArray),
    vf: z.boolean(),
    genres: z.array(z.enum(MediaGenresArray)),
    status: z.enum(MediaStatusArray),
    trailer: YoutubeURLStringBody,
    episodes: AnimeEpisodeBody.partial(),
    adult: z.boolean(),
    explicit: z.boolean(),
    links: MediaLinkBody.partial(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const AnimeSortBody = z.object({
    vf: z.number().refine(check, checkErr),
    status: z.number().refine(check, checkErr),
    adult: z.number().refine(check, checkErr),
    date: MediaDateSortBody,
    explicit: z.number().refine(check, checkErr),
    createdAt: z.number().refine(check, checkErr),
    updatedAt: z.number().refine(check, checkErr),
});
export const AnimePaginationBody = PaginationBody.extend({
    sort: AnimeSortBody.partial(),
    query: AnimeQueryBody.partial(),
});
export const AnimeAddBody = z.object({
    id: z.string(),
    parentLabel: z.optional(z.enum(MediaParentLabelArray)),
});
export const AnimeBody = z
    .object({
    groupe: GroupeAddBody,
    parent: z.optional(AnimeAddBody),
    manga: z.optional(MangaAddBody),
    source: z.optional(z.enum(MediaSourceArray)),
    title: MediaTitleBody,
    date: z.optional(MediaDateBody.partial()),
    cover: z.optional(ImageAddBody.partial()),
    banner: z.optional(ImageAddBody.partial()),
    synopsis: z.optional(z.string()),
    format: z.enum(AnimeFormatArray),
    vf: z.optional(zodBoolean()),
    genres: z.optional(z.array(z.enum(MediaGenresArray))),
    status: z.enum(MediaStatusArray),
    trailer: z.optional(YoutubeURLStringBody),
    episodes: z.optional(AnimeEpisodeBody.partial()),
    adult: zodBoolean(),
    explicit: zodBoolean(),
    links: z.optional(z.array(MediaLinkBody)),
    companys: z.optional(z.array(CompanyAddBody)),
    staffs: z.optional(z.array(PersonAddBody)),
    characters: z.optional(z.array(CharacterAddBody)),
    tracks: z.optional(z.array(TrackAddBody)),
})
    .strict()
    .refine((data) => {
    if (data.parent?.id) {
        if (!data.parent.parentLabel) {
            return false;
        }
    }
    const status = data.status;
    if (status) {
        if (['AIRING', 'PAUSED'].includes(status)) {
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
        if (['ENDED', 'STOPPED'].includes(status)) {
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
        if (['POSTPONED'].includes(status)) {
            if (!data.date?.start) {
                return false;
            }
        }
    }
    return true;
}, (data) => {
    if (data.parent?.id) {
        if (!data.parent?.parentLabel) {
            return {
                message: 'Ce champ est obligatoire si vous avez spécifié un parent.',
                path: ['parentLabel'],
            };
        }
    }
    const status = data.status;
    const message = `Le statut spécifié est: "${MediaStatusObj[status].label}", alors remplir ce champ est obligatoire !`;
    if (status) {
        if (['AIRING', 'PAUSED'].includes(status)) {
            if (!data.date?.start) {
                return {
                    message,
                    path: ['date.start'],
                };
            }
            if (!data.episodes?.airing) {
                return {
                    message,
                    path: ['episodes.airing'],
                };
            }
            if (!data.episodes?.nextAiringDate) {
                return {
                    message,
                    path: ['episodes.nextAiringDate'],
                };
            }
        }
        if (['ENDED', 'STOPPED'].includes(status)) {
            if (!data.episodes?.airing) {
                return {
                    message,
                    path: ['episodes.airing'],
                };
            }
            if (!data.episodes?.total) {
                return {
                    message,
                    path: ['episodes.total'],
                };
            }
            if (!data.date?.start) {
                return {
                    message,
                    path: ['date.start'],
                };
            }
            if (!data.date?.end) {
                return {
                    message,
                    path: ['date.end'],
                };
            }
        }
        if (['POSTPONED'].includes(status)) {
            if (!data.date?.start) {
                return {
                    message,
                    path: ['date.start'],
                };
            }
        }
    }
    return {
        message: 'Nous avons un problème.',
        path: ['CreateAnime'],
    };
});
export const AnimeCreateBody = PatchParamsBody.partial().extend({
    data: AnimeBody,
});
export const AnimeDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
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
        vf: data.vf,
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
    const safeParse = AnimeCreateBody.safeParse({ data: toZOD });
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
