"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Update_Action_ZOD = exports.Update_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("./_util");
exports.Update_Pagination_ZOD = zod_1.z
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
exports.Update_Action_ZOD = zod_1.z.object({
    label: zod_1.z.enum(types_1.PatchActionArray),
    note: zod_1.z.string(),
    changes: zod_1.z.any().optional(),
});
//# sourceMappingURL=_updateZOD.js.map