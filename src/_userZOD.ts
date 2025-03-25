import {
  UserRolesArray,
  IUser,
  UserAnimeListStatusArray,
} from '@actunime/types';
import { z } from 'zod';
import { PaginationBody, zodNumber } from './_util';
import { ImageAddBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';

export const UserQueryBody = z.object({
  username: z.string(),
  displayName: z.string(),
  roles: z.array(z.enum(UserRolesArray)),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const check = (v: number) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const UserSortBody = z.object({
  username: zodNumber().refine(check, checkErr),
  displayName: zodNumber().refine(check, checkErr),
  roles: zodNumber().refine(check, checkErr),
  createdAt: zodNumber().refine(check, checkErr),
  updatedAt: zodNumber().refine(check, checkErr),
});

export const UserPaginationBody = PaginationBody.extend({
  sort: UserSortBody.partial(),
  query: UserQueryBody.partial(),
});

export type IUserPaginationBody = z.infer<typeof UserPaginationBody>;

export const UserOptions = z.object({
  displayUnverified: z.boolean(),
});

export const UserBody = z.object({
  displayName: z.string(),
  description: z.optional(z.string()),
  avatar: z.optional(ImageAddBody),
  banner: z.optional(ImageAddBody),
  options: z.optional(UserOptions.partial()),
});

export type IUserBody = z.infer<typeof UserBody>;

export const UserCreateBody = PatchParamsBody.partial().extend({
  data: UserBody,
});

export type IUserCreateBody = z.infer<typeof UserCreateBody>;

export const UserClientBody = UserBody.extend({
  accountId: z.string(),
  username: z.string(),
  roles: z.array(z.string()),
});

export type IUserClientBody = z.infer<typeof UserClientBody>;

export const UserClientCreateBody = PatchParamsBody.partial().extend({
  data: UserBody,
});

export type IUserClientCreateBody = z.infer<typeof UserClientCreateBody>;

export const UserAddBody = z.object({
  id: z.string(),
});

export type IUserAddBody = z.infer<typeof UserAddBody>;

export const UserDataToZOD = (data: IUser): Partial<IUserCreateBody> => {
  if (!data) return {};

  const toZOD: Partial<IUserBody> = {
    displayName: data.displayName,
    description: data.description,
    avatar: data.avatar,
    banner: data.banner,
    options: data.options,
  };

  const safeParse = UserBody.safeParse(toZOD);

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
