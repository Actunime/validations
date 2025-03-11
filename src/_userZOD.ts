import { UserRolesArray, IUser, UserAnimeListStatusArray } from "@actunime/types";
import { z } from "zod";
import { PaginationBody, zodNumber } from "./_util";
import { Add_Image_ZOD } from "./_imageZOD";

export const UserQueryBody = z.object({
  username: z.string(),
  displayName: z.string(),
  roles: z.array(z.enum(UserRolesArray)),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
export const UserSortBody = z.object({
  username: zodNumber().refine(check, checkErr),
  displayName: zodNumber().refine(check, checkErr),
  roles: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
})

export const UserPaginationBody = PaginationBody.extend({
  sort: UserSortBody.partial(),
  query: UserQueryBody.partial()
})

export const UserMutationBody = z.object({
  username: z.string(),
  displayName: z.string().min(3, "Le pseudonyme doit contenir au moins 3 caractères").max(18, "Le pseudonyme doit contenir au maximum 18 caractères"),
  bio: z.optional(z.string()),
  avatar: z.optional(Add_Image_ZOD),
  banner: z.optional(Add_Image_ZOD),
})

export type IUserMutationBody = z.infer<typeof UserMutationBody>;

export type IUserPaginationBody = z.infer<typeof UserPaginationBody>;

export const User_Pagination_ZOD = z
  .object({
    page: zodNumber(),
    limit: zodNumber(),
    query: z
      .object({
        name: z.string(),
        id: z.string(),
        roles: z.array(z.enum(UserRolesArray)),
        allowUnverified: z.boolean().optional(),
      })
      .partial()
      .strict(),
    strict: z.boolean().optional(),
    sort: z.object({
      createdAt: z.enum(["DESC", "ASC"]).optional(),
      updatedAt: z.enum(["DESC", "ASC"]).optional(),
    }),
    with: z
      .object({
        avatar: z.boolean().optional(),
        banner: z.boolean().optional(),
      })
      .partial()
      .strict(),
  })
  .partial()
  .strict();

export type IUser_Pagination_ZOD = z.infer<typeof User_Pagination_ZOD>;

export const Patch_User_ZOD = z
  .object({
    username: z.string().optional(),
    displayName: z.string().optional(),
    bio: z.string().optional(),
    roles: z.array(z.enum(UserRolesArray)).optional(),
    avatar: z.optional(Add_Image_ZOD),
    banner: z.optional(Add_Image_ZOD),
  })
  .partial();

export type IPatch_User_ZOD = z.infer<typeof Patch_User_ZOD>;

export const Patch_User_ZOD_FORM = z.object({
  data: Patch_User_ZOD,
  note: z.string().optional(),
});

export type IPatch_User_ZOD_FORM = z.infer<typeof Patch_User_ZOD_FORM>;

export const Disable_User_ZOD_FORM = z.object({
  reason: z.string(),
  note: z.string().optional(),
});

export type IDisable_User_ZOD_FORM = z.infer<typeof Disable_User_ZOD_FORM>;

export const Create_User_ZOD: any = z.object({
  user: Patch_User_ZOD,
  account: z.object({}),
});

export const UserDataToZOD = (data: IUser): Partial<IPatch_User_ZOD> => {
  if (!data) return {};

  let toZOD: Partial<IPatch_User_ZOD> = {
    username: data.username,
    displayName: data.displayName,
    bio: data.bio,
    roles: data.roles,
    avatar: data.avatar,
    banner: data.banner,
  };

  let safeParse = Patch_User_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};


export const UserAnimeListe_ZOD = z.object({
  id: z.string(),
  episode: zodNumber().optional(),
  status: z.enum(UserAnimeListStatusArray),
  score: zodNumber().optional(),
  note: z.string().optional(),
  favoris: z.boolean().optional(),
  rank: zodNumber().optional(),
  startedAt: z.string().optional(),
  completedAt: z.string().optional(),
});

export type IUserAnimeListe_ZOD = z.infer<typeof UserAnimeListe_ZOD>;