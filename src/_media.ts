import { z } from 'zod';
import { zodNumber } from './_util';
import {
  IMediaDate,
  IMediaLink,
  IMediaTitle,
  TargetPathArray,
} from '@actunime/types';

export type EqualType<T, Expected extends T> = T extends Expected
  ? Expected extends T
    ? T
    : never
  : never;

export const DateBody = z.object({
  year: z.optional(zodNumber()),
  month: z.optional(zodNumber()),
  day: z.optional(zodNumber()),
  hours: z.optional(zodNumber()),
  minutes: z.optional(zodNumber()),
  seconds: z.optional(zodNumber()),
});

const check = (v: number) => [-1, 1].includes(v);
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

export type IMediaDateBody = EqualType<
  IMediaDate,
  z.infer<typeof MediaDateBody>
>;

export const MediaDateSortBody = z.object({
  start: z.optional(DateSortBody),
  end: z.optional(DateSortBody),
});

export const MediaImageZodSchema = z.object({
  cover: z.optional(z.string()),
  banner: z.optional(z.string()),
});

const urlRegex =
  /^(https:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/;

export const MediaLinkBody = z.object({
  name: z.string().trim(),
  value: z.string().trim().regex(urlRegex, 'Lien HTTPS invalide'),
});

export type IMediaLinkBody = EqualType<
  IMediaLink,
  z.infer<typeof MediaLinkBody>
>;

export const MediaTitleBody = z.object({
  default: z
    .string()
    .trim()
    .min(2, 'le nom doit contenir au moins 2 caractères'),
  alias: z.optional(
    z.array(
      z.string().trim().min(2, 'le nom doit contenir au moins 2 caractères')
    )
  ),
});

export type IMediaTitleBody = EqualType<
  Omit<IMediaTitle, 'normal'>,
  z.infer<typeof MediaTitleBody>
>;

// Définir une regex pour les URL de vidéos YouTube
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

// Créer un schéma Zod pour valider les URL YouTube
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

export type IMediaDeleteBody = z.infer<typeof MediaDeleteBody>;

export const MediaVerifyBody = z.object({
  reason: z.string(),
  reccursive: z.boolean(),
});

export type IMediaVerifyBody = z.infer<typeof MediaVerifyBody>;
