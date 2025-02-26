"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inscription_Zod_Schema = void 0;
const zod_1 = require("zod");
const _imageZOD_1 = require("./_imageZOD");
exports.Inscription_Zod_Schema = zod_1.z.object({
    account: zod_1.z
        .object({
        email: zod_1.z
            .string({ required_error: "Veuillez renseigner votre email" })
            .email({ message: "L'email est invalide" }),
        password: zod_1.z
            .string({ required_error: "Veuillez renseigner votre mot de passe" }),
    }),
    user: zod_1.z
        .object({
        username: zod_1.z
            .string({ required_error: "Veuillez renseigner votre nom d'utilisateur" })
            .regex(/^[A-Za-z0-9_-]{2,21}$/gs, "Nom d'utilisateur invalide")
            .min(2, "Le nom d'utilisateur doit contenir au moins 2 caractères")
            .max(21, "Le nom d'utilisateur doit contenir au maximum 21 caractères")
            .refine((v) => !zod_1.z.string().url().safeParse(v).success, "Votre nom d'utilisateur ne doit pas contenir de lien"),
        displayName: zod_1.z
            .string({ required_error: "Veuillez renseigner votre pseudonyme" })
            .min(2, "Le pseudonyme doit contenir au moins 2 caractères")
            .max(32, "Le pseudonyme doit contenir au maximum 32 caractères")
            .refine((v) => !zod_1.z.string().url().safeParse(v).success, "Votre pseudonyme ne doit pas contenir de lien"),
        bio: zod_1.z.optional(zod_1.z.string()
            .max(200, "Maximum de 200 caractères")
            .refine((v) => !zod_1.z.string().url().safeParse(v).success, "La biographie ne doit pas contenir de lien")),
        avatar: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
        banner: zod_1.z.optional(_imageZOD_1.Add_Image_ZOD),
    }),
    captcha: zod_1.z.string({ required_error: "Veuillez résoudre le captcha" }),
});
//# sourceMappingURL=_inscriptionZOD.js.map