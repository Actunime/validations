import {
  CharacterGenderArray,
  CharacterRoleArray,
  CharacterSpeciesArray,
  ICharacter,
  dateToZod,
} from "@actunime/types";
import { z } from "zod";
import { Add_Person_ZOD } from "./_personZOD";
import { zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";

export const Character_Pagination_ZOD = z
  .object({
    page: zodNumber(),
    limit: zodNumber(),
    strict: z.boolean().optional(),
    sort: z
      .object({
        updaptedAt: z.enum(["DESC", "ASC"]).optional(),
        createdAt: z.enum(["DESC", "ASC"]).optional(),
      })
      .partial()
      .strict(),
    query: z
      .object({
        name: z.optional(z.string()),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    with: z
      .object({
        actors: z.boolean().optional(),
        avatar: z.boolean().optional(),
      })
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type ICharacter_Pagination_ZOD = z.infer<
  typeof Character_Pagination_ZOD
>;

export const Character_Name_ZOD = z.object({
  default: z.string(),
  alias: z.optional(z.array(z.object({ content: z.string() }))),
});

export const Create_Character_ZOD = z
  .object({
    name: Character_Name_ZOD,
    age: z.optional(zodNumber()),
    birthDate: z.optional(z.string()),
    gender: z.enum(CharacterGenderArray),
    species: z.enum(CharacterSpeciesArray),
    bio: z.optional(z.string()),
    avatar: z.optional(Add_Image_ZOD),
    actors: z.optional(z.array(Add_Person_ZOD)),
  })
  .strict();

export type ICreate_Character_ZOD = z.infer<typeof Create_Character_ZOD>;

export const Create_Character_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Character_ZOD,
});

export type ICreate_Character_ZOD_FORM = z.infer<typeof Create_Character_ZOD_FORM>;

export const Add_Character_ZOD = z.object({
  id: z.optional(z.string()),
  newCharacter: z.optional(Create_Character_ZOD),
  role: z.enum(CharacterRoleArray, { required_error: "Le role est requis" }),
});

export type IAdd_Character_ZOD = z.infer<typeof Add_Character_ZOD>;

export const CharacterDataToZOD = (
  data: ICharacter,
) => {
  if (!data) return;

  const toZOD: ICreate_Character_ZOD = {
    name: data.name,
    age: data.age,
    birthDate: dateToZod(data.birthDate),
    gender: data.gender as any,
    species: data.species as any,
    bio: data.bio,
    avatar: data.avatar,
    actors: data.actors,
  };

  const safeParse = Create_Character_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
