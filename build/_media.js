"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaTitleZodSchema = exports.Create_Link_ZOD = exports.MediaImageZodSchema = exports.MediaDateZodSchema = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
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
