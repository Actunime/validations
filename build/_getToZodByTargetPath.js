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
    Anime: _animeZOD_1.AnimeBody,
    Manga: _mangaZOD_1.MangaBody,
    Character: _characterZOD_1.CharacterBody,
    Person: _personZOD_1.PersonBody,
    Company: _companyZOD_1.CompanyBody,
    Track: _trackZOD_1.TrackBody,
    ...{},
};
//# sourceMappingURL=_getToZodByTargetPath.js.map