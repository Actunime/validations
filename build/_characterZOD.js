"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDataToZOD = exports.CharacterAddBody = exports.CharacterCreateBody = exports.CharacterBody = exports.CharacterPaginationBody = exports.CharacterSortBody = exports.CharacterQueryBody = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _personZOD_1 = require("./_personZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
const _patchZOD_1 = require("./_patchZOD");
const _media_1 = require("./_media");
exports.CharacterQueryBody = zod_1.z.object({
    name: _media_1.MediaTitleBody.partial(),
    age: (0, _util_1.zodNumber)(),
    birthDate: zod_1.z.optional(_media_1.DateBody.partial()),
    avatar: _imageZOD_1.ImageBody.partial(),
    gender: zod_1.z.enum(types_1.CharacterGenderArray),
    species: zod_1.z.enum(types_1.CharacterSpeciesArray),
    actors: _personZOD_1.PersonBody.partial(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.CharacterSortBody = zod_1.z.object({
    age: (0, _util_1.zodNumber)().refine(check, checkErr),
    birthDate: (0, _util_1.zodNumber)().refine(check, checkErr),
    gender: (0, _util_1.zodNumber)().refine(check, checkErr),
    species: (0, _util_1.zodNumber)().refine(check, checkErr),
    createdAt: (0, _util_1.zodNumber)().refine(check, checkErr),
    updatedAt: (0, _util_1.zodNumber)().refine(check, checkErr),
});
exports.CharacterPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.CharacterSortBody.partial(),
    query: exports.CharacterQueryBody.partial(),
    from: _media_1.FromBody,
}).partial();
exports.CharacterBody = zod_1.z.object({
    name: _media_1.MediaTitleBody,
    age: zod_1.z.optional((0, _util_1.zodNumber)()),
    birthDate: zod_1.z.optional(_media_1.DateBody.partial()),
    gender: zod_1.z.enum(types_1.CharacterGenderArray),
    species: zod_1.z.enum(types_1.CharacterSpeciesArray),
    description: zod_1.z.optional(zod_1.z.string()),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    actors: zod_1.z.optional(zod_1.z.array(_personZOD_1.PersonAddBody)),
});
exports.CharacterCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({ data: exports.CharacterBody });
exports.CharacterAddBody = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newCharacter: zod_1.z.optional(exports.CharacterBody),
    role: zod_1.z.optional(zod_1.z.enum(types_1.CharacterRoleArray, { required_error: "Le role est requis" })),
});
const CharacterDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
        age: data.age,
        birthDate: data.birthDate,
        gender: data.gender,
        species: data.species,
        description: data.description,
        avatar: data.avatar,
        actors: data.actors,
    };
    const safeParse = exports.CharacterBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.CharacterDataToZOD = CharacterDataToZOD;
//# sourceMappingURL=_characterZOD.js.map