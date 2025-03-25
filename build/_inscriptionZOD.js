import { z } from 'zod';
import { ImageAddBody } from './_imageZOD';
export const Inscription_Zod_Schema = z.object({
    account: z.object({
        email: z
            .string({ required_error: 'Veuillez renseigner votre email' })
            .email({ message: "L'email est invalide" }),
        password: z.string({
            required_error: 'Veuillez renseigner votre mot de passe',
        }),
    }),
    user: z.object({
        username: z
            .string({ required_error: "Veuillez renseigner votre nom d'utilisateur" })
            .regex(/^[A-Za-z0-9_-]{2,21}$/gs, "Nom d'utilisateur invalide")
            .min(2, "Le nom d'utilisateur doit contenir au moins 2 caractères")
            .max(21, "Le nom d'utilisateur doit contenir au maximum 21 caractères")
            .refine((v) => !z.string().url().safeParse(v).success, "Votre nom d'utilisateur ne doit pas contenir de lien"),
        displayName: z
            .string({ required_error: 'Veuillez renseigner votre pseudonyme' })
            .min(2, 'Le pseudonyme doit contenir au moins 2 caractères')
            .max(32, 'Le pseudonyme doit contenir au maximum 32 caractères')
            .refine((v) => !z.string().url().safeParse(v).success, 'Votre pseudonyme ne doit pas contenir de lien'),
        description: z.optional(z
            .string()
            .max(200, 'Maximum de 200 caractères')
            .refine((v) => !z.string().url().safeParse(v).success, 'La biographie ne doit pas contenir de lien')),
        avatar: z.optional(ImageAddBody),
        banner: z.optional(ImageAddBody),
    }),
    captcha: z.string({ required_error: 'Veuillez résoudre le captcha' }),
});
