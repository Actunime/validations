import { z } from "zod";
export declare const Auth_Validation_ZOD: z.ZodObject<{
    email: z.ZodString;
    code: z.ZodString;
}, "strip", z.ZodTypeAny, {
    code: string;
    email: string;
}, {
    code: string;
    email: string;
}>;
export type IAuth_Validation_ZOD = z.infer<typeof Auth_Validation_ZOD>;
//# sourceMappingURL=_authValidationZOD.d.ts.map