import { CharacterGenderArray, CharacterRoleArray, CharacterSpeciesArray, } from '@actunime/types';
import { z } from 'zod';
import { PersonAddBody, PersonBody } from './_personZOD';
import { PaginationBody, zodNumber } from './_util';
import { ImageAddBody, ImageBody } from './_imageZOD';
import { PatchParamsBody } from './_patchZOD';
import { DateBody, FromBody, MediaTitleBody } from './_media';
export const CharacterQueryBody = z.object({
    name: MediaTitleBody.partial(),
    age: zodNumber(),
    birthDate: z.optional(DateBody.partial()),
    avatar: ImageBody.partial(),
    gender: z.enum(CharacterGenderArray),
    species: z.enum(CharacterSpeciesArray),
    actors: PersonBody.partial(),
    createdAt: z.string(),
    updatedAt: z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = 'le sort doit être soit -1 ou 1';
export const CharacterSortBody = z.object({
    age: zodNumber().refine(check, checkErr),
    birthDate: zodNumber().refine(check, checkErr),
    gender: zodNumber().refine(check, checkErr),
    species: zodNumber().refine(check, checkErr),
    createdAt: zodNumber().refine(check, checkErr),
    updatedAt: zodNumber().refine(check, checkErr),
});
export const CharacterPaginationBody = PaginationBody.extend({
    sort: CharacterSortBody.partial(),
    query: CharacterQueryBody.partial(),
    from: FromBody,
}).partial();
export const CharacterBody = z.object({
    name: MediaTitleBody,
    age: z.optional(zodNumber()),
    birthDate: z.optional(DateBody.partial()),
    gender: z.optional(z.enum(CharacterGenderArray)),
    species: z.optional(z.enum(CharacterSpeciesArray)),
    description: z.optional(z.string()),
    avatar: z.optional(ImageAddBody),
    actors: z.optional(z.array(PersonAddBody)),
});
export const CharacterCreateBody = PatchParamsBody.partial().extend({
    data: CharacterBody,
});
export const CharacterAddBody = z.object({
    id: z.optional(z.string()),
    newCharacter: z.optional(CharacterBody),
    role: z.optional(z.enum(CharacterRoleArray, { required_error: 'Le role est requis' })),
});
export const CharacterDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
        age: data.age,
        birthDate: data.birthDate,
        gender: data.gender,
        species: data.species,
        description: data.description,
        avatar: data.avatar,
        actors: data.actors,
    };
    const safeParse = CharacterBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
