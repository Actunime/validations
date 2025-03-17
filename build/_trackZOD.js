"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackDataToZOD = exports.TrackAddBody = exports.TrackCreateBody = exports.TrackBody = exports.Track_Pagination_ZOD = exports.TrackPaginationBody = exports.TrackSortBody = exports.TrackQueryBody = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _personZOD_1 = require("./_personZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
exports.TrackQueryBody = zod_1.z.object({
    name: _media_1.MediaTitleBody.partial(),
    type: zod_1.z.enum(types_1.TrackTypeArray),
    pubDate: zod_1.z.optional(_media_1.DateBody.partial()),
    artists: _personZOD_1.PersonBody.partial(),
    cover: _imageZOD_1.ImageBody.partial(),
    links: _media_1.LinkBody.partial(),
    description: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.TrackSortBody = zod_1.z.object({
    type: (0, _util_1.zodNumber)().refine(check, checkErr),
    pubDate: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdAt: (0, _util_1.zodNumber)().refine(check, checkErr),
    updatedAt: (0, _util_1.zodNumber)().refine(check, checkErr),
});
exports.TrackPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.TrackSortBody.partial(),
    query: exports.TrackQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.Track_Pagination_ZOD = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: exports.TrackSortBody.partial(),
    query: exports.TrackQueryBody.partial()
});
exports.TrackBody = zod_1.z.object({
    name: _media_1.MediaTitleBody,
    type: zod_1.z.enum(types_1.TrackTypeArray),
    pubDate: zod_1.z.optional(_media_1.DateBody.partial()),
    artists: zod_1.z.optional(zod_1.z.array(_personZOD_1.PersonAddBody)),
    cover: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    description: zod_1.z.optional(zod_1.z.string()),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
}).strict();
exports.TrackCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.TrackBody
});
exports.TrackAddBody = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newTrack: zod_1.z.optional(exports.TrackBody),
});
const TrackDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
        type: data.type,
        pubDate: data.pubDate,
        cover: data.cover,
        artists: data.artists,
        description: data.description,
        links: data.links,
    };
    const safeParse = exports.TrackBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.TrackDataToZOD = TrackDataToZOD;
//# sourceMappingURL=_trackZOD.js.map