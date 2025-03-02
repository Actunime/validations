import { z } from "zod";
export declare const Update_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        updaptedAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
        createdAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
    }, "strict", z.ZodTypeAny, {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    }, {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        target: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetPath: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, "many">]>>>;
        author: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] & [string, ...string[]]>, "many">, z.ZodEnum<("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] & [string, ...string[]]>]>>>;
        actionLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH")[] & [string, ...string[]]>>>;
        actionUser: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        type: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] & [string, ...string[]]>, "many">]>>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionLabel?: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH" | undefined;
        actionUser?: string | undefined;
        ref?: string | undefined;
    }, {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionLabel?: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH" | undefined;
        actionUser?: string | undefined;
        ref?: string | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        author: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        target: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        actions: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        author?: boolean | undefined;
        target?: boolean | undefined;
        ref?: boolean | undefined;
        actions?: boolean | undefined;
    }, {
        author?: boolean | undefined;
        target?: boolean | undefined;
        ref?: boolean | undefined;
        actions?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionLabel?: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH" | undefined;
        actionUser?: string | undefined;
        ref?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        target?: boolean | undefined;
        ref?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}, {
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionLabel?: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH" | undefined;
        actionUser?: string | undefined;
        ref?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        target?: boolean | undefined;
        ref?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}>;
export type IUpdate_Pagination_ZOD = z.infer<typeof Update_Pagination_ZOD>;
export declare const Update_Action_ZOD: z.ZodObject<{
    label: z.ZodEnum<("IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH")[] & [string, ...string[]]>;
    note: z.ZodString;
    changes: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    label: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH";
    note: string;
    changes?: any;
}, {
    label: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH";
    note: string;
    changes?: any;
}>;
export type IUpdate_Action_ZOD = z.infer<typeof Update_Action_ZOD>;
