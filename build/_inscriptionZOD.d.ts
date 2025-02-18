import { z } from "zod";
export declare const Inscription_Zod_Schema: z.ZodObject<{
    email: z.ZodString;
    username: z.ZodEffects<z.ZodString, string, string>;
    displayName: z.ZodEffects<z.ZodString, string, string>;
    bio: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
}, "strip", z.ZodTypeAny, {
    email: string;
    username: string;
    displayName: string;
    bio?: string | undefined;
}, {
    email: string;
    username: string;
    displayName: string;
    bio?: string | undefined;
}>;
export type IInscription_Zod_Schema = z.infer<typeof Inscription_Zod_Schema>;
//# sourceMappingURL=_inscriptionZOD.d.ts.map