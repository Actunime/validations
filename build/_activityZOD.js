"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Activity_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("./_util");
exports.Activity_Pagination_ZOD = zod_1.z
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
        type: zod_1.z.enum(types_1.ActivityTypeArray),
        action: zod_1.z.enum(types_1.ActivityActionArray),
        author: zod_1.z.string().optional(),
        target: zod_1.z.string().optional(),
        targetPath: zod_1.z.enum(types_1.TargetPathArray),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        author: zod_1.z.boolean().optional(),
        target: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
