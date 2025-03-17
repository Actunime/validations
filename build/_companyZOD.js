"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDataToZOD = exports.CompanyAddBody = exports.CompanyCreateBody = exports.CompanyBody = exports.Company_Pagination_ZOD = exports.CompanyPaginationBody = exports.CompanySortBody = exports.CompanyQueryBody = void 0;
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
exports.CompanyQueryBody = zod_1.z.object({
    type: zod_1.z.enum(["STUDIO", "PRODUCER"]),
    name: _media_1.MediaTitleBody.partial(),
    links: _media_1.LinkBody.partial(),
    logo: _imageZOD_1.ImageBody.partial(),
    createdDate: zod_1.z.optional(_media_1.DateBody.partial()),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.CompanySortBody = zod_1.z.object({
    type: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdDate: zod_1.z.object({
        year: (0, _util_1.zodNumber)().refine(check, checkErr),
        month: (0, _util_1.zodNumber)().refine(check, checkErr),
        day: (0, _util_1.zodNumber)().refine(check, checkErr),
    }),
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
exports.CompanyBody = zod_1.z.object({
    type: zod_1.z.enum(["STUDIO", "PRODUCER"]),
    name: _media_1.MediaTitleBody,
    description: zod_1.z.optional(zod_1.z.string()),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
    logo: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    createdDate: zod_1.z.optional(_media_1.DateBody.partial()),
}).strict();
exports.CompanyCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.CompanyBody
});
exports.CompanyAddBody = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newCompany: zod_1.z.optional(exports.CompanyBody),
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
        createdDate: data.createdDate,
    };
    const safeParse = exports.CompanyBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.CompanyDataToZOD = CompanyDataToZOD;
//# sourceMappingURL=_companyZOD.js.map