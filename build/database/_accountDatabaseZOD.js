import { z } from "zod";
import { zodNumber } from "../_util";
export const AccountDatabase_Pagination_ZOD = z
    .object({
    page: zodNumber(),
    limit: zodNumber(),
    query: z
        .object({
        id: z.string(),
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
