import { z } from "zod";
export declare const Connexion_Zod_Schema: z.ZodObject<{
    email: z.ZodString;
    captcha: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    captcha: string;
}, {
    email: string;
    captcha: string;
}>;
export type IConnexion_Zod_Schema = z.infer<typeof Connexion_Zod_Schema>;
//# sourceMappingURL=_connexionZOD.d.ts.map