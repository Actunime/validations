import { ReportStatusArray, ReportSubjectArray, TargetPathArray, } from "@actunime/types";
import { z } from "zod";
import { zodNumber } from "./_util";
export const Report_Pagination_ZOD = z
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
        subject: z.enum(ReportSubjectArray).optional(),
        status: z.enum(ReportStatusArray).optional(),
        by: z.string().optional(),
        author: z.string().optional(),
        target: z.string().optional(),
        targetPath: z.enum(TargetPathArray).optional(),
    })
        .partial()
        .strict(),
    with: z
        .object({
        by: z.boolean().optional(),
        author: z.boolean().optional(),
        target: z.boolean().optional(),
    })
        .partial()
        .strict(),
})
    .partial()
    .strict();
export const Create_Report_ZOD = z
    .object({
    status: z.enum(ReportStatusArray),
})
    .strict();
export const Create_Report_ZOD_FORM = z.object({
    note: z.string().optional(),
    data: Create_Report_ZOD,
});
export const Patch_Report_ZOD = z
    .object({
    status: z.enum(ReportStatusArray),
})
    .strict()
    .partial();
