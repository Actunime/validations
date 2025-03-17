"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDataToZOD = exports.Add_Company_ZOD = exports.Create_Company_ZOD_FORM = exports.CompanyCreateBody = exports.Create_Company_ZOD = exports.Company_Pagination_ZOD = exports.CompanyPaginationBody = exports.CompanySortBody = exports.CompanyQueryBody = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
exports.CompanyQueryBody = zod_1.z.object({
    type: zod_1.z.enum(["STUDIO", "PRODUCER"]),
    name: zod_1.z.string(),
    links: _media_1.LinkBody.partial(),
    logo: _imageZOD_1.ImageBody.partial(),
    createdDate: zod_1.z.optional(zod_1.z.string()),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.CompanySortBody = zod_1.z.object({
    type: (0, _util_1.zodNumber)().refine(check, checkErr),
    name: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdDate: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdAt: (0, _util_1.zodNumber)().refine(check, checkErr),
    updatedAt: (0, _util_1.zodNumber)().refine(check, checkErr),
});
exports.CompanyPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.CompanySortBody.partial(),
    query: exports.CompanyQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.Company_Pagination_ZOD = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: exports.CompanySortBody.partial(),
    query: exports.CompanyQueryBody.partial()
});
exports.Create_Company_ZOD = zod_1.z.object({
    type: zod_1.z.enum(["STUDIO", "PRODUCER"]),
    name: zod_1.z.string(),
    description: zod_1.z.optional(zod_1.z.string()),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
    logo: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    createdDate: zod_1.z.optional(zod_1.z.string()),
})
    .strict();
exports.CompanyCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.Create_Company_ZOD
});
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
        description: data.description,
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
//# sourceMappingURL=_companyZOD.js.map