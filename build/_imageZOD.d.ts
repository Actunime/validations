import { z } from 'zod';
import { IImageFull } from '@actunime/types';
export declare const ImageQueryBody: z.ZodObject<{
    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    createdAt: string;
    updatedAt: string;
}, {
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    createdAt: string;
    updatedAt: string;
}>;
export declare const ImageSortBody: z.ZodObject<{
    label: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    label: number;
    createdAt: number;
    updatedAt: number;
}, {
    label: string | number;
    createdAt: string | number;
    updatedAt: string | number;
}>;
export declare const ImagePaginationBody: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    strict: z.ZodOptional<z.ZodBoolean>;
    onlyVerified: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodObject<{
        label: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        label?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    }, {
        label?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    }>>;
    from: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        path: z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    }, {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    sort?: {
        label?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}, {
    sort?: {
        label?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}>;
export type IImagePaginationBody = z.infer<typeof ImagePaginationBody>;
export declare const ImageBody: z.ZodObject<{
    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    value: string;
}, {
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    value: string;
}>;
export type IImageBody = z.infer<typeof ImageBody>;
export declare const ImageCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    }, {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export type IImageCreateBody = z.infer<typeof ImageCreateBody>;
export declare const ImageAddBody: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
    newImage: z.ZodOptional<z.ZodObject<{
        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    }, {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    id?: string | undefined;
    newImage?: {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    } | undefined;
}, {
    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    id?: string | undefined;
    newImage?: {
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        value: string;
    } | undefined;
}>;
export type IImageAddBody = z.infer<typeof ImageAddBody>;
export declare const ImageDataToZOD: (data: IImageFull) => {
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    value: string;
} | undefined;
