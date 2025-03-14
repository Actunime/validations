"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaDeleteBody = exports.FromBody = exports.MediaTrailerZod = exports.MediaTitleBody = exports.MediaTitleZodSchema = exports.LinkBody = exports.Create_Link_ZOD = exports.MediaImageZodSchema = exports.MediaDateBody = exports.MediaDateZodSchema = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
exports.MediaDateZodSchema = zod_1.z.object({
    start: zod_1.z.optional(zod_1.z
        .string()
        .refine((v) => (0, _util_1.zodDate)().safeParse(v).success, {
        message: "date invalide",
    })),
    end: zod_1.z.optional(zod_1.z
        .string()
        .refine((v) => (0, _util_1.zodDate)().safeParse(v).success, {
        message: "date invalide",
    })),
});
exports.MediaDateBody = zod_1.z.object({
    start: zod_1.z.string(),
    end: zod_1.z.string(),
});
exports.MediaImageZodSchema = zod_1.z.object({
    cover: zod_1.z.optional(zod_1.z.string()),
    banner: zod_1.z.optional(zod_1.z.string()),
});
const urlRegex = /^(https:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/;
exports.Create_Link_ZOD = zod_1.z.object({
    name: zod_1.z.string().min(3, "le nom dois contenir au moins 3 caractères"),
    value: zod_1.z.string().refine((value) => urlRegex.test(value), {
        message: "Doit être une URL HTTPS valide",
    }),
});
exports.LinkBody = zod_1.z.object({
    name: zod_1.z.string().default("Actunime"),
    value: zod_1.z.string().regex(urlRegex, "Lien HTTPS invalide").default("https://actunime.fr/")
});
exports.MediaTitleZodSchema = zod_1.z
    .object({
    default: zod_1.z.string().min(3, "le nom doit contenir au moins 3 caractères"),
    // .refine((v) => !!v, {
    //   message: "La valeur par défaut est obligatoire",
    // }),
    alias: zod_1.z.optional(zod_1.z.array(zod_1.z.object({
        content: zod_1.z
            .string()
            .min(2, "le nom doit contenir au moins 2 caractères"),
    }))),
})
    .refine((v) => !v.alias?.find(({ content }) => content === v.default) ||
    `La valeur de alias ne doit pas contenir la valeur par défaut`);
exports.MediaTitleBody = zod_1.z.object({
    default: zod_1.z.string(),
    alias: zod_1.z.array(zod_1.z.object({ content: zod_1.z.string() }))
});
// Définir une regex pour les URL de vidéos YouTube
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
// Créer un schéma Zod pour valider les URL YouTube
exports.MediaTrailerZod = zod_1.z.string().regex(youtubeUrlRegex, {
    message: "L'URL doit être une URL de vidéo YouTube valide."
});
exports.FromBody = zod_1.z.object({
    id: zod_1.z.string(),
    path: zod_1.z.enum(types_1.TargetPathArray),
});
exports.MediaDeleteBody = zod_1.z.object({
    reason: zod_1.z.string(),
});
//# sourceMappingURL=_media.js.map