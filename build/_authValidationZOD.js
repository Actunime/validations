import { z } from "zod";
export const Auth_Validation_ZOD = z.object({
    email: z
        .string({ required_error: "Veuillez renseigner votre email" })
        .email({ message: "Email invalide" }),
    code: z.string({ required_error: "Veuillez renseigner le code" }),
});
