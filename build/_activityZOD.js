import { ActivityActionArray, ActivityTypeArray, TargetPathArray, } from '@actunime/types';
import { z } from 'zod';
import { PaginationBody } from './_util';
export const ActivityQueryBody = z.object({
    type: z.enum(ActivityTypeArray),
    action: z.enum(ActivityActionArray),
    author: z.string().optional(),
    targets: z.array(z.object({ path: z.enum(TargetPathArray), id: z.string() })),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const ActivitySortBody = z.object({
    type: z.number().refine(check, checkErr),
    action: z.number().refine(check, checkErr),
    createdAt: z.number().refine(check, checkErr),
    updatedAt: z.number().refine(check, checkErr),
});
export const ActivityPaginationBody = PaginationBody.extend({
    sort: ActivitySortBody.partial(),
    query: ActivityQueryBody.partial(),
});
