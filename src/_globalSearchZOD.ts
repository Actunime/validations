import { z } from 'zod';
import { PaginationBody } from './_util';
import { TargetPathArray } from '@actunime/types';

export const GlobalSearchQueryBody = z.object({
  search: z.string(),
  path: z.enum(TargetPathArray),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const GlobalSearchSortBody = z.object({
  original: z.number().refine(check, checkErr),
  normal: z.number().refine(check, checkErr),
});

export const GlobalSearchPaginationBody = PaginationBody.extend({
  sort: GlobalSearchSortBody.partial(),
  query: GlobalSearchQueryBody.partial(),
});

export type IGlobalSearchPaginationBody = z.infer<
  typeof GlobalSearchPaginationBody
>;

export const GlobalSearchBody = z.object({
  search: z.string(),
  path: z.enum(TargetPathArray),
});

export type IGlobalSearchBody = z.infer<typeof GlobalSearchBody>;
