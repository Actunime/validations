import { z } from "zod";
export declare const zodBoolean: () => z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
export declare const zodNumber: () => z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>;
export declare const zodDate: () => z.ZodEffects<z.ZodUnion<[z.ZodDate, z.ZodString]>, Date, string | Date>;
export declare const PaginationBody: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort?: any;
    query?: any;
}, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort?: any;
    query?: any;
}>;
