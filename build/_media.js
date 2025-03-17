"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaVerifyBody = exports.MediaDeleteBody = exports.FromBody = exports.MediaTrailerZod = exports.MediaTitleBody = exports.MediaTitleZodSchema = exports.LinkBody = exports.Create_Link_ZOD = exports.MediaImageZodSchema = exports.MediaDateSortBody = exports.MediaDateBody = exports.DateSortBody = exports.DateBody = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
exports.DateBody = zod_1.z.object({
    year: zod_1.z.optional((0, _util_1.zodNumber)()),
    month: zod_1.z.optional((0, _util_1.zodNumber)()),
    day: zod_1.z.optional((0, _util_1.zodNumber)()),
    hour: zod_1.z.optional((0, _util_1.zodNumber)()),
    minute: zod_1.z.optional((0, _util_1.zodNumber)())
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.DateSortBody = zod_1.z.object({
    year: zod_1.z.optional((0, _util_1.zodNumber)().refine(check, checkErr)),
    month: zod_1.z.optional((0, _util_1.zodNumber)().refine(check, checkErr)),
    day: zod_1.z.optional((0, _util_1.zodNumber)().refine(check, checkErr)),
    hour: zod_1.z.optional((0, _util_1.zodNumber)().refine(check, checkErr)),
    minute: zod_1.z.optional((0, _util_1.zodNumber)().refine(check, checkErr)),
});
exports.MediaDateBody = zod_1.z.object({
    start: exports.DateBody,
    end: exports.DateBody
});
exports.MediaDateSortBody = zod_1.z.object({
    start: zod_1.z.optional(exports.DateSortBody),
    end: zod_1.z.optional(exports.DateSortBody)
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
    alias: zod_1.z.optional(zod_1.z.array(zod_1.z.string().min(2, "le nom doit contenir au moins 2 caractères"))),
})
    .refine((v) => !v.alias?.find((content) => content === v.default) ||
    `La valeur de alias ne doit pas contenir la valeur par défaut`);
exports.MediaTitleBody = zod_1.z.object({
    default: zod_1.z.string(),
    alias: zod_1.z.optional(zod_1.z.array(zod_1.z.string()))
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
    reccursive: zod_1.z.boolean(),
});
exports.MediaVerifyBody = zod_1.z.object({
    reason: zod_1.z.string(),
    reccursive: zod_1.z.boolean(),
});
//# sourceMappingURL=_media.js.map