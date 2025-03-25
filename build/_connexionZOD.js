import { z } from "zod";
export const Connexion_Zod_Schema = z.object({
    email: z
        .string({ required_error: "Veuillez renseigner votre email" })
        .email({ message: "L'email est invalide" }),
    captcha: z.string({ required_error: "Veuillez résoudre le captcha" }),
});
