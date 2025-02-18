import { IUser } from "@actunime/types";
import { z } from "zod";


export const Patch_UserPreferences_ZOD = z
  .object({
    displayUnverifiedImage: z.boolean(),
    displayUnverifiedMedia: z.boolean(),
  })
  .partial();

export type IPatch_UserPreferences_ZOD = z.infer<typeof Patch_UserPreferences_ZOD>;

export const Patch_UserPreferences_ZOD_FORM = z.object({
  data: Patch_UserPreferences_ZOD,
  note: z.string().optional(),
});

export type IPatch_UserPreferences_ZOD_FORM = z.infer<typeof Patch_UserPreferences_ZOD_FORM>;

export const UserDataToPatchPreferencesZOD = (data: IUser): Partial<IPatch_UserPreferences_ZOD> => {
  if (!data) return {};

  let toZOD: Partial<IPatch_UserPreferences_ZOD> = {
    displayUnverifiedImage: data.preferences?.displayUnverifiedImage,
    displayUnverifiedMedia: data.preferences?.displayUnverifiedMedia,
  };

  let safeParse = Patch_UserPreferences_ZOD.safeParse(toZOD);

  if (safeParse.success) return safeParse.data;

  return toZOD;
};
