import { z } from "zod";
import { IImage } from "@actunime/types";
export declare const Image_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
        updatedAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
    }, "strict", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        allowUnverified: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        ids?: string[] | undefined;
        allowUnverified?: boolean | undefined;
    }, {
        ids?: string[] | undefined;
        allowUnverified?: boolean | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        ids?: string[] | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {} | undefined;
}, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        ids?: string[] | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {} | undefined;
}>;
export type IImage_Pagination_ZOD = z.infer<typeof Image_Pagination_ZOD>;
export declare const Create_Image_ZOD: z.ZodObject<{
    label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    value: string;
    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
}, {
    value: string;
    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
}>;
export type ICreate_Image_ZOD = z.infer<typeof Create_Image_ZOD>;
export declare const Create_Image_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        value: string;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        value: string;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        value: string;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        value: string;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    note?: string | undefined;
}>;
export type ICreate_Image_ZOD_FORM = z.infer<typeof Create_Image_ZOD_FORM>;
export declare const Add_Image_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Image_ZOD = z.infer<typeof Add_Image_ZOD>;
export declare const ImageDataToZOD: (data: IImage) => {
    value: string;
    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
} | undefined;
//# sourceMappingURL=_imageZOD.d.ts.map