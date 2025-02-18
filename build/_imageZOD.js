"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageDataToZOD = exports.Add_Image_ZOD = exports.Create_Image_ZOD_FORM = exports.Create_Image_ZOD = exports.Image_Pagination_ZOD = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
exports.Image_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    strict: zod_1.z.boolean().optional(),
    sort: zod_1.z
        .object({
        createdAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
        updatedAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
    })
        .partial()
        .strict(),
    query: zod_1.z
        .object({
        ids: zod_1.z.optional(zod_1.z.array(zod_1.z.string())),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z.object({}).partial().strict(),
})
    .partial()
    .strict();
exports.Create_Image_ZOD = zod_1.z.object({
    label: zod_1.z.optional(zod_1.z.enum(types_1.ImageLabelArray)),
    value: zod_1.z.string(),
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
const ImageDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        value: data.url,
    };
    const safeParse = exports.Create_Image_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.ImageDataToZOD = ImageDataToZOD;
