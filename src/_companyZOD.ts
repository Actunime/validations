import {  ICompany, dateToZod } from "@actunime/types";
import { z } from "zod";
import { Create_Link_ZOD, FromBody, LinkBody } from "./_media";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD, ImageBody } from "./_imageZOD";
import { PatchParamsBody } from "./_patchZOD";

export const CompanyQueryBody = z.object({
  type: z.enum(["STUDIO", "PRODUCER"]),
  name: z.string(),
  links: LinkBody.partial(),
  logo: ImageBody.partial(),
  createdDate: z.optional(z.string()),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const CompanySortBody = z.object({
  type: zodNumber().refine(check, checkErr),
  name: zodNumber().refine(check, checkErr),
  createdDate: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const CompanyPaginationBody = PaginationBody.extend({
  sort: CompanySortBody.partial(),
  query: CompanyQueryBody.partial(),
  from: FromBody,
}).partial()

export type ICompanyPaginationBody = z.infer<typeof CompanyPaginationBody>;

export const Company_Pagination_ZOD = z.object({
  page: z.number(),
  limit: z.number(),
  strict: z.boolean(),
  sort: CompanySortBody.partial(),
  query: CompanyQueryBody.partial()
})

export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;

export const Create_Company_ZOD = z.object({
  type: z.enum(["STUDIO", "PRODUCER"]),
  name: z.string(),
  description: z.optional(z.string()),
  links: z.optional(z.array(Create_Link_ZOD)),
  logo: z.optional(Add_Image_ZOD),
  createdDate: z.optional(z.string()),
})
  .strict();

export type ICreate_Company_ZOD = z.infer<typeof Create_Company_ZOD>;

export const CompanyCreateBody = PatchParamsBody.partial().extend({
  data: Create_Company_ZOD
})

export type ICompanyCreateBody = z.infer<typeof CompanyCreateBody>;

export const Create_Company_ZOD_FORM = z.object({
  note: z.string().optional(),
  data: Create_Company_ZOD,
});

export type ICreate_Company_ZOD_FORM = z.infer<typeof Create_Company_ZOD_FORM>;


export const Add_Company_ZOD = z.object({
  id: z.optional(z.string()),
  newCompany: z.optional(Create_Company_ZOD),
});

export type IAdd_Company_ZOD = z.infer<typeof Add_Company_ZOD>;

export const CompanyDataToZOD = (
  data: ICompany,
) => {
  if (!data) return;

  const toZOD: ICreate_Company_ZOD = {
    type: data.type,
    name: data.name,
    description: data.description,
    links: data.links,
    logo: data.logo,
    createdDate: dateToZod(data.createdDate),
  };

  const safeParse = Create_Company_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
