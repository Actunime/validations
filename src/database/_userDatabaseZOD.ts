import { UserRolesArray } from "@actunime/types";
import { z } from "zod";
import { zodNumber } from "../_util";

export const UserDatabase_Pagination_ZOD = z
  .object({
    page: zodNumber(),
    limit: zodNumber(),
    query: z
      .object({
        displayName: z.string(),
        username: z.string(),
        id: z.string(),
        roles: z.array(z.enum(UserRolesArray)),
      })
      .partial()
      .strict(),
    strict: z.boolean().optional(),
    sort: z.object({
      createdAt: z.enum(["DESC", "ASC"]).optional(),
      updatedAt: z.enum(["DESC", "ASC"]).optional(),
    }),
    with: z
      .object({})
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type IUserDatabase_Pagination_ZOD = z.infer<typeof UserDatabase_Pagination_ZOD>;