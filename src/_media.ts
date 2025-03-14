import { z } from "zod";
import { zodDate } from "./_util";
import { TargetPathArray } from "@actunime/types";

export const MediaDateZodSchema = z.object({
  start: z.optional(
    z
      .string()
      .refine((v) => zodDate().safeParse(v).success, {
        message: "date invalide",
      }),
  ),
  end: z.optional(
    z
      .string()
      .refine((v) => zodDate().safeParse(v).success, {
        message: "date invalide",
      }),
  ),
});

export const MediaDateBody = z.object({
  start: z.string(),
  end: z.string(),
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

export type ICreate_Link_ZOD = z.infer<typeof Create_Link_ZOD>;

export const MediaTitleZodSchema = z
  .object({
    default: z.string().min(3, "le nom doit contenir au moins 3 caractères"),
    // .refine((v) => !!v, {
    //   message: "La valeur par défaut est obligatoire",
    // }),
    alias: z.optional(
      z.array(
        z.object({
          content: z
            .string()
            .min(2, "le nom doit contenir au moins 2 caractères"),
        }),
      ),
    ),
  })
  .refine(
    (v) =>
      !v.alias?.find(({ content }) => content === v.default) ||
      `La valeur de alias ne doit pas contenir la valeur par défaut`,
  );

export const MediaTitleBody = z.object({
  default: z.string(),
  alias: z.array(z.object({ content: z.string() }))
})


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
})

export type IMediaDeleteBody = z.infer<typeof MediaDeleteBody>;