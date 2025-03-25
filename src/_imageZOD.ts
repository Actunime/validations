import { z } from 'zod';
import { PaginationBody, zodNumber } from './_util';
import { IImageFull, ImageLabelArray } from '@actunime/types';
import { PatchParamsBody } from './_patchZOD';
import { FromBody } from './_media';

export const ImageQueryBody = z.object({
  label: z.enum(ImageLabelArray),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const ImageSortBody = z.object({
  label: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
});

export const ImagePaginationBody = PaginationBody.extend({
  sort: ImageSortBody.partial(),
  query: ImageQueryBody.partial(),
  from: FromBody,
}).partial();

export type IImagePaginationBody = z.infer<typeof ImagePaginationBody>;

export const ImageBody = z.object({
  label: z.enum(ImageLabelArray),
  value: z.string(),
});

export type IImageBody = z.infer<typeof ImageBody>;

export const ImageCreateBody = PatchParamsBody.partial().extend({
  data: ImageBody,
});

export type IImageCreateBody = z.infer<typeof ImageCreateBody>;

export const ImageAddBody = z.object({
  id: z.optional(z.string()),
  label: z.optional(z.enum(ImageLabelArray)),
  newImage: z.optional(ImageBody),
});

export type IImageAddBody = z.infer<typeof ImageAddBody>;

export const ImageDataToZOD = (data: IImageFull) => {
  if (!data) return;

  const toZOD: IImageBody = {
    value: data.url,
    label: data.label,
  };

  const safeParse = ImageBody.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
