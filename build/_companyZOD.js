"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDataToZOD = exports.Add_Company_ZOD = exports.Create_Company_ZOD_FORM = exports.Create_Company_ZOD = exports.Company_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
exports.Company_Pagination_ZOD = zod_1.z
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
        type: zod_1.z.enum(types_1.CompanyTypeArray),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z.object({}).partial().strict(),
})
    .partial()
    .strict();
exports.Create_Company_ZOD = zod_1.z
    .object({
    type: zod_1.z.enum(["STUDIO", "PRODUCER"]),
    name: zod_1.z.string(),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
    logo: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    createdDate: zod_1.z.optional(zod_1.z.string()),
})
    .strict();
exports.Create_Company_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Company_ZOD,
});
exports.Add_Company_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newCompany: zod_1.z.optional(exports.Create_Company_ZOD),
});
const CompanyDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        type: data.type,
        name: data.name,
        links: data.links,
        logo: data.logo,
        createdDate: (0, types_1.dateToZod)(data.createdDate),
    };
    const safeParse = exports.Create_Company_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.CompanyDataToZOD = CompanyDataToZOD;
