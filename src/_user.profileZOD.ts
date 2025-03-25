import { UserRolesArray, IUser } from '@actunime/types';
import { z } from 'zod';
import { ImageAddBody } from './_imageZOD';

export const Patch_UserProfile_ZOD = z
  .object({
    username: z.string().optional(),
    displayName: z.string().optional(),
    description: z.string().optional(),
    roles: z.array(z.enum(UserRolesArray)).optional(),
    avatar: z.optional(ImageAddBody),
    banner: z.optional(ImageAddBody),
  })
  .partial();

export type IPatch_UserProfile_ZOD = z.infer<typeof Patch_UserProfile_ZOD>;

export const Patch_UserProfile_ZOD_FORM = z.object({
  data: Patch_UserProfile_ZOD,
  note: z.string().optional(),
});

export type IPatch_UserProfile_ZOD_FORM = z.infer<
  typeof Patch_UserProfile_ZOD_FORM
>;

export const UserDataToPatchProfileZOD = (
  data: IUser
): Partial<IPatch_UserProfile_ZOD> => {
  if (!data) return {};

  let toZOD: Partial<IPatch_UserProfile_ZOD> = {
    username: data.username,
    displayName: data.displayName,
    description: data.description,
    roles: data.roles,
    avatar: data.avatar,
    banner: data.banner,
  };

  let safeParse = Patch_UserProfile_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
