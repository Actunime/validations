import { z } from "zod";
import { zodNumber } from "./_util";
import { IMediaDate, IMediaLink, IMediaTitle, TargetPathArray } from "@actunime/types";

export type EqualType<T, Expected extends T> = T extends Expected ? Expected extends T ? T : never : never;


export const DateBody = z.object({
  year: z.optional(zodNumber()),
  month: z.optional(zodNumber()),
  day: z.optional(zodNumber()),
  hour: z.optional(zodNumber()),
  minute: z.optional(zodNumber())
})

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";

export const DateSortBody = z.object({
  year: z.optional(zodNumber().refine(check, checkErr)),
  month: z.optional(zodNumber().refine(check, checkErr)),
  day: z.optional(zodNumber().refine(check, checkErr)),
  hour: z.optional(zodNumber().refine(check, checkErr)),
  minute: z.optional(zodNumber().refine(check, checkErr)),
})

export const MediaDateBody = z.object({
  start: DateBody,
  end: DateBody
})

export type IMediaDateBody = EqualType<IMediaDate, z.infer<typeof MediaDateBody>>;

export const MediaDateSortBody = z.object({
  start: z.optional(DateSortBody),
  end: z.optional(DateSortBody)
})

export const MediaImageZodSchema = z.object({
  cover: z.optional(z.string()),
  banner: z.optional(z.string()),
});

const urlRegex =
  /^(https:\/\/)?([a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?)$/;
export const Create_Link_ZOD = z.object({
  name: z.string().min(3, "le nom dois contenir au moins 3 caractères"),
  value: z.string().refine((value) => urlRegex.test(value), {
    message: "Doit être une URL HTTPS valide",
  }),
});

export const LinkBody = z.object({
  name: z.string().default("Actunime"),
  value: z.string().regex(urlRegex, "Lien HTTPS invalide").default("https://actunime.fr/")
})

export type IMediaLinkBody = EqualType<IMediaLink, z.infer<typeof LinkBody>>;

export type ICreate_Link_ZOD = z.infer<typeof Create_Link_ZOD>;

export const MediaTitleZodSchema = z
  .object({
    default: z.string().min(3, "le nom doit contenir au moins 3 caractères"),
    // .refine((v) => !!v, {
    //   message: "La valeur par défaut est obligatoire",
    // }),
    alias: z.optional(
      z.array(
        z.string().min(2, "le nom doit contenir au moins 2 caractères")
      ),
    ),
  })
  .refine(
    (v) =>
      !v.alias?.find((content) => content === v.default) ||
      `La valeur de alias ne doit pas contenir la valeur par défaut`,
  );

export type IMediaTitleZodSchema = EqualType<IMediaTitle, z.infer<typeof MediaTitleZodSchema>>;

export const MediaTitleBody = z.object({
  default: z.string(),
  alias: z.optional(z.array(z.string()))
})

export type IMediaTitleBody = EqualType<IMediaTitle, z.infer<typeof MediaTitleBody>>


// Définir une regex pour les URL de vidéos YouTube
const youtubeUrlRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/;

// Créer un schéma Zod pour valider les URL YouTube
export const MediaTrailerZod = z.string().regex(youtubeUrlRegex, {
  message: "L'URL doit être une URL de vidéo YouTube valide."
});


export const FromBody = z.object({
  id: z.string(),
  path: z.enum(TargetPathArray),
})

export const MediaDeleteBody = z.object({
  reason: z.string(),
  reccursive: z.boolean(),
})

export type IMediaDeleteBody = z.infer<typeof MediaDeleteBody>;

export const MediaVerifyBody = z.object({
  reason: z.string(),
  reccursive: z.boolean(),
})

export type IMediaVerifyBody = z.infer<typeof MediaVerifyBody>;