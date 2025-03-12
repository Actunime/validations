import { z } from "zod";
import { PaginationBody, zodNumber } from "./_util";
import { IGroupe } from "@actunime/types";
import { PatchParamsBody } from "./_patchZOD";

export const GroupeQueryBody = z.object({
  name: z.string(),
})

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const GroupeSortBody = z.object({
  name: z.number().refine(check, checkErr),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
})

export const GroupePaginationBody = PaginationBody.extend({
  sort: GroupeSortBody.partial(),
  query: GroupeQueryBody.partial()
})

export type IGroupePaginationBody = z.infer<typeof GroupePaginationBody>;

export const Groupe_Pagination_ZOD = z
  .object({
    page: zodNumber(),
    limit: zodNumber(),
    strict: z.boolean().optional(),
    sort: z
      .object({
        createdAt: z.enum(["DESC", "ASC"]).optional(),
        updatedAt: z.enum(["DESC", "ASC"]).optional(),
      })
      .partial()
      .strict(),
    query: z
      .object({
        name: z.string().optional(),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    with: z
      .object({
        animes: z.boolean().optional(),
        mangas: z.boolean().optional(),
      })
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type IGroupe_Pagination_ZOD = z.infer<typeof Groupe_Pagination_ZOD>;

export const Create_Groupe_ZOD = z.object({
  name: z.string(),
});

export type ICreate_Groupe_ZOD = z.infer<typeof Create_Groupe_ZOD>;

export const GroupeCreateBody = PatchParamsBody.partial().extend({
  data: Create_Groupe_ZOD
})

export type IGroupeCreateBody = z.infer<typeof GroupeCreateBody>;

export const Add_Groupe_ZOD = z.object({
  id: z.optional(z.string()),
  newGroupe: z.optional(Create_Groupe_ZOD),
});

export type IAdd_Groupe_ZOD = z.infer<typeof Add_Groupe_ZOD>;

export const Create_Groupe_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Groupe_ZOD,
});

export type ICreate_Groupe_ZOD_FORM = z.infer<typeof Create_Groupe_ZOD_FORM>;


export const GroupeDataToZOD = (data: IGroupe) => {
  if (!data) return;

  const toZOD: ICreate_Groupe_ZOD = {
    name: data.name,
  };

  const safeParse = Create_Groupe_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
