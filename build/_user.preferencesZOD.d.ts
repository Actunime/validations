import { IUser } from "@actunime/types";
import { z } from "zod";
export declare const Patch_UserPreferences_ZOD: z.ZodObject<{
    displayUnverifiedImage: z.ZodOptional<z.ZodBoolean>;
    displayUnverifiedMedia: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    displayUnverifiedImage?: boolean | undefined;
    displayUnverifiedMedia?: boolean | undefined;
}, {
    displayUnverifiedImage?: boolean | undefined;
    displayUnverifiedMedia?: boolean | undefined;
}>;
export type IPatch_UserPreferences_ZOD = z.infer<typeof Patch_UserPreferences_ZOD>;
export declare const Patch_UserPreferences_ZOD_FORM: z.ZodObject<{
    data: z.ZodObject<{
        displayUnverifiedImage: z.ZodOptional<z.ZodBoolean>;
        displayUnverifiedMedia: z.ZodOptional<z.ZodBoolean>;
    }, "strip", z.ZodTypeAny, {
        displayUnverifiedImage?: boolean | undefined;
        displayUnverifiedMedia?: boolean | undefined;
    }, {
        displayUnverifiedImage?: boolean | undefined;
        displayUnverifiedMedia?: boolean | undefined;
    }>;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    data: {
        displayUnverifiedImage?: boolean | undefined;
        displayUnverifiedMedia?: boolean | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        displayUnverifiedImage?: boolean | undefined;
        displayUnverifiedMedia?: boolean | undefined;
    };
    note?: string | undefined;
}>;
export type IPatch_UserPreferences_ZOD_FORM = z.infer<typeof Patch_UserPreferences_ZOD_FORM>;
export declare const UserDataToPatchPreferencesZOD: (data: IUser) => Partial<IPatch_UserPreferences_ZOD>;
//# sourceMappingURL=_user.preferencesZOD.d.ts.map