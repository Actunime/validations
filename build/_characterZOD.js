"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterDataToZOD = exports.Add_Character_ZOD = exports.Create_Character_ZOD_FORM = exports.Create_Character_ZOD = exports.Character_Name_ZOD = exports.Character_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _personZOD_1 = require("./_personZOD");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
exports.Character_Pagination_ZOD = zod_1.z
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
        name: zod_1.z.optional(zod_1.z.string()),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        actors: zod_1.z.boolean().optional(),
        avatar: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Character_Name_ZOD = zod_1.z.object({
    default: zod_1.z.string(),
    alias: zod_1.z.optional(zod_1.z.array(zod_1.z.object({ content: zod_1.z.string() }))),
});
exports.Create_Character_ZOD = zod_1.z
    .object({
    name: exports.Character_Name_ZOD,
    age: zod_1.z.optional((0, _util_1.zodNumber)()),
    birthDate: zod_1.z.optional(zod_1.z.string()),
    gender: zod_1.z.enum(types_1.CharacterGenderArray),
    species: zod_1.z.enum(types_1.CharacterSpeciesArray),
    bio: zod_1.z.optional(zod_1.z.string()),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    actors: zod_1.z.optional(zod_1.z.array(_personZOD_1.Add_Person_ZOD)),
})
    .strict();
exports.Create_Character_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Character_ZOD,
});
exports.Add_Character_ZOD = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newCharacter: zod_1.z.optional(exports.Create_Character_ZOD),
    role: zod_1.z.enum(types_1.CharacterRoleArray, { required_error: "Le role est requis" }),
});
const CharacterDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
        age: data.age,
        birthDate: (0, types_1.dateToZod)(data.birthDate),
        gender: data.gender,
        species: data.species,
        bio: data.bio,
        avatar: data.avatar,
        actors: data.actors,
    };
    const safeParse = exports.Create_Character_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.CharacterDataToZOD = CharacterDataToZOD;
