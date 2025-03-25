import { UserRolesArray } from '@actunime/types';
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
export const Patch_UserProfile_ZOD_FORM = z.object({
    data: Patch_UserProfile_ZOD,
    note: z.string().optional(),
});
export const UserDataToPatchProfileZOD = (data) => {
    if (!data)
        return {};
    let toZOD = {
        username: data.username,
        displayName: data.displayName,
        description: data.description,
        roles: data.roles,
        avatar: data.avatar,
        banner: data.banner,
    };
    let safeParse = Patch_UserProfile_ZOD.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
