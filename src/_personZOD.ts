import { z } from "zod";
import { Create_Link_ZOD, DateBody, FromBody, LinkBody, MediaTitleBody } from "./_media";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { IPerson, PersonRoleArray } from "@actunime/types";
import { PatchParamsBody } from "./_patchZOD";

export const PersonQueryBody = z.object({
  isGroupe: z.boolean(),
  name: MediaTitleBody.partial(),
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

export const PersonBody = z.object({
  isGroupe: z.optional(z.boolean()),
  name: MediaTitleBody,
  birthDate: z.optional(DateBody.partial()),
  deathDate: z.optional(DateBody.partial()),
  description: z.optional(z.string()),
  avatar: z.optional(Add_Image_ZOD),
  links: z.optional(z.array(Create_Link_ZOD)),
}).strict();

export type IPersonBody = z.infer<typeof PersonBody>;

export const PersonCreateBody = PatchParamsBody.partial().extend({
  data: PersonBody
})

export type IPersonCreateBody = z.infer<typeof PersonCreateBody>;

export const PersonAddBody = z.object({
  id: z.optional(z.string()),
  newPerson: z.optional(PersonBody),
  role: z.optional(z.enum(PersonRoleArray)),
});

export type IPersonAddBody = z.infer<typeof PersonAddBody>;

export const PersonDataToZOD = (data: IPerson) => {
  if (!data) return;

  const toZOD: IPersonBody = {
    isGroupe: data.isGroupe,
    name: data.name,
    birthDate: data.birthDate,
    deathDate: data.deathDate,
    description: data.description,
    avatar: data.avatar,
    links: data.links,
  };

  const safeParse = PersonBody.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
