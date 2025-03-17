"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonDataToZOD = exports.PersonAddBody = exports.PersonCreateBody = exports.PersonBody = exports.PersonPaginationBody = exports.PersonSortBody = exports.PersonQueryBody = void 0;
const zod_1 = require("zod");
const _media_1 = require("./_media");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const types_1 = require("@actunime/types");
const _patchZOD_1 = require("./_patchZOD");
exports.PersonQueryBody = zod_1.z.object({
    isGroupe: zod_1.z.boolean(),
    name: _media_1.MediaTitleBody.partial(),
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
    query: exports.PersonQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.PersonBody = zod_1.z.object({
    isGroupe: zod_1.z.optional(zod_1.z.boolean()),
    name: _media_1.MediaTitleBody,
    birthDate: zod_1.z.optional(_media_1.DateBody.partial()),
    deathDate: zod_1.z.optional(_media_1.DateBody.partial()),
    description: zod_1.z.optional(zod_1.z.string()),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    links: zod_1.z.optional(zod_1.z.array(_media_1.Create_Link_ZOD)),
}).strict();
exports.PersonCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.PersonBody
});
exports.PersonAddBody = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newPerson: zod_1.z.optional(exports.PersonBody),
    role: zod_1.z.optional(zod_1.z.enum(types_1.PersonRoleArray)),
});
const PersonDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        isGroupe: data.isGroupe,
        name: data.name,
        birthDate: data.birthDate,
        deathDate: data.deathDate,
        description: data.description,
        avatar: data.avatar,
        links: data.links,
    };
    const safeParse = exports.PersonBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.PersonDataToZOD = PersonDataToZOD;
//# sourceMappingURL=_personZOD.js.map