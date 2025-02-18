import { z } from "zod";
import { Create_Link_ZOD } from "./_media";
import { zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";
import { IPerson, PersonRoleArray, dateToZod } from "@actunime/types";

export const PersonName_validation = z.object({
  first: z.string().min(2, "le prénom dois contenir au moins 2 caractères"),
  last: z.optional(z.string()),
  alias: z.optional(
    z.array(
      z.object({
        content: z
          .string()
          .min(2, "le nom dois contenir au moins 2 caractères"),
      }),
    ),
  ),
});

export const Base_Create_Person_ZOD = z
  .object({
    isGroupe: z.optional(z.boolean()),
    name: PersonName_validation,
    birthDate: z.optional(z.string()),
    deathDate: z.optional(z.string()),
    bio: z.optional(z.string()),
    avatar: z.optional(Add_Image_ZOD),
    links: z.optional(z.array(Create_Link_ZOD)),
  })
  .strict()

export const Create_Person_ZOD = Base_Create_Person_ZOD
  .strict()
  .refine((v) => {
    console.log(v)
    if (!v.isGroupe) {
      if (!v.name.last) {
        return false;
      }
    }
    return true;
  }, (v) => {
    if (!v.isGroupe) {
      if (!v.name.last) {
        return {
          message: "Le nom est obligatoire",
          path: ["name.last"],
        };
      }
    }
    return {
      message: "Problème"
    }
  })

export const Partial_Create_Person_ZOD =
  Base_Create_Person_ZOD
    .strict()
    .partial()



export type ICreate_Person_ZOD = z.infer<typeof Create_Person_ZOD>;

export const Create_Person_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Person_ZOD,
});

export type ICreate_Person_ZOD_FORM = z.infer<typeof Create_Person_ZOD_FORM>;


export const Person_Pagination_ZOD = z
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
        name: z.string(),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    with: z.object({
      avatar: z.boolean().optional(),
    }).partial().strict(),
  })
  .partial()
  .strict();

export type IPerson_Pagination_ZOD = z.infer<typeof Person_Pagination_ZOD>;

export const Add_Person_ZOD = z.object({
  id: z.optional(z.string()),
  newPerson: z.optional(Create_Person_ZOD),
  role: z.optional(z.enum(PersonRoleArray)),
});

export type IAdd_Person_ZOD = z.infer<typeof Add_Person_ZOD>;

export const PersonDataToZOD = (data: IPerson) => {
  if (!data) return;

  const toZOD: ICreate_Person_ZOD = {
    isGroupe: data.isGroupe,
    name: data.name,
    birthDate: dateToZod(data.birthDate),
    deathDate: dateToZod(data.deathDate),
    bio: data.bio,
    avatar: data.avatar,
    links: data.links,
  };

  const safeParse = Create_Person_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
