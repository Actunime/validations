"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDataToZOD = exports.ImageBody = exports.Add_Image_ZOD = exports.Create_Image_ZOD_FORM = exports.ImageCreateBody = exports.Create_Image_ZOD = exports.Image_Pagination_ZOD = exports.ImagePaginationBody = exports.ImageSortBody = exports.ImageQueryBody = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
const _patchZOD_1 = require("./_patchZOD");
const _media_1 = require("./_media");
exports.ImageQueryBody = zod_1.z.object({
    label: zod_1.z.enum(types_1.ImageLabelArray),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.ImageSortBody = zod_1.z.object({
    label: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdAt: (0, _util_1.zodNumber)().refine(check, checkErr),
    updatedAt: (0, _util_1.zodNumber)().refine(check, checkErr),
});
exports.ImagePaginationBody = _util_1.PaginationBody.extend({
    sort: exports.ImageSortBody.partial(),
    query: exports.ImageQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.Image_Pagination_ZOD = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: exports.ImageSortBody.partial(),
    query: exports.ImageQueryBody.partial()
});
exports.Create_Image_ZOD = zod_1.z.object({
    label: zod_1.z.enum(types_1.ImageLabelArray),
    value: zod_1.z.string(),
});
exports.ImageCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.Create_Image_ZOD
});
exports.Create_Image_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Image_ZOD,
});
exports.Add_Image_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    label: zod_1.z.optional(zod_1.z.enum(types_1.ImageLabelArray)),
    newImage: zod_1.z.optional(exports.Create_Image_ZOD),
});
exports.ImageBody = zod_1.z.object({
    id: zod_1.z.string(),
    label: zod_1.z.enum(types_1.ImageLabelArray),
});
const ImageDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        value: data.url,
        label: data.label
    };
    const safeParse = exports.Create_Image_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.ImageDataToZOD = ImageDataToZOD;
//# sourceMappingURL=_imageZOD.js.map