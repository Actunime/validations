"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patch_Report_ZOD = exports.Create_Report_ZOD_FORM = exports.Create_Report_ZOD = exports.Report_Pagination_ZOD = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("./_util");
exports.Report_Pagination_ZOD = zod_1.z
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
        subject: zod_1.z.enum(types_1.ReportSubjectArray).optional(),
        status: zod_1.z.enum(types_1.ReportStatusArray).optional(),
        by: zod_1.z.string().optional(),
        author: zod_1.z.string().optional(),
        target: zod_1.z.string().optional(),
        targetPath: zod_1.z.enum(types_1.TargetPathArray).optional(),
    })
        .partial()
        .strict(),
    with: zod_1.z
        .object({
        by: zod_1.z.boolean().optional(),
        author: zod_1.z.boolean().optional(),
        target: zod_1.z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
exports.Create_Report_ZOD = zod_1.z
    .object({
    status: zod_1.z.enum(types_1.ReportStatusArray),
})
    .strict();
exports.Create_Report_ZOD_FORM = zod_1.z.object({
    note: zod_1.z.string().optional(),
    data: exports.Create_Report_ZOD,
});
exports.Patch_Report_ZOD = zod_1.z
    .object({
    status: zod_1.z.enum(types_1.ReportStatusArray),
})
    .strict()
    .partial();
