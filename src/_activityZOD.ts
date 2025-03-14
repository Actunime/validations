import {
  ActivityActionArray,
  ActivityTypeArray,
  TargetPathArray,
} from "@actunime/types";
import { z } from "zod";
import { PaginationBody, zodNumber } from "./_util";
import {  } from "./_media";

export const ActivityQueryBody = z.object({
  type: z.enum(ActivityTypeArray),
  action: z.enum(ActivityActionArray),
  author: z.string().optional(),
  targets: z.array(z.object({ path: z.enum(TargetPathArray), id: z.string() })),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type IActivityQueryBody = z.infer<typeof ActivityQueryBody>;

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const ActivitySortBody = z.object({
  type: z.number().refine(check, checkErr),
  action: z.number().refine(check, checkErr),
  createdAt: z.number().refine(check, checkErr),
  updatedAt: z.number().refine(check, checkErr),
})

export type IActivitySortBody = z.infer<typeof ActivitySortBody>;

export const ActivityPaginationBody = PaginationBody.extend({
  sort: ActivitySortBody.partial(),
  query: ActivityQueryBody.partial()
})

export type IActivityPaginationBody = z.infer<typeof ActivityPaginationBody>;
