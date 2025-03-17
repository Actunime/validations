import { MangaBody, MangaDataToZOD } from "./_mangaZOD";
import { AnimeBody, AnimeDataToZOD } from "./_animeZOD";
import { PersonBody, PersonDataToZOD } from "./_personZOD";
import { CharacterDataToZOD, CharacterBody } from "./_characterZOD";
import { TrackBody, TrackDataToZOD } from "./_trackZOD";
import { CompanyDataToZOD, CompanyBody } from "./_companyZOD";
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
  Anime: AnimeBody,
  Manga: MangaBody,
  Character: CharacterBody,
  Person: PersonBody,
  Company: CompanyBody,
  Track: TrackBody,
  ...({} as Record<
    Exclude<
      ITargetPath,
      "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company"
    >,
    ZodObject<any>
  >),
};
