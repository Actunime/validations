import { z } from "zod";
import { IImage } from "@actunime/types";
export declare const ImageQueryBody: z.ZodObject<{
    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    createdAt: string;
    updatedAt: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}, {
    createdAt: string;
    updatedAt: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}>;
export declare const ImageSortBody: z.ZodObject<{
    label: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    createdAt: number;
    updatedAt: number;
    label: number;
}, {
    createdAt: string | number;
    updatedAt: string | number;
    label: string | number;
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
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        label?: number | undefined;
    }, {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        label?: string | number | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>>;
    from: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        path: z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    }, {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        label?: number | undefined;
    } | undefined;
    query?: {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    } | undefined;
    from?: {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    } | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        label?: string | number | undefined;
    } | undefined;
    query?: {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    } | undefined;
    from?: {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    } | undefined;
}>;
export type IImagePaginationBody = z.infer<typeof ImagePaginationBody>;
export declare const Image_Pagination_ZOD: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodObject<{
        label: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        label?: number | undefined;
    }, {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        label?: string | number | undefined;
    }>;
    query: z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        label?: number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        label?: string | number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
}>;
export type IImage_Pagination_ZOD = z.infer<typeof Image_Pagination_ZOD>;
export declare const Create_Image_ZOD: z.ZodObject<{
    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}, {
    value: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}>;
export type ICreate_Image_ZOD = z.infer<typeof Create_Image_ZOD>;
export declare const ImageCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    }, {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export type IImageCreateBody = z.infer<typeof ImageCreateBody>;
export declare const Create_Image_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    }, {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    };
    note?: string | undefined;
}, {
    data: {
        value: string;
        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
    };
    note?: string | undefined;
}>;
export type ICreate_Image_ZOD_FORM = z.infer<typeof Create_Image_ZOD_FORM>;
export declare const Add_Image_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Image_ZOD = z.infer<typeof Add_Image_ZOD>;
export declare const ImageBody: z.ZodObject<{
    id: z.ZodString;
    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
}, "strip", z.ZodTypeAny, {
    id: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}, {
    id: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
}>;
export declare const ImageDataToZOD: (data: IImage) => {
    value: string;
    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
} | undefined;
