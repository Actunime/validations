"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connexion_Zod_Schema = void 0;
const zod_1 = require("zod");
exports.Connexion_Zod_Schema = zod_1.z.object({
    email: zod_1.z
        .string({ required_error: "Veuillez renseigner votre email" })
        .email({ message: "L'email est invalide" }),
    captcha: zod_1.z.string({ required_error: "Veuillez résoudre le captcha" }),
});
