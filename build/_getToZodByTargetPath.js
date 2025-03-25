import { MangaBody, MangaDataToZOD } from "./_mangaZOD";
import { AnimeBody, AnimeDataToZOD } from "./_animeZOD";
import { PersonBody, PersonDataToZOD } from "./_personZOD";
import { CharacterDataToZOD, CharacterBody } from "./_characterZOD";
import { TrackBody, TrackDataToZOD } from "./_trackZOD";
import { CompanyDataToZOD, CompanyBody } from "./_companyZOD";
import { GroupeDataToZOD } from "./_groupeZOD";
export const TargetPathToZod = {
    Groupe: GroupeDataToZOD,
    Manga: MangaDataToZOD,
    Anime: AnimeDataToZOD,
    Person: PersonDataToZOD,
    Character: CharacterDataToZOD,
    Track: TrackDataToZOD,
    Company: CompanyDataToZOD,
    ...{},
};
export const TargetPathZodResolver = {
    Anime: AnimeBody,
    Manga: MangaBody,
    Character: CharacterBody,
    Person: PersonBody,
    Company: CompanyBody,
    Track: TrackBody,
    ...{},
};
