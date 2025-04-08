import { z } from 'zod';
import { zodNumber } from './_util';
import { TargetPathArray, } from '@actunime/types';
export const DateBody = z.object({
    year: z.optional(zodNumber()),
    month: z.optional(zodNumber()),
    day: z.optional(zodNumber()),
    hours: z.optional(zodNumber()),
    minutes: z.optional(zodNumber()),
    seconds: z.optional(zodNumber()),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const DateSortBody = z.object({
    year: z.optional(zodNumber().refine(check, checkErr)),
    month: z.optional(zodNumber().refine(check, checkErr)),
    day: z.optional(zodNumber().refine(check, checkErr)),
    hours: z.optional(zodNumber().refine(check, checkErr)),
    minutes: z.optional(zodNumber().refine(check, checkErr)),
    seconds: z.optional(zodNumber().refine(check, checkErr)),
});
export const MediaDateBody = z.object({
    start: DateBody,
    end: DateBody,
});
export const MediaDateSortBody = z.object({
    start: z.optional(DateSortBody),
    end: z.optional(DateSortBody),
});
export const MediaImageZodSchema = z.object({
    cover: z.optional(z.string()),
    banner: z.optional(z.string()),
});
const urlRegex = /^(https:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/;
export const MediaLinkBody = z.object({
    name: z.string().trim(),
    value: z.string().trim().regex(urlRegex, 'Lien HTTPS invalide'),
});
export const MediaTitleBody = z.object({
    default: z
        .string()
        .trim()
        .min(2, 'le nom doit contenir au moins 2 caractères'),
    alias: z.optional(z.array(z.string().trim().min(2, 'le nom doit contenir au moins 2 caractères'))),
});
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;
export const YoutubeURLStringBody = z.string().trim().regex(youtubeUrlRegex, {
    message: "L'URL doit être une URL de vidéo YouTube valide.",
});
export const FromBody = z.object({
    id: z.string(),
    path: z.enum(TargetPathArray),
});
export const MediaDeleteBody = z.object({
    reason: z.string(),
    reccursive: z.boolean(),
});
export const MediaVerifyBody = z.object({
    reason: z.string(),
    reccursive: z.boolean(),
});
