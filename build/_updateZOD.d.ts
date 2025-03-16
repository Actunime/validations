import { z } from "zod";
export declare const Update_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        updaptedAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
        createdAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
    }, "strict", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        target: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetPath: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, "many">]>>>;
        author: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>, "many">, z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>]>>>;
        actionUser: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        type: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] & [string, ...string[]]>, "many">]>>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionUser?: string | undefined;
    }, {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionUser?: string | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        author: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        target: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        actions: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    }, {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionUser?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}, {
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        type?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser" | ("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] | undefined;
        actionUser?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}>;
export type IUpdate_Pagination_ZOD = z.infer<typeof Update_Pagination_ZOD>;
export declare const Update_Action_ZOD: z.ZodObject<{
    note: z.ZodString;
    changes: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    note: string;
    changes?: any;
}, {
    note: string;
    changes?: any;
}>;
export type IUpdate_Action_ZOD = z.infer<typeof Update_Action_ZOD>;
