import { z } from "zod";
export declare const Create_Message_ZOD: z.ZodObject<{
    content: z.ZodString;
    replyTo: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    content: string;
    replyTo?: string | undefined;
}, {
    content: string;
    replyTo?: string | undefined;
}>;
export type ICreate_Message_ZOD = z.infer<typeof Create_Message_ZOD>;
