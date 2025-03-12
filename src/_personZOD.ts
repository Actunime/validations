import { z } from "zod";
import { Create_Link_ZOD, FromBody, LinkBody } from "./_media";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { IPerson, PersonRoleArray, dateToZod } from "@actunime/types";
import { PatchParamsBody } from "./_patchZOD";

export const PersonName_validation = z.object({
  default: z.string(),
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

export const Partial_Create_Person_ZOD =
  Base_Create_Person_ZOD
    .strict()
    .partial()

export type ICreate_Person_ZOD = z.infer<typeof Create_Person_ZOD>;

export const PersonCreateBody = PatchParamsBody.partial().extend({
  data: Create_Person_ZOD
})

export type IPersonCreateBody = z.infer<typeof PersonCreateBody>;

export const Create_Person_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Person_ZOD,
});

export type ICreate_Person_ZOD_FORM = z.infer<typeof Create_Person_ZOD_FORM>;


export const PersonQueryBody = z.object({
  isGroupe: z.boolean(),
  name: PersonName_validation.partial(),
  birthDate: z.string(),
  deathDate: z.string(),
  avatar: ImageBody.partial(),
  links: LinkBody.partial(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const PersonSortBody = z.object({
  isGroupe: zodNumber().refine(check, checkErr),
  birthDate: zodNumber().refine(check, checkErr),
  deathDate: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const PersonPaginationBody = PaginationBody.extend({
  sort: PersonSortBody.partial(),
  query: PersonQueryBody.partial(),
  from: FromBody,
}).partial()

export type IPersonPaginationBody = z.infer<typeof PersonPaginationBody>;

export const Person_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: PersonSortBody.partial(),
  query: PersonQueryBody.partial()
})

export type IPerson_Pagination_ZOD = z.infer<typeof Person_Pagination_ZOD>;

export const Add_Person_ZOD = z.object({
  id: z.optional(z.string()),
  newPerson: z.optional(Create_Person_ZOD),
  role: z.optional(z.enum(PersonRoleArray)),
});

export type IAdd_Person_ZOD = z.infer<typeof Add_Person_ZOD>;

export const PersonBody = z.object({
  id: z.string()
});

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
