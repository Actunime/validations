import { z } from "zod";
import { IMediaDate, IMediaLink, IMediaTitle } from "@actunime/types";
export type EqualType<T, Expected extends T> = T extends Expected ? Expected extends T ? T : never : never;
export declare const DateBody: z.ZodObject<{
    year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    hour: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    minute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    month?: number | undefined;
    day?: number | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
}, {
    year?: string | number | undefined;
    month?: string | number | undefined;
    day?: string | number | undefined;
    hour?: string | number | undefined;
    minute?: string | number | undefined;
}>;
export declare const DateSortBody: z.ZodObject<{
    year: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    month: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    day: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    hour: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    minute: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
}, "strip", z.ZodTypeAny, {
    year?: number | undefined;
    month?: number | undefined;
    day?: number | undefined;
    hour?: number | undefined;
    minute?: number | undefined;
}, {
    year?: string | number | undefined;
    month?: string | number | undefined;
    day?: string | number | undefined;
    hour?: string | number | undefined;
    minute?: string | number | undefined;
}>;
export declare const MediaDateBody: z.ZodObject<{
    start: z.ZodObject<{
        year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        hour: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        minute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>;
    end: z.ZodObject<{
        year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        hour: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        minute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    start: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    };
    end: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    };
}, {
    start: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    };
    end: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    };
}>;
export type IMediaDateBody = EqualType<IMediaDate, z.infer<typeof MediaDateBody>>;
export declare const MediaDateSortBody: z.ZodObject<{
    start: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        month: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        day: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        hour: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        minute: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>>;
    end: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        month: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        day: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        hour: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        minute: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    start?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    } | undefined;
    end?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    } | undefined;
}, {
    start?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    } | undefined;
    end?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    } | undefined;
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
export type IMediaLinkBody = EqualType<IMediaLink, z.infer<typeof LinkBody>>;
export type ICreate_Link_ZOD = z.infer<typeof Create_Link_ZOD>;
export declare const MediaTitleZodSchema: z.ZodEffects<z.ZodObject<{
    default: z.ZodString;
    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    default: string;
    alias?: string[] | undefined;
}, {
    default: string;
    alias?: string[] | undefined;
}>, {
    default: string;
    alias?: string[] | undefined;
}, {
    default: string;
    alias?: string[] | undefined;
}>;
export type IMediaTitleZodSchema = EqualType<IMediaTitle, z.infer<typeof MediaTitleZodSchema>>;
export declare const MediaTitleBody: z.ZodObject<{
    default: z.ZodString;
    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    default: string;
    alias?: string[] | undefined;
}, {
    default: string;
    alias?: string[] | undefined;
}>;
export type IMediaTitleBody = EqualType<IMediaTitle, z.infer<typeof MediaTitleBody>>;
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
    reccursive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    reason: string;
    reccursive: boolean;
}, {
    reason: string;
    reccursive: boolean;
}>;
export type IMediaDeleteBody = z.infer<typeof MediaDeleteBody>;
export declare const MediaVerifyBody: z.ZodObject<{
    reason: z.ZodString;
    reccursive: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    reason: string;
    reccursive: boolean;
}, {
    reason: string;
    reccursive: boolean;
}>;
export type IMediaVerifyBody = z.infer<typeof MediaVerifyBody>;
