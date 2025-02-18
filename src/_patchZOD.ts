import { z } from "zod";
import { zodNumber } from "./_util";
import {
  TargetPathArray,
  PatchActionArray,
  PatchStatusArray,
  PatchTypeArray,
} from "@actunime/types";

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

export type IPatch_Pagination_ZOD = z.infer<typeof Patch_Pagination_ZOD>;

export const Patch_Action_ZOD = z.object({
  label: z.enum(PatchActionArray),
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


// export const Create_Patch_ZOD = z
//   .object({
//     ref: z.object({ id: z.string() }),
//     newValues: z.any(),
//   })
//   .strict();

// export type ICreate_Patch_ZOD = z.infer<typeof Create_Patch_ZOD>;

// export const Create_Patch_ZOD_FORM = z.object({
//   note: z.string().optional(),
//   data: Create_Patch_ZOD,
// });

// export type ICreate_Patch_ZOD_FORM = z.infer<typeof Create_Patch_ZOD_FORM>;