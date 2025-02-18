"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAnimeListe_ZOD = exports.UserDataToZOD = exports.Create_User_ZOD = exports.Disable_User_ZOD_FORM = exports.Patch_User_ZOD_FORM = exports.Patch_User_ZOD = exports.User_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("./_util");
const _imageZOD_1 = require("./_imageZOD");
exports.User_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    query: zod_1.z
        .object({
        name: zod_1.z.string(),
        id: zod_1.z.string(),
        roles: zod_1.z.array(zod_1.z.enum(types_1.UserRolesArray)),
        allowUnverified: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
    strict: zod_1.z.boolean().optional(),
    sort: zod_1.z.object({
        createdAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
        updatedAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
    }),
    with: zod_1.z
        .object({
        avatar: zod_1.z.boolean().optional(),
        banner: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Patch_User_ZOD = zod_1.z
    .object({
    username: zod_1.z.string().optional(),
    displayName: zod_1.z.string().optional(),
    bio: zod_1.z.string().optional(),
    roles: zod_1.z.array(zod_1.z.enum(types_1.UserRolesArray)).optional(),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    banner: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
})
    .partial();
exports.Patch_User_ZOD_FORM = zod_1.z.object({
    data: exports.Patch_User_ZOD,
    note: zod_1.z.string().optional(),
});
exports.Disable_User_ZOD_FORM = zod_1.z.object({
    reason: zod_1.z.string(),
    note: zod_1.z.string().optional(),
});
exports.Create_User_ZOD = zod_1.z.object({
    user: exports.Patch_User_ZOD,
    account: zod_1.z.object({}),
});
const UserDataToZOD = (data) => {
    if (!data)
        return {};
    let toZOD = {
        username: data.username,
        displayName: data.displayName,
        bio: data.bio,
        roles: data.roles,
        avatar: data.avatar,
        banner: data.banner,
    };
    let safeParse = exports.Patch_User_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.UserDataToZOD = UserDataToZOD;
exports.UserAnimeListe_ZOD = zod_1.z.object({
    id: zod_1.z.string(),
    episode: (0, _util_1.zodNumber)().optional(),
    status: zod_1.z.enum(types_1.UserAnimeListStatusArray),
    score: (0, _util_1.zodNumber)().optional(),
    note: zod_1.z.string().optional(),
    favoris: zod_1.z.boolean().optional(),
    rank: (0, _util_1.zodNumber)().optional(),
    startedAt: zod_1.z.string().optional(),
    completedAt: zod_1.z.string().optional(),
});
