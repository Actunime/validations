import { Create_Manga_ZOD, MangaDataToZOD } from "./_mangaZOD";
import { AnimeDataToZOD, Create_Anime_ZOD } from "./_animeZOD";
import { Create_Person_ZOD, PersonDataToZOD } from "./_personZOD";
import { CharacterDataToZOD, Create_Character_ZOD } from "./_characterZOD";
import { Create_Track_ZOD, TrackDataToZOD } from "./_trackZOD";
import { CompanyDataToZOD, Create_Company_ZOD } from "./_companyZOD";
import { GroupeDataToZOD } from "./_groupeZOD";
import { ITargetPath } from "@actunime/types";
import { ZodEffects, ZodObject } from "zod";

export const TargetPathToZod: Record<ITargetPath, (data: any) => any> = {
  Groupe: GroupeDataToZOD,
  Manga: MangaDataToZOD,
  Anime: AnimeDataToZOD,
  Person: PersonDataToZOD,
  Character: CharacterDataToZOD,
  Track: TrackDataToZOD,
  Company: CompanyDataToZOD,
  ...({} as Record<
    Exclude<
      ITargetPath,
      | "Groupe"
      | "Manga"
      | "Anime"
      | "Person"
      | "Character"
      | "Track"
      | "Company"
    >,
    (data: any) => any
  >),
};

export const TargetPathZodResolver: Record<ITargetPath, ZodObject<any> | ZodEffects<ZodObject<any>>> = {
  Anime: Create_Anime_ZOD,
  Manga: Create_Manga_ZOD,
  Character: Create_Character_ZOD,
  Person: Create_Person_ZOD,
  Company: Create_Company_ZOD,
  Track: Create_Track_ZOD,
  ...({} as Record<
    Exclude<
      ITargetPath,
      "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company"
    >,
    ZodObject<any>
  >),
};
