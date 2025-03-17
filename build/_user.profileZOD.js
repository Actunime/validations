"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataToPatchProfileZOD = exports.Patch_UserProfile_ZOD_FORM = exports.Patch_UserProfile_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _imageZOD_1 = require("./_imageZOD");
exports.Patch_UserProfile_ZOD = zod_1.z
    .object({
    username: zod_1.z.string().optional(),
    displayName: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    roles: zod_1.z.array(zod_1.z.enum(types_1.UserRolesArray)).optional(),
    avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    banner: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
})
    .partial();
exports.Patch_UserProfile_ZOD_FORM = zod_1.z.object({
    data: exports.Patch_UserProfile_ZOD,
    note: zod_1.z.string().optional(),
});
const UserDataToPatchProfileZOD = (data) => {
    if (!data)
        return {};
    let toZOD = {
        username: data.username,
        displayName: data.displayName,
        description: data.description,
        roles: data.roles,
        avatar: data.avatar,
        banner: data.banner,
    };
    let safeParse = exports.Patch_UserProfile_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.UserDataToPatchProfileZOD = UserDataToPatchProfileZOD;
//# sourceMappingURL=_user.profileZOD.js.map