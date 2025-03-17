import { z } from "zod";
import { PaginationBody } from "./_util";
import { IGroupe } from "@actunime/types";
import { PatchParamsBody } from "./_patchZOD";
import { MediaTitleBody } from "./_media";

export const GroupeQueryBody = z.object({
  name: MediaTitleBody.partial(),
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

export const GroupeBody = z.object({
  name: MediaTitleBody,
});

export type IGroupeBody = z.infer<typeof GroupeBody>;

export const GroupeCreateBody = PatchParamsBody.partial().extend({
  data: GroupeBody
})

export type IGroupeCreateBody = z.infer<typeof GroupeCreateBody>;

export const GroupeAddBody = z.object({
  id: z.optional(z.string()),
  newGroupe: z.optional(GroupeBody),
});

export type IGroupeAddBody = z.infer<typeof GroupeAddBody>;

export const GroupeDataToZOD = (data: IGroupe) => {
  if (!data) return;

  const toZOD: IGroupeBody = {
    name: data.name,
  };

  const safeParse = GroupeBody.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
