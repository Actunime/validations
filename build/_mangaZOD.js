"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaDataToZOD = exports.Create_Manga_ZOD_FORM = exports.Create_Manga_ZOD = exports.Add_Manga_ZOD = exports.Manga_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _characterZOD_1 = require("./_characterZOD");
const _companyZOD_1 = require("./_companyZOD");
const _groupeZOD_1 = require("./_groupeZOD");
const _media_1 = require("./_media");
const _personZOD_1 = require("./_personZOD");
const _trackZOD_1 = require("./_trackZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
exports.Manga_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    strict: zod_1.z.boolean().optional(),
    sort: zod_1.z
        .object({
        updaptedAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
        createdAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
    })
        .partial()
        .strict(),
    query: zod_1.z
        .object({
        name: zod_1.z.string().optional(),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        groupe: zod_1.z.boolean().optional(),
        parent: zod_1.z.boolean().optional(),
        source: zod_1.z.boolean().optional(),
        staffs: zod_1.z.boolean().optional(),
        companys: zod_1.z.boolean().optional(),
        characters: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
const Manga_ChapterVolume_ZOD = zod_1.z.object({
    airing: zod_1.z.optional((0, _util_1.zodNumber)()),
    nextAiringDate: zod_1.z.optional(zod_1.z.string()),
    total: zod_1.z.optional((0, _util_1.zodNumber)()),
});
exports.Add_Manga_ZOD = zod_1.z
    .object({
    id: zod_1.z.string().optional(),
    parentLabel: zod_1.z.optional(zod_1.z.enum(types_1.MediaParentLabelArray)),
    sourceLabel: zod_1.z.optional(zod_1.z.enum(types_1.MediaSourceArray)),
})
    .partial();
exports.Create_Manga_ZOD = zod_1.z
    .object({
    groupe: _groupeZOD_1.Add_Groupe_ZOD,
    parent: zod_1.z.optional(exports.Add_Manga_ZOD),
    source: zod_1.z.optional(exports.Add_Manga_ZOD),
    title: _media_1.MediaTitleZodSchema,
    date: zod_1.z.optional(_media_1.MediaDateZodSchema),
    cover: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    banner: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    synopsis: zod_1.z.optional(zod_1.z.string()),
    format: zod_1.z.enum(types_1.MangaFormatArray),
    vf: zod_1.z.optional((0, _util_1.zodBoolean)()),
    genres: zod_1.z.optional(zod_1.z.array(zod_1.z.enum(types_1.MediaGenresArray))),
    // themes: z.optional(z.array(z.enum())),
    status: zod_1.z.enum(types_1.MediaStatusArray),
    chapters: zod_1.z.optional(Manga_ChapterVolume_ZOD),
    volumes: zod_1.z.optional(Manga_ChapterVolume_ZOD),
    adult: (0, _util_1.zodBoolean)(),
    explicit: (0, _util_1.zodBoolean)(),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
    companys: zod_1.z.optional(zod_1.z.array(_companyZOD_1.Add_Company_ZOD)),
    staffs: zod_1.z.optional(zod_1.z.array(_personZOD_1.Add_Person_ZOD)),
    characters: zod_1.z.optional(zod_1.z.array(_characterZOD_1.Add_Character_ZOD)),
    tracks: zod_1.z.optional(zod_1.z.array(_trackZOD_1.Add_Track_ZOD)),
})
    .strict();
exports.Create_Manga_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Manga_ZOD,
});
const MangaDataToZOD = (data) => {
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
        ...(data.date
            ? {
                date: {
                    start: (0, types_1.dateToZod)(data.date.start),
                    end: (0, types_1.dateToZod)(data.date.end),
                },
            }
            : {}),
        status: data.status,
        format: data.format,
        vf: data.vf || "false",
        ...(data.chapters
            ? {
                chapters: {
                    ...data.chapters,
                    nextAiringDate: (0, types_1.dateTimeToZod)(data.chapters.nextAiringDate),
                },
            }
            : {}),
        ...(data.volumes
            ? {
                volumes: {
                    ...data.volumes,
                    nextAiringDate: (0, types_1.dateTimeToZod)(data.volumes.nextAiringDate),
                },
            }
            : {}),
        adult: data.adult || "false",
        explicit: data.explicit || "false",
        genres: (data.genres || []),
        links: data.links || [],
        companys: data.companys || [],
        staffs: (data.staffs || []),
        characters: (data.characters || []),
    };
    const safeParse = exports.Create_Manga_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.MangaDataToZOD = MangaDataToZOD;
