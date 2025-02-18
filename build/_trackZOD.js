"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackDataToZOD = exports.Add_Track_ZOD = exports.Create_Track_ZOD_FORM = exports.Create_Track_ZOD = exports.Track_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _personZOD_1 = require("./_personZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
exports.Track_Pagination_ZOD = zod_1.z
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
        name: zod_1.z.optional(zod_1.z.string()),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        artists: zod_1.z.boolean().optional(),
        cover: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Create_Track_ZOD = zod_1.z
    .object({
    name: zod_1.z.object({ default: zod_1.z.string(), native: zod_1.z.optional(zod_1.z.string()) }),
    type: zod_1.z.enum(types_1.TrackTypeArray),
    pubDate: zod_1.z.optional(zod_1.z.string()),
    artists: zod_1.z.optional(zod_1.z.array(_personZOD_1.Add_Person_ZOD)),
    cover: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
})
    .strict();
exports.Create_Track_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Track_ZOD,
});
exports.Add_Track_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newTrack: zod_1.z.optional(exports.Create_Track_ZOD),
});
const TrackDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
        type: data.type,
        pubDate: (0, types_1.dateToZod)(data.pubDate),
        cover: data.cover,
        artists: data.artists,
    };
    const safeParse = exports.Create_Track_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.TrackDataToZOD = TrackDataToZOD;
