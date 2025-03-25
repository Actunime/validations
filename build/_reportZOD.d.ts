import { z } from "zod";
export declare const Report_Pagination_ZOD: z.ZodObject<{
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
        subject: z.ZodOptional<z.ZodOptional<z.ZodEnum<("USER_IMAGE" | "USER_INFO")[] & [string, ...string[]]>>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodEnum<("PENDING" | "REJECTED" | "VERIFIED")[] & [string, ...string[]]>>>;
        by: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        author: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        target: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetPath: z.ZodOptional<z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>>;
    }, "strict", z.ZodTypeAny, {
        status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        subject?: "USER_IMAGE" | "USER_INFO" | undefined;
        by?: string | undefined;
    }, {
        status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        subject?: "USER_IMAGE" | "USER_INFO" | undefined;
        by?: string | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        by: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        author: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        target: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        author?: boolean | undefined;
        target?: boolean | undefined;
        by?: boolean | undefined;
    }, {
        author?: boolean | undefined;
        target?: boolean | undefined;
        by?: boolean | undefined;
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
        status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        subject?: "USER_IMAGE" | "USER_INFO" | undefined;
        by?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        target?: boolean | undefined;
        by?: boolean | undefined;
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
        status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
        author?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        subject?: "USER_IMAGE" | "USER_INFO" | undefined;
        by?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        target?: boolean | undefined;
        by?: boolean | undefined;
    } | undefined;
}>;
export type IReport_Pagination_ZOD = z.infer<typeof Report_Pagination_ZOD>;
export declare const Create_Report_ZOD: z.ZodObject<{
    status: z.ZodEnum<("PENDING" | "REJECTED" | "VERIFIED")[] & [string, ...string[]]>;
}, "strict", z.ZodTypeAny, {
    status: "PENDING" | "REJECTED" | "VERIFIED";
}, {
    status: "PENDING" | "REJECTED" | "VERIFIED";
}>;
export type ICreate_Report_ZOD = z.infer<typeof Create_Report_ZOD>;
export declare const Create_Report_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        status: z.ZodEnum<("PENDING" | "REJECTED" | "VERIFIED")[] & [string, ...string[]]>;
    }, "strict", z.ZodTypeAny, {
        status: "PENDING" | "REJECTED" | "VERIFIED";
    }, {
        status: "PENDING" | "REJECTED" | "VERIFIED";
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        status: "PENDING" | "REJECTED" | "VERIFIED";
    };
    note?: string | undefined;
}, {
    data: {
        status: "PENDING" | "REJECTED" | "VERIFIED";
    };
    note?: string | undefined;
}>;
export type ICreate_Report_ZOD_FORM = z.infer<typeof Create_Report_ZOD_FORM>;
export declare const Patch_Report_ZOD: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<("PENDING" | "REJECTED" | "VERIFIED")[] & [string, ...string[]]>>;
}, "strict", z.ZodTypeAny, {
    status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
}, {
    status?: "PENDING" | "REJECTED" | "VERIFIED" | undefined;
}>;
export type IPatch_Report_ZOD = z.infer<typeof Patch_Report_ZOD>;
