import {
  CharacterGenderArray,
  CharacterRoleArray,
  CharacterSpeciesArray,
  ICharacter,
  dateToZod,
} from "@actunime/types";
import { z } from "zod";
import { Add_Person_ZOD, PersonBody } from "./_personZOD";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";
import { FromBody } from "./_media";

export const Character_Name_ZOD = z.object({
  default: z.string(),
  alias: z.optional(z.array(z.string())),
});


export const CharacterQueryBody = z.object({
  name: Character_Name_ZOD.partial(),
  age: zodNumber(),
  birthDate: z.string(),
  avatar: ImageBody.partial(),
  gender: z.enum(CharacterGenderArray),
  species: z.enum(CharacterSpeciesArray),
  actors: PersonBody.partial(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const CharacterSortBody = z.object({
  age: zodNumber().refine(check, checkErr),
  birthDate: zodNumber().refine(check, checkErr),
  gender: zodNumber().refine(check, checkErr),
  species: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const CharacterPaginationBody = PaginationBody.extend({
  sort: CharacterSortBody.partial(),
  query: CharacterQueryBody.partial(),
  from: FromBody,
}).partial()

export type ICharacterPaginationBody = z.infer<
  typeof CharacterPaginationBody
>;

export const Character_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: CharacterSortBody.partial(),
  query: CharacterQueryBody.partial()
})

export type ICharacter_Pagination_ZOD = z.infer<
  typeof Character_Pagination_ZOD
>;

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

export const CharacterCreateBody = PatchParamsBody.partial().extend({
  data: Create_Character_ZOD
})

export type ICharacterCreateBody = z.infer<typeof CharacterCreateBody>;

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
