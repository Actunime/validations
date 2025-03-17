"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimeDataToZOD = exports.AnimeCreateBody = exports.Anime_Pagination_ZOD = exports.AnimePaginationBody = exports.AnimeSortBody = exports.AnimeQueryBody = exports.Add_Anime_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _characterZOD_1 = require("./_characterZOD");
const _companyZOD_1 = require("./_companyZOD");
const _groupeZOD_1 = require("./_groupeZOD");
const _mangaZOD_1 = require("./_mangaZOD");
const _media_1 = require("./_media");
const _personZOD_1 = require("./_personZOD");
const _trackZOD_1 = require("./_trackZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
const AnimeEpisodeBody = zod_1.z.object({
    airing: zod_1.z.number(),
    nextAiringDate: zod_1.z.optional(_media_1.DateBody.partial()),
    total: zod_1.z.number(),
    durationMinutes: zod_1.z.number(),
});
exports.Add_Anime_ZOD = zod_1.z.object({
    id: zod_1.z.string(),
    parentLabel: zod_1.z.optional(zod_1.z.enum(types_1.MediaParentLabelArray)),
});
// Définir une regex pour les URL de vidéos YouTube
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
// Créer un schéma Zod pour valider les URL YouTube
const youtubeUrlSchema = zod_1.z.string().regex(youtubeUrlRegex, {
    message: "L'URL doit être une URL de vidéo YouTube valide."
});
exports.AnimeQueryBody = zod_1.z.object({
    title: _media_1.MediaTitleBody.partial(),
    date: _media_1.MediaDateBody.partial(),
    format: zod_1.z.enum(types_1.AnimeFormatArray),
    vf: zod_1.z.boolean(),
    genres: zod_1.z.array(zod_1.z.enum(types_1.MediaGenresArray)),
    status: zod_1.z.enum(types_1.MediaStatusArray),
    trailer: youtubeUrlSchema,
    episodes: AnimeEpisodeBody.partial(),
    adult: zod_1.z.boolean(),
    explicit: zod_1.z.boolean(),
    links: _media_1.LinkBody.partial(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.AnimeSortBody = zod_1.z.object({
    vf: zod_1.z.number().refine(check, checkErr),
    status: zod_1.z.number().refine(check, checkErr),
    adult: zod_1.z.number().refine(check, checkErr),
    date: _media_1.MediaDateSortBody,
    explicit: zod_1.z.number().refine(check, checkErr),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.AnimePaginationBody = _util_1.PaginationBody.extend({
    sort: exports.AnimeSortBody.partial(),
    query: exports.AnimeQueryBody.partial()
});
exports.Anime_Pagination_ZOD = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: exports.AnimeSortBody.partial(),
    query: exports.AnimeQueryBody.partial()
});
exports.AnimeCreateBody = _patchZOD_1.PatchParamsBody
    .extend({
    data: zod_1.z.object({
        groupe: _groupeZOD_1.Add_Groupe_ZOD,
        parent: zod_1.z.optional(exports.Add_Anime_ZOD.partial()),
        manga: zod_1.z.optional(_mangaZOD_1.Add_Manga_ZOD.partial()),
        source: zod_1.z.enum(types_1.MediaSourceArray),
        title: _media_1.MediaTitleBody,
        date: zod_1.z.optional(_media_1.MediaDateBody.partial()),
        cover: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD.partial()),
        banner: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD.partial()),
        synopsis: zod_1.z.optional(zod_1.z.string()),
        format: zod_1.z.enum(types_1.AnimeFormatArray),
        vf: zod_1.z.optional((0, _util_1.zodBoolean)()),
        genres: zod_1.z.optional(zod_1.z.array(zod_1.z.enum(types_1.MediaGenresArray))),
        // themes: z.optional(z.array(z.string())),
        status: zod_1.z.enum(types_1.MediaStatusArray),
        trailer: zod_1.z.optional(youtubeUrlSchema),
        episodes: zod_1.z.optional(AnimeEpisodeBody.partial()),
        adult: (0, _util_1.zodBoolean)(),
        explicit: (0, _util_1.zodBoolean)(),
        links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
        companys: zod_1.z.optional(zod_1.z.array(_companyZOD_1.Add_Company_ZOD)),
        staffs: zod_1.z.optional(zod_1.z.array(_personZOD_1.Add_Person_ZOD)),
        characters: zod_1.z.optional(zod_1.z.array(_characterZOD_1.Add_Character_ZOD)),
        tracks: zod_1.z.optional(zod_1.z.array(_trackZOD_1.Add_Track_ZOD)),
    })
        .strict()
        .refine((data) => {
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
    }, (data) => {
        if (data.parent?.id) {
            if (!data.parent?.parentLabel) {
                return {
                    message: "Ce champ est obligatoire si vous avez spécifié un parent.",
                    path: ["parentLabel"],
                };
            }
        }
        let status = data.status;
        let message = `Le statut spécifié est: "${types_1.MediaStatusObj[status].label}", alors remplir ce champ est obligatoire !`;
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
    })
});
const AnimeDataToZOD = (data) => {
    if (!data)
        return;
    let toZOD = {
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
    let safeParse = exports.AnimeCreateBody.safeParse({ data: toZOD });
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.AnimeDataToZOD = AnimeDataToZOD;
//# sourceMappingURL=_animeZOD.js.map