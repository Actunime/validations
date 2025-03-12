import { z } from "zod";
import { IGroupe } from "@actunime/types";
export declare const GroupeQueryBody: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export declare const GroupeSortBody: z.ZodObject<{
    name: z.ZodEffects<z.ZodNumber, number, number>;
    createdAt: z.ZodEffects<z.ZodNumber, number, number>;
    updatedAt: z.ZodEffects<z.ZodNumber, number, number>;
}, "strip", z.ZodTypeAny, {
    createdAt: number;
    name: number;
    updatedAt: number;
}, {
    createdAt: number;
    name: number;
    updatedAt: number;
}>;
export declare const GroupePaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        name: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
    }, {
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
    }>;
    query: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: string | undefined;
    }, {
        name?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
    };
    query: {
        name?: string | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
    };
    query: {
        name?: string | undefined;
    };
}>;
export type IGroupePaginationBody = z.infer<typeof GroupePaginationBody>;
export declare const Groupe_Pagination_ZOD: z.ZodObject<{
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
        name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        allowUnverified: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        animes: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        mangas: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        animes?: boolean | undefined;
        mangas?: boolean | undefined;
    }, {
        animes?: boolean | undefined;
        mangas?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {
        animes?: boolean | undefined;
        mangas?: boolean | undefined;
    } | undefined;
}, {
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {
        animes?: boolean | undefined;
        mangas?: boolean | undefined;
    } | undefined;
}>;
export type IGroupe_Pagination_ZOD = z.infer<typeof Groupe_Pagination_ZOD>;
export declare const Create_Groupe_ZOD: z.ZodObject<{
    name: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
}, {
    name: string;
}>;
export type ICreate_Groupe_ZOD = z.infer<typeof Create_Groupe_ZOD>;
export declare const GroupeCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        name: string;
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
        name: string;
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export type IGroupeCreateBody = z.infer<typeof GroupeCreateBody>;
export declare const Add_Groupe_ZOD: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newGroupe: z.ZodOptional<z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    newGroupe?: {
        name: string;
    } | undefined;
}, {
    id?: string | undefined;
    newGroupe?: {
        name: string;
    } | undefined;
}>;
export type IAdd_Groupe_ZOD = z.infer<typeof Add_Groupe_ZOD>;
export declare const Create_Groupe_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        name: string;
    }, {
        name: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        name: string;
    };
    note?: string | undefined;
}, {
    data: {
        name: string;
    };
    note?: string | undefined;
}>;
export type ICreate_Groupe_ZOD_FORM = z.infer<typeof Create_Groupe_ZOD_FORM>;
export declare const GroupeDataToZOD: (data: IGroupe) => {
    name: string;
} | undefined;
