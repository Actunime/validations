import { z } from "zod";

export const zodBoolean = () =>
  z
    .union([z.boolean(), z.literal("true"), z.literal("false")])
    .transform((value) => value === true || value === "true");

export const zodNumber = () =>
  z
    .union([z.number(), z.string()])
    .transform((value) =>
      typeof value === "string" ? parseInt(value) : value,
    );

export const zodDate = () =>
  z
    .union([z.date(), z.string()])
    .transform((value) =>
      typeof value === "string" ? new Date(value) : value,
    );


export const PaginationBody = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  onlyVerified: z.boolean(),
  sort: z.any(),
  query: z.any(),
})