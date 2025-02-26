import { z } from "zod";
export declare const AccountDatabase_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    query: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
    }, {
        id?: string | undefined;
    }>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>>;
}, "strict", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        id?: string | undefined;
    } | undefined;
    with?: {} | undefined;
}, {
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    query?: {
        id?: string | undefined;
    } | undefined;
    with?: {} | undefined;
}>;
export type IAccountDatabase_Pagination_ZOD = z.infer<typeof AccountDatabase_Pagination_ZOD>;
