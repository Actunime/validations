import { z } from "zod";
import { PaginationBody, zodNumber } from "./_util";
import {
  TargetPathArray,
  // PatchActionArray,
  PatchStatusArray,
  PatchTypeArray,
} from "@actunime/types";

export const PatchQueryBody = z.object({
  id: z.string(),
  ref: z.object({ id: z.string() }),
  type: z.enum(PatchTypeArray),
  status: z.enum(PatchStatusArray),
  target: z.object({ id: z.string() }),
  targetPath: z.enum(TargetPathArray),
  description: z.string(),
  reason: z.string(),
  original: z.any(),
  changes: z.any(),
  isChangesUpdated: z.boolean(),
  author: z.object({ id: z.string() }),
  moderator: z.object({ id: z.string() }),
  createdAt: z.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide"),
  updatedAt: z.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide"),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const PatchSortBody = z.object({
  id: z.number().refine(check, checkErr),
  ref: z.object({ id: z.number().refine(check, checkErr) }),
  type: z.number().refine(check, checkErr),
  status: z.number().refine(check, checkErr),
  target: z.number().refine(check, checkErr),
  targetPath: z.number().refine(check, checkErr),
  description: z.number().refine(check, checkErr),
  reason: z.number().refine(check, checkErr),
  isChangesUpdated: z.number().refine(check, checkErr),
  author: z.object({ id: z.number().refine(check, checkErr) }),
  moderator: z.object({ id: z.number().refine(check, checkErr) }),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
})

export const PatchPaginationBody = PaginationBody.extend({
  sort: PatchSortBody.partial(),
  query: PatchQueryBody.partial()
})

export type IPatchPaginationBody = z.infer<typeof PatchPaginationBody>;

export const PatchParamsBody = z.object({
  description: z.string(),
  reason: z.string(),
})

export const Patch_Pagination_ZOD = z
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
        // actionLabel: z.optional(z.enum(PatchActionArray)),
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

export type IPatch_Pagination_ZOD = z.infer<typeof Patch_Pagination_ZOD>;

export const Patch_Action_ZOD = z.object({
  // label: z.enum(PatchActionArray),
  note: z.string(),
  changes: z.any().optional(),
});

export type IPatch_Action_ZOD = z.infer<typeof Patch_Action_ZOD>;


export const AddChangesToPatch_ZOD = z
  .object({
    id: z.string(),
    note: z.string().optional(),
    data: z.any()
  })
  .strict();

export type IAddChangesToPatch_ZOD = z.infer<typeof AddChangesToPatch_ZOD>;


export const AcceptChangesToPatch_ZOD = z
  .object({
    id: z.string(),
    moderatorNote: z.string().optional(),
  })
  .strict();

export type IAcceptChangesToPatch_ZOD = z.infer<typeof AcceptChangesToPatch_ZOD>;


export const DenyChangesToPatch_ZOD = z
  .object({
    id: z.string(),
    moderatorNote: z.string().optional(),
  })
  .strict();

export type IDenyChangesToPatch_ZOD = z.infer<typeof DenyChangesToPatch_ZOD>;

export const DeletePatch_ZOD = z
  .object({
    id: z.string(),
    moderatorNote: z.string().optional(),
  })
  .strict();

export type IDeletePatch_ZOD = z.infer<typeof DeletePatch_ZOD>;