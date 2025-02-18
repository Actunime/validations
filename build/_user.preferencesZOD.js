"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDataToPatchPreferencesZOD = exports.Patch_UserPreferences_ZOD_FORM = exports.Patch_UserPreferences_ZOD = void 0;
const zod_1 = require("zod");
exports.Patch_UserPreferences_ZOD = zod_1.z
    .object({
    displayUnverifiedImage: zod_1.z.boolean(),
    displayUnverifiedMedia: zod_1.z.boolean(),
})
    .partial();
exports.Patch_UserPreferences_ZOD_FORM = zod_1.z.object({
    data: exports.Patch_UserPreferences_ZOD,
    note: zod_1.z.string().optional(),
});
const UserDataToPatchPreferencesZOD = (data) => {
    if (!data)
        return {};
    let toZOD = {
        displayUnverifiedImage: data.preferences?.displayUnverifiedImage,
        displayUnverifiedMedia: data.preferences?.displayUnverifiedMedia,
    };
    let safeParse = exports.Patch_UserPreferences_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.UserDataToPatchPreferencesZOD = UserDataToPatchPreferencesZOD;
