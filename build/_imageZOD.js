import { z } from 'zod';
import { PaginationBody, zodNumber } from './_util';
import { ImageLabelArray } from '@actunime/types';
import { PatchParamsBody } from './_patchZOD';
import { FromBody } from './_media';
export const ImageQueryBody = z.object({
    label: z.enum(ImageLabelArray),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
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
export const ImageBody = z.object({
    label: z.enum(ImageLabelArray),
    value: z.string(),
});
export const ImageCreateBody = PatchParamsBody.partial().extend({
    data: ImageBody,
});
export const ImageAddBody = z.object({
    id: z.optional(z.string()),
    label: z.optional(z.enum(ImageLabelArray)),
    newImage: z.optional(ImageBody),
});
export const ImageDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        value: data.url,
        label: data.label,
    };
    const safeParse = ImageBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
