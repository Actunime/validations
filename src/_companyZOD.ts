import { CompanyTypeArray, ICompany, dateToZod } from "@actunime/types";
import { z } from "zod";
import { Create_Link_ZOD } from "./_media";
import { zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";

export const Company_Pagination_ZOD = z
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
        name: z.string().optional(),
        type: z.enum(CompanyTypeArray),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    with: z.object({}).partial().strict(),
  })
  .partial()
  .strict();

export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;

export const Create_Company_ZOD = z
  .object({
    type: z.enum(["STUDIO", "PRODUCER"]),
    name: z.string(),
    links: z.optional(z.array(Create_Link_ZOD)),
    logo: z.optional(Add_Image_ZOD),
    createdDate: z.optional(z.string()),
  })
  .strict();

export type ICreate_Company_ZOD = z.infer<typeof Create_Company_ZOD>;

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
    links: data.links,
    logo: data.logo,
    createdDate: dateToZod(data.createdDate),
  };

  const safeParse = Create_Company_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
