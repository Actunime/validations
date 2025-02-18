"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDatabase_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("../_util");
exports.UserDatabase_Pagination_ZOD = zod_1.z
    .object({
    page: (0, _util_1.zodNumber)(),
    limit: (0, _util_1.zodNumber)(),
    query: zod_1.z
        .object({
        displayName: zod_1.z.string(),
        username: zod_1.z.string(),
        id: zod_1.z.string(),
        roles: zod_1.z.array(zod_1.z.enum(types_1.UserRolesArray)),
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
