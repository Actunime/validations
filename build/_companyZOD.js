import { z } from 'zod';
import { DateBody, FromBody, MediaLinkBody, MediaTitleBody } from './_media';
import { PaginationBody, zodNumber } from './_util';
import { ImageAddBody, ImageBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';
export const CompanyQueryBody = z.object({
    type: z.enum(['STUDIO', 'PRODUCER']),
    name: MediaTitleBody.partial(),
    links: MediaLinkBody.partial(),
    logo: ImageBody.partial(),
    createdDate: z.optional(DateBody.partial()),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const CompanySortBody = z.object({
    type: zodNumber().refine(check, checkErr),
    createdDate: z.object({
        year: zodNumber().refine(check, checkErr),
        month: zodNumber().refine(check, checkErr),
        day: zodNumber().refine(check, checkErr),
    }),
    createdAt: zodNumber().refine(check, checkErr),
    updatedAt: zodNumber().refine(check, checkErr),
});
export const CompanyPaginationBody = PaginationBody.extend({
    sort: CompanySortBody.partial(),
    query: CompanyQueryBody.partial(),
    from: FromBody,
}).partial();
export const Company_Pagination_ZOD = z.object({
    page: z.number(),
    limit: z.number(),
    strict: z.boolean(),
    sort: CompanySortBody.partial(),
    query: CompanyQueryBody.partial(),
});
export const CompanyBody = z
    .object({
    type: z.enum(['STUDIO', 'PRODUCER']),
    name: MediaTitleBody,
    description: z.optional(z.string()),
    links: z.optional(z.array(MediaLinkBody)),
    logo: z.optional(ImageAddBody),
    createdDate: z.optional(DateBody.partial()),
})
    .strict();
export const CompanyCreateBody = PatchParamsBody.partial().extend({
    data: CompanyBody,
});
export const CompanyAddBody = z.object({
    id: z.optional(z.string()),
    newCompany: z.optional(CompanyBody),
});
export const CompanyDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        type: data.type,
        name: data.name,
        description: data.description,
        links: data.links,
        logo: data.logo,
        createdDate: data.createdDate,
    };
    const safeParse = CompanyBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
