import { z } from "zod";
export const Patch_UserPreferences_ZOD = z
    .object({
    displayUnverifiedImage: z.boolean(),
    displayUnverifiedMedia: z.boolean(),
})
    .partial();
export const Patch_UserPreferences_ZOD_FORM = z.object({
    data: Patch_UserPreferences_ZOD,
    note: z.string().optional(),
});
export const UserDataToPatchPreferencesZOD = (data) => {
    if (!data)
        return {};
    let toZOD = {
        displayUnverifiedImage: data.preferences?.displayUnverifiedImage,
        displayUnverifiedMedia: data.preferences?.displayUnverifiedMedia,
    };
    let safeParse = Patch_UserPreferences_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
