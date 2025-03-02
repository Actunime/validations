"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDataToZOD = exports.PersonBody = exports.Add_Person_ZOD = exports.Person_Pagination_ZOD = exports.PersonPaginationBody = exports.PersonSortBody = exports.PersonQueryBody = exports.Create_Person_ZOD_FORM = exports.PersonCreateBody = exports.Partial_Create_Person_ZOD = exports.Create_Person_ZOD = exports.Base_Create_Person_ZOD = exports.PersonName_validation = void 0;
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const types_1 = require("@actunime/types");
const _patchZOD_1 = require("./_patchZOD");
exports.PersonName_validation = zod_1.z.object({
    default: zod_1.z.string(),
    alias: zod_1.z.optional(zod_1.z.array(zod_1.z.object({
        content: zod_1.z
            .string()
            .min(2, "le nom dois contenir au moins 2 caractères"),
    }))),
});
exports.Base_Create_Person_ZOD = zod_1.z
    .object({
    isGroupe: zod_1.z.optional(zod_1.z.boolean()),
    name: exports.PersonName_validation,
    birthDate: zod_1.z.optional(zod_1.z.string()),
    deathDate: zod_1.z.optional(zod_1.z.string()),
    bio: zod_1.z.optional(zod_1.z.string()),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
})
    .strict();
exports.Create_Person_ZOD = exports.Base_Create_Person_ZOD
    .strict();
exports.Partial_Create_Person_ZOD = exports.Base_Create_Person_ZOD
    .strict()
    .partial();
exports.PersonCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.Create_Person_ZOD
});
exports.Create_Person_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Person_ZOD,
});
exports.PersonQueryBody = zod_1.z.object({
    isGroupe: zod_1.z.boolean(),
    name: exports.PersonName_validation.partial(),
    birthDate: zod_1.z.string(),
    deathDate: zod_1.z.string(),
    avatar: _imageZOD_1.ImageBody.partial(),
    links: _media_1.LinkBody.partial(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.PersonSortBody = zod_1.z.object({
    isGroupe: (0, _util_1.zodNumber)().refine(check, checkErr),
    birthDate: (0, _util_1.zodNumber)().refine(check, checkErr),
    deathDate: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdAt: (0, _util_1.zodNumber)().refine(check, checkErr),
    updatedAt: (0, _util_1.zodNumber)().refine(check, checkErr),
});
exports.PersonPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.PersonSortBody.partial(),
    query: exports.PersonQueryBody.partial()
});
exports.Person_Pagination_ZOD = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: exports.PersonSortBody.partial(),
    query: exports.PersonQueryBody.partial()
});
exports.Add_Person_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newPerson: zod_1.z.optional(exports.Create_Person_ZOD),
    role: zod_1.z.optional(zod_1.z.enum(types_1.PersonRoleArray)),
});
exports.PersonBody = zod_1.z.object({
    id: zod_1.z.string()
});
const PersonDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        isGroupe: data.isGroupe,
        name: data.name,
        birthDate: (0, types_1.dateToZod)(data.birthDate),
        deathDate: (0, types_1.dateToZod)(data.deathDate),
        bio: data.bio,
        avatar: data.avatar,
        links: data.links,
    };
    const safeParse = exports.Create_Person_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.PersonDataToZOD = PersonDataToZOD;
//# sourceMappingURL=_personZOD.js.map