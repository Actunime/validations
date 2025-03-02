"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TargetPathZodResolver = exports.TargetPathToZod = void 0;
const _mangaZOD_1 = require("./_mangaZOD");
const _animeZOD_1 = require("./_animeZOD");
const _personZOD_1 = require("./_personZOD");
const _characterZOD_1 = require("./_characterZOD");
const _trackZOD_1 = require("./_trackZOD");
const _companyZOD_1 = require("./_companyZOD");
const _groupeZOD_1 = require("./_groupeZOD");
exports.TargetPathToZod = {
    Groupe: _groupeZOD_1.GroupeDataToZOD,
    Manga: _mangaZOD_1.MangaDataToZOD,
    Anime: _animeZOD_1.AnimeDataToZOD,
    Person: _personZOD_1.PersonDataToZOD,
    Character: _characterZOD_1.CharacterDataToZOD,
    Track: _trackZOD_1.TrackDataToZOD,
    Company: _companyZOD_1.CompanyDataToZOD,
    ...{},
};
exports.TargetPathZodResolver = {
    Anime: _animeZOD_1.Create_Anime_ZOD,
    Manga: _mangaZOD_1.Create_Manga_ZOD,
    Character: _characterZOD_1.Create_Character_ZOD,
    Person: _personZOD_1.Create_Person_ZOD,
    Company: _companyZOD_1.Create_Company_ZOD,
    Track: _trackZOD_1.Create_Track_ZOD,
    ...{},
};
//# sourceMappingURL=_getToZodByTargetPath.js.map