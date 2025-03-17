"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MangaDataToZOD = exports.MangaCreateBody = exports.MangaBody = exports.MangaAddBody = exports.MangaPaginationBody = exports.MangaSortBody = exports.MangaQueryBody = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _characterZOD_1 = require("./_characterZOD");
const _companyZOD_1 = require("./_companyZOD");
const _groupeZOD_1 = require("./_groupeZOD");
const _media_1 = require("./_media");
const _personZOD_1 = require("./_personZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
const Manga_ChapterVolume_ZOD = zod_1.z.object({
    airing: zod_1.z.optional((0, _util_1.zodNumber)()),
    nextAiringDate: zod_1.z.optional(_media_1.DateBody.partial()),
    total: zod_1.z.optional((0, _util_1.zodNumber)()),
});
exports.MangaQueryBody = zod_1.z.object({
    title: _media_1.MediaTitleBody.partial(),
    date: _media_1.MediaDateBody.partial(),
    format: zod_1.z.enum(types_1.MangaFormatArray),
    vf: zod_1.z.boolean(),
    genres: zod_1.z.array(zod_1.z.enum(types_1.MediaGenresArray)),
    status: zod_1.z.enum(types_1.MediaStatusArray),
    trailer: _media_1.MediaTrailerZod,
    chapters: Manga_ChapterVolume_ZOD.partial(),
    volumes: Manga_ChapterVolume_ZOD.partial(),
    adult: zod_1.z.boolean(),
    explicit: zod_1.z.boolean(),
    links: _media_1.LinkBody.partial(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.MangaSortBody = zod_1.z.object({
    vf: zod_1.z.number().refine(check, checkErr),
    status: zod_1.z.number().refine(check, checkErr),
    adult: zod_1.z.number().refine(check, checkErr),
    explicit: zod_1.z.number().refine(check, checkErr),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.MangaPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.MangaSortBody.partial(),
    query: exports.MangaQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.MangaAddBody = zod_1.z
    .object({ id: zod_1.z.string(), parentLabel: zod_1.z.optional(zod_1.z.enum(types_1.MediaParentLabelArray)) });
exports.MangaBody = zod_1.z
    .object({
    groupe: _groupeZOD_1.GroupeAddBody,
    parent: zod_1.z.optional(exports.MangaAddBody),
    // source: z.optional(MangaAddBody),
    title: _media_1.MediaTitleZodSchema,
    date: zod_1.z.optional(_media_1.MediaDateBody.partial()),
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
    companys: zod_1.z.optional(zod_1.z.array(_companyZOD_1.CompanyAddBody)),
    staffs: zod_1.z.optional(zod_1.z.array(_personZOD_1.PersonAddBody)),
    characters: zod_1.z.optional(zod_1.z.array(_characterZOD_1.CharacterAddBody))
})
    .strict();
exports.MangaCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.MangaBody
});
const MangaDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        groupe: data.groupe,
        // parent: data.parent,
        // source: data.source,
        title: data.title,
        synopsis: data.synopsis,
        cover: data.cover,
        banner: data.banner,
        date: data.date,
        status: data.status,
        format: data.format,
        vf: data.vf || "false",
        chapters: data.chapters,
        volumes: data.volumes,
        adult: data.adult || "false",
        explicit: data.explicit || "false",
        genres: (data.genres || []),
        links: data.links || [],
        companys: data.companys || [],
        staffs: (data.staffs || []),
        characters: (data.characters || []),
    };
    const safeParse = exports.MangaBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.MangaDataToZOD = MangaDataToZOD;
//# sourceMappingURL=_mangaZOD.js.map