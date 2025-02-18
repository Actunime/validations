"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountDatabase_Pagination_ZOD = void 0;
const zod_1 = require("zod");
const _util_1 = require("../_util");
exports.AccountDatabase_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    query: zod_1.z
        .object({
        id: zod_1.z.string(),
    })
        .partial()
        .strict(),
    strict: zod_1.z.boolean().optional(),
    sort: zod_1.z.object({
        createdAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
        updatedAt: zod_1.z.enum(["DESC", "ASC"]).optional(),
    }),
    with: zod_1.z
        .object({})
        .partial()
        .strict(),
})
    .partial()
    .strict();
