import { z } from "zod";
export declare const Patch_Pagination_ZOD: z.ZodObject<{
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
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionLabel?: "IN_PROGRESS" | "REQUEST" | "CHANGE" | "ACCEPT" | "REJECT" | "REVERT" | "DIRECT_CREATE" | "DIRECT_PATCH" | undefined;
        actionUser?: string | undefined;
        ref?: string | undefined;
    }, {
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
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
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
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
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        status?: "PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED" | ("PENDING" | "IN_PROGRESS" | "ACCEPTED" | "REJECTED" | "REVERTED")[] | undefined;
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "CREATE_REQUEST" | "PATCH" | "UPDATE_REQUEST" | "DELETE" | "DELETE_FORCE" | "DELETE_RESTORE")[] | undefined;
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
export type IPatch_Pagination_ZOD = z.infer<typeof Patch_Pagination_ZOD>;
export declare const Patch_Action_ZOD: z.ZodObject<{
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
export type IPatch_Action_ZOD = z.infer<typeof Patch_Action_ZOD>;
export declare const AddChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    id: string;
    note?: string | undefined;
    data?: any;
}, {
    id: string;
    note?: string | undefined;
    data?: any;
}>;
export type IAddChangesToPatch_ZOD = z.infer<typeof AddChangesToPatch_ZOD>;
export declare const AcceptChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IAcceptChangesToPatch_ZOD = z.infer<typeof AcceptChangesToPatch_ZOD>;
export declare const DenyChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IDenyChangesToPatch_ZOD = z.infer<typeof DenyChangesToPatch_ZOD>;
export declare const DeletePatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IDeletePatch_ZOD = z.infer<typeof DeletePatch_ZOD>;
//# sourceMappingURL=_patchZOD.d.ts.map