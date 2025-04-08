import { z } from 'zod';
export declare const GlobalSearchQueryBody: z.ZodObject<{
    search: z.ZodString;
    path: z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>;
}, "strip", z.ZodTypeAny, {
    path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    search: string;
}, {
    path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    search: string;
}>;
export declare const GlobalSearchSortBody: z.ZodObject<{
    original: z.ZodEffects<z.ZodNumber, number, number>;
    normal: z.ZodEffects<z.ZodNumber, number, number>;
}, "strip", z.ZodTypeAny, {
    original: number;
    normal: number;
}, {
    original: number;
    normal: number;
}>;
export declare const GlobalSearchPaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        original: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        normal: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    }, "strip", z.ZodTypeAny, {
        original?: number | undefined;
        normal?: number | undefined;
    }, {
        original?: number | undefined;
        normal?: number | undefined;
    }>;
    query: z.ZodObject<{
        search: z.ZodOptional<z.ZodString>;
        path: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        path?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        search?: string | undefined;
    }, {
        path?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        search?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    sort: {
        original?: number | undefined;
        normal?: number | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        path?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        search?: string | undefined;
    };
}, {
    sort: {
        original?: number | undefined;
        normal?: number | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        path?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        search?: string | undefined;
    };
}>;
export type IGlobalSearchPaginationBody = z.infer<typeof GlobalSearchPaginationBody>;
export declare const GlobalSearchBody: z.ZodObject<{
    search: z.ZodString;
    path: z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>;
}, "strip", z.ZodTypeAny, {
    path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    search: string;
}, {
    path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    search: string;
}>;
export type IGlobalSearchBody = z.infer<typeof GlobalSearchBody>;
