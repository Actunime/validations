"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupeDataToZOD = exports.Create_Groupe_ZOD_FORM = exports.Add_Groupe_ZOD = exports.GroupeCreateBody = exports.Create_Groupe_ZOD = exports.Groupe_Pagination_ZOD = exports.GroupePaginationBody = exports.GroupeSortBody = exports.GroupeQueryBody = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const _patchZOD_1 = require("./_patchZOD");
exports.GroupeQueryBody = zod_1.z.object({
    name: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.GroupeSortBody = zod_1.z.object({
    name: zod_1.z.number().refine(check, checkErr),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.GroupePaginationBody = _util_1.PaginationBody.extend({
    sort: exports.GroupeSortBody.partial(),
    query: exports.GroupeQueryBody.partial()
});
exports.Groupe_Pagination_ZOD = zod_1.z
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
        name: zod_1.z.string().optional(),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        animes: zod_1.z.boolean().optional(),
        mangas: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Create_Groupe_ZOD = zod_1.z.object({
    name: zod_1.z.string(),
});
exports.GroupeCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.Create_Groupe_ZOD
});
exports.Add_Groupe_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newGroupe: zod_1.z.optional(exports.Create_Groupe_ZOD),
});
exports.Create_Groupe_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Groupe_ZOD,
});
const GroupeDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
    };
    const safeParse = exports.Create_Groupe_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.GroupeDataToZOD = GroupeDataToZOD;
//# sourceMappingURL=_groupeZOD.js.map