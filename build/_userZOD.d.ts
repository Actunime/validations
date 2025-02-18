import { IUser } from "@actunime/types";
import { z } from "zod";
export declare const User_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    query: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        roles: z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>;
        allowUnverified: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
        id?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
        id?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        avatar: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        banner: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        banner?: boolean | undefined;
        avatar?: boolean | undefined;
    }, {
        banner?: boolean | undefined;
        avatar?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
        id?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    } | undefined;
    with?: {
        banner?: boolean | undefined;
        avatar?: boolean | undefined;
    } | undefined;
}, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
        id?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    } | undefined;
    with?: {
        banner?: boolean | undefined;
        avatar?: boolean | undefined;
    } | undefined;
}>;
export type IUser_Pagination_ZOD = z.infer<typeof User_Pagination_ZOD>;
export declare const Patch_User_ZOD: z.ZodObject<{
    username: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    displayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    bio: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>>;
    avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        newImage: z.ZodOptional<z.ZodObject<{
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }>>>;
    banner: z.ZodOptional<z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        newImage: z.ZodOptional<z.ZodObject<{
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    banner?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    bio?: string | undefined;
    avatar?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    username?: string | undefined;
    displayName?: string | undefined;
    roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
}, {
    banner?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    bio?: string | undefined;
    avatar?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    username?: string | undefined;
    displayName?: string | undefined;
    roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
}>;
export type IPatch_User_ZOD = z.infer<typeof Patch_User_ZOD>;
export declare const Patch_User_ZOD_FORM: z.ZodObject<{
    data: z.ZodObject<{
        username: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        displayName: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        bio: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        roles: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>>;
        avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }>>>;
        banner: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }>>>;
    }, "strip", z.ZodTypeAny, {
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }, {
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    };
    note?: string | undefined;
}>;
export type IPatch_User_ZOD_FORM = z.infer<typeof Patch_User_ZOD_FORM>;
export declare const Disable_User_ZOD_FORM: z.ZodObject<{
    reason: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reason: string;
    note?: string | undefined;
}, {
    reason: string;
    note?: string | undefined;
}>;
export type IDisable_User_ZOD_FORM = z.infer<typeof Disable_User_ZOD_FORM>;
export declare const Create_User_ZOD: any;
export declare const UserDataToZOD: (data: IUser) => Partial<IPatch_User_ZOD>;
export declare const UserAnimeListe_ZOD: z.ZodObject<{
    id: z.ZodString;
    episode: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    status: z.ZodEnum<("PAUSED" | "PLANNING" | "WATCHING" | "COMPLETED" | "DROPPED")[] & [string, ...string[]]>;
    score: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    note: z.ZodOptional<z.ZodString>;
    favoris: z.ZodOptional<z.ZodBoolean>;
    rank: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    startedAt: z.ZodOptional<z.ZodString>;
    completedAt: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "PAUSED" | "PLANNING" | "WATCHING" | "COMPLETED" | "DROPPED";
    id: string;
    note?: string | undefined;
    episode?: number | undefined;
    score?: number | undefined;
    favoris?: boolean | undefined;
    rank?: number | undefined;
    startedAt?: string | undefined;
    completedAt?: string | undefined;
}, {
    status: "PAUSED" | "PLANNING" | "WATCHING" | "COMPLETED" | "DROPPED";
    id: string;
    note?: string | undefined;
    episode?: string | number | undefined;
    score?: string | number | undefined;
    favoris?: boolean | undefined;
    rank?: string | number | undefined;
    startedAt?: string | undefined;
    completedAt?: string | undefined;
}>;
export type IUserAnimeListe_ZOD = z.infer<typeof UserAnimeListe_ZOD>;
//# sourceMappingURL=_userZOD.d.ts.map