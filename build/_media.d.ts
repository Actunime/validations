import { z } from "zod";
export declare const MediaDateZodSchema: z.ZodObject<{
    start: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    end: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    start?: string | undefined;
    end?: string | undefined;
}, {
    start?: string | undefined;
    end?: string | undefined;
}>;
export declare const MediaDateBody: z.ZodObject<{
    start: z.ZodString;
    end: z.ZodString;
}, "strip", z.ZodTypeAny, {
    start: string;
    end: string;
}, {
    start: string;
    end: string;
}>;
export declare const MediaImageZodSchema: z.ZodObject<{
    cover: z.ZodOptional<z.ZodString>;
    banner: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    cover?: string | undefined;
    banner?: string | undefined;
}, {
    cover?: string | undefined;
    banner?: string | undefined;
}>;
export declare const Create_Link_ZOD: z.ZodObject<{
    name: z.ZodString;
    value: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
}, {
    value: string;
    name: string;
}>;
export declare const LinkBody: z.ZodObject<{
    name: z.ZodDefault<z.ZodString>;
    value: z.ZodDefault<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    value: string;
    name: string;
}, {
    value?: string | undefined;
    name?: string | undefined;
}>;
export type ICreate_Link_ZOD = z.infer<typeof Create_Link_ZOD>;
export declare const MediaTitleZodSchema: z.ZodEffects<z.ZodObject<{
    default: z.ZodString;
    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
    }, {
        content: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    default: string;
    alias?: {
        content: string;
    }[] | undefined;
}, {
    default: string;
    alias?: {
        content: string;
    }[] | undefined;
}>, {
    default: string;
    alias?: {
        content: string;
    }[] | undefined;
}, {
    default: string;
    alias?: {
        content: string;
    }[] | undefined;
}>;
export declare const MediaTitleBody: z.ZodObject<{
    default: z.ZodString;
    alias: z.ZodArray<z.ZodObject<{
        content: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        content: string;
    }, {
        content: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    default: string;
    alias: {
        content: string;
    }[];
}, {
    default: string;
    alias: {
        content: string;
    }[];
}>;
export declare const MediaTrailerZod: z.ZodString;
export declare const FromBody: z.ZodObject<{
    id: z.ZodString;
    path: z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>;
}, "strip", z.ZodTypeAny, {
    path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
    id: string;
}, {
    path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
    id: string;
}>;
export declare const MediaDeleteBody: z.ZodObject<{
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
}, {
    reason: string;
}>;
export type IMediaDeleteBody = z.infer<typeof MediaDeleteBody>;
