import { z } from "zod";
import { IGroupe } from "@actunime/types";
export declare const GroupeQueryBody: z.ZodObject<{
    name: z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        default?: string | undefined;
        alias?: string[] | undefined;
    }, {
        default?: string | undefined;
        alias?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
}, {
    name: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
}>;
export declare const GroupeSortBody: z.ZodObject<{
    name: z.ZodEffects<z.ZodNumber, number, number>;
    createdAt: z.ZodEffects<z.ZodNumber, number, number>;
    updatedAt: z.ZodEffects<z.ZodNumber, number, number>;
}, "strip", z.ZodTypeAny, {
    name: number;
    createdAt: number;
    updatedAt: number;
}, {
    name: number;
    createdAt: number;
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
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    }, {
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    }>;
    query: z.ZodObject<{
        name: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            default?: string | undefined;
            alias?: string[] | undefined;
        }, {
            default?: string | undefined;
            alias?: string[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
    }, {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    sort: {
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
    };
}, {
    sort: {
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
    };
}>;
export type IGroupePaginationBody = z.infer<typeof GroupePaginationBody>;
export declare const GroupeBody: z.ZodObject<{
    name: z.ZodObject<{
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: string[] | undefined;
    }, {
        default: string;
        alias?: string[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
}, {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
}>;
export type IGroupeBody = z.infer<typeof GroupeBody>;
export declare const GroupeCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        name: z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
            alias?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    }, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    };
    reason?: string | undefined;
    description?: string | undefined;
}, {
    data: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type IGroupeCreateBody = z.infer<typeof GroupeCreateBody>;
export declare const GroupeAddBody: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newGroupe: z.ZodOptional<z.ZodObject<{
        name: z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
            alias?: string[] | undefined;
        }>;
    }, "strip", z.ZodTypeAny, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    }, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    }>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    newGroupe?: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    } | undefined;
}, {
    id?: string | undefined;
    newGroupe?: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
    } | undefined;
}>;
export type IGroupeAddBody = z.infer<typeof GroupeAddBody>;
export declare const GroupeDataToZOD: (data: IGroupe) => {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
} | undefined;
