import { IUser } from "@actunime/types";
import { z } from "zod";
export declare const Patch_UserProfile_ZOD: z.ZodObject<{
    username: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    displayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        newImage: z.ZodOptional<z.ZodObject<{
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }>>>;
    banner: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        newImage: z.ZodOptional<z.ZodObject<{
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    description?: string | undefined;
    avatar?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    username?: string | undefined;
    displayName?: string | undefined;
    roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
}, {
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    description?: string | undefined;
    avatar?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    username?: string | undefined;
    displayName?: string | undefined;
    roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
}>;
export type IPatch_UserProfile_ZOD = z.infer<typeof Patch_UserProfile_ZOD>;
export declare const Patch_UserProfile_ZOD_FORM: z.ZodObject<{
    data: z.ZodObject<{
        username: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        displayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>>;
        avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>>;
        banner: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }, {
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }>;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    data: {
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    };
    note?: string | undefined;
}>;
export type IPatch_UserProfile_ZOD_FORM = z.infer<typeof Patch_UserProfile_ZOD_FORM>;
export declare const UserDataToPatchProfileZOD: (data: IUser) => Partial<IPatch_UserProfile_ZOD>;
