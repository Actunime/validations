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
//# sourceMappingURL=_media.d.ts.map