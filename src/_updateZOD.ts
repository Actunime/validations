import {
  PatchActionArray,
  PatchStatusArray,
  PatchTypeArray,
  TargetPathArray,
} from "@actunime/types";
import { z } from "zod";
import { zodNumber } from "./_util";

export const Update_Pagination_ZOD = z
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
        target: z.optional(z.string()),
        targetPath: z.optional(
          z.union([z.enum(TargetPathArray), z.array(z.enum(TargetPathArray))]),
        ),
        author: z.optional(z.string()),
        status: z.optional(
          z.union([
            z.array(z.enum(PatchStatusArray)),
            z.enum(PatchStatusArray),
          ]),
        ),
        actionLabel: z.optional(z.enum(PatchActionArray)),
        actionUser: z.optional(z.string()),
        type: z.optional(
          z.union([z.enum(TargetPathArray), z.array(z.enum(PatchTypeArray))]),
        ),
        ref: z.optional(z.string()),
      })
      .partial()
      .strict(),
    with: z
      .object({
        author: z.boolean().optional(),
        target: z.boolean().optional(),
        actions: z.boolean().optional(),
        ref: z.boolean().optional(),
      })
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type IUpdate_Pagination_ZOD = z.infer<typeof Update_Pagination_ZOD>;

export const Update_Action_ZOD = z.object({
  label: z.enum(PatchActionArray),
  note: z.string(),
  changes: z.any().optional(),
});

export type IUpdate_Action_ZOD = z.infer<typeof Update_Action_ZOD>;
