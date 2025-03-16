"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeletePatch_ZOD = exports.DenyChangesToPatch_ZOD = exports.AcceptChangesToPatch_ZOD = exports.AddChangesToPatch_ZOD = exports.Patch_Action_ZOD = exports.Patch_Pagination_ZOD = exports.PatchParamsBody = exports.PatchPaginationBody = exports.PatchSortBody = exports.PatchQueryBody = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const types_1 = require("@actunime/types");
exports.PatchQueryBody = zod_1.z.object({
    id: zod_1.z.string(),
    ref: zod_1.z.object({ id: zod_1.z.string() }),
    type: zod_1.z.enum(types_1.PatchTypeArray),
    status: zod_1.z.enum(types_1.PatchStatusArray),
    target: zod_1.z.object({ id: zod_1.z.string() }),
    targetPath: zod_1.z.enum(types_1.TargetPathArray),
    description: zod_1.z.string(),
    reason: zod_1.z.string(),
    original: zod_1.z.any(),
    changes: zod_1.z.any(),
    isChangesUpdated: zod_1.z.boolean(),
    author: zod_1.z.object({ id: zod_1.z.string() }),
    moderator: zod_1.z.object({ id: zod_1.z.string() }),
    createdAt: zod_1.z.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide"),
    updatedAt: zod_1.z.string().refine((v) => !isNaN(Date.parse(v)), "Date invalide"),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.PatchSortBody = zod_1.z.object({
    id: zod_1.z.number().refine(check, checkErr),
    ref: zod_1.z.object({ id: zod_1.z.number().refine(check, checkErr) }),
    type: zod_1.z.number().refine(check, checkErr),
    status: zod_1.z.number().refine(check, checkErr),
    target: zod_1.z.number().refine(check, checkErr),
    targetPath: zod_1.z.number().refine(check, checkErr),
    description: zod_1.z.number().refine(check, checkErr),
    reason: zod_1.z.number().refine(check, checkErr),
    isChangesUpdated: zod_1.z.number().refine(check, checkErr),
    author: zod_1.z.object({ id: zod_1.z.number().refine(check, checkErr) }),
    moderator: zod_1.z.object({ id: zod_1.z.number().refine(check, checkErr) }),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.PatchPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.PatchSortBody.partial(),
    query: exports.PatchQueryBody.partial()
});
exports.PatchParamsBody = zod_1.z.object({
    description: zod_1.z.string(),
    reason: zod_1.z.string(),
});
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
        // actionLabel: z.optional(z.enum(PatchActionArray)),
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
    // label: z.enum(PatchActionArray),
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
//# sourceMappingURL=_patchZOD.js.map