import { z } from "zod";
import { PaginationBody, zodNumber } from "./_util";
import { IImage, ImageLabelArray } from "@actunime/types";
import { PatchParamsBody } from "./_patchZOD";

export const ImageQueryBody = z.object({
  label: z.enum(ImageLabelArray),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const ImageSortBody = z.object({
  label: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const ImagePaginationBody = PaginationBody.extend({
  sort: ImageSortBody.partial(),
  query: ImageQueryBody.partial()
})

export const Image_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: ImageSortBody.partial(),
  query: ImageQueryBody.partial()
})

export type IImage_Pagination_ZOD = z.infer<typeof Image_Pagination_ZOD>;

export const Create_Image_ZOD = z.object({
  label: z.enum(ImageLabelArray),
  value: z.string(),
});

export type ICreate_Image_ZOD = z.infer<typeof Create_Image_ZOD>;

export const ImageCreateBody = PatchParamsBody.partial().extend({
  data: Create_Image_ZOD
})

export const Create_Image_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Image_ZOD,
});

export type ICreate_Image_ZOD_FORM = z.infer<typeof Create_Image_ZOD_FORM>;


export const Add_Image_ZOD = z.object({
  id: z.optional(z.string()),
  label: z.optional(z.enum(ImageLabelArray)),
  newImage: z.optional(Create_Image_ZOD),
});

export type IAdd_Image_ZOD = z.infer<typeof Add_Image_ZOD>;

export const ImageBody = z.object({
  id: z.string(),
  label: z.enum(ImageLabelArray),
})

export const ImageDataToZOD = (data: IImage) => {
  if (!data) return;

  const toZOD: ICreate_Image_ZOD = {
    value: data.url,
    label: data.label
  };

  const safeParse = Create_Image_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
