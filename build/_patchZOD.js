"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatch_ZOD = exports.DenyChangesToPatch_ZOD = exports.AcceptChangesToPatch_ZOD = exports.AddChangesToPatch_ZOD = exports.Patch_Action_ZOD = exports.Patch_Pagination_ZOD = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
exports.Patch_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    strict: zod_1.z.boolean().optional(),
    sort: zod_1.z
        .object({
        updaptedAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
        createdAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
    })
        .partial()
        .strict(),
    query: zod_1.z
        .object({
        target: zod_1.z.optional(zod_1.z.string()),
        targetPath: zod_1.z.optional(zod_1.z.union([zod_1.z.enum(types_1.TargetPathArray), zod_1.z.array(zod_1.z.enum(types_1.TargetPathArray))])),
        author: zod_1.z.optional(zod_1.z.string()),
        status: zod_1.z.optional(zod_1.z.union([
            zod_1.z.array(zod_1.z.enum(types_1.PatchStatusArray)),
            zod_1.z.enum(types_1.PatchStatusArray),
        ])),
        actionLabel: zod_1.z.optional(zod_1.z.enum(types_1.PatchActionArray)),
        actionUser: zod_1.z.optional(zod_1.z.string()),
        type: zod_1.z.optional(zod_1.z.union([zod_1.z.enum(types_1.TargetPathArray), zod_1.z.array(zod_1.z.enum(types_1.PatchTypeArray))])),
        ref: zod_1.z.optional(zod_1.z.string()),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        author: zod_1.z.boolean().optional(),
        target: zod_1.z.boolean().optional(),
        actions: zod_1.z.boolean().optional(),
        ref: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Patch_Action_ZOD = zod_1.z.object({
    label: zod_1.z.enum(types_1.PatchActionArray),
    note: zod_1.z.string(),
    changes: zod_1.z.any().optional(),
});
exports.AddChangesToPatch_ZOD = zod_1.z
    .object({
    id: zod_1.z.string(),
    note: zod_1.z.string().optional(),
    data: zod_1.z.any()
})
    .strict();
exports.AcceptChangesToPatch_ZOD = zod_1.z
    .object({
    id: zod_1.z.string(),
    moderatorNote: zod_1.z.string().optional(),
})
    .strict();
exports.DenyChangesToPatch_ZOD = zod_1.z
    .object({
    id: zod_1.z.string(),
    moderatorNote: zod_1.z.string().optional(),
})
    .strict();
exports.DeletePatch_ZOD = zod_1.z
    .object({
    id: zod_1.z.string(),
    moderatorNote: zod_1.z.string().optional(),
})
    .strict();
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
