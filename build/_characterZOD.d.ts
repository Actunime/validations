import { ICharacter } from '@actunime/types';
import { z } from 'zod';
export declare const CharacterQueryBody: z.ZodObject<{
    name: z.ZodObject<{
        original: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        original?: string | undefined;
        alias?: string[] | undefined;
    }, {
        original?: string | undefined;
        alias?: string[] | undefined;
    }>;
    age: z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>;
    birthDate: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    }>>;
    avatar: z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        value: z.ZodOptional<z.ZodString>;
        targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        value?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
    gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
    species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
    actors: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodObject<{
            original: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            original: string;
            alias?: string[] | undefined;
        }, {
            original: string;
            alias?: string[] | undefined;
        }>>;
        birthDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        }>>>;
        deathDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        }>>>;
        description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                value: z.ZodString;
                targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }>>>;
        links: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>>;
    }, "strict", z.ZodTypeAny, {
        name?: {
            original: string;
            alias?: string[] | undefined;
        } | undefined;
        description?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        deathDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
    }, {
        name?: {
            original: string;
            alias?: string[] | undefined;
        } | undefined;
        description?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        deathDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: {
        original?: string | undefined;
        alias?: string[] | undefined;
    };
    createdAt: string;
    updatedAt: string;
    avatar: {
        value?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    age: number;
    gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
    species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
    actors: {
        name?: {
            original: string;
            alias?: string[] | undefined;
        } | undefined;
        description?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        deathDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
    };
    birthDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    } | undefined;
}, {
    name: {
        original?: string | undefined;
        alias?: string[] | undefined;
    };
    createdAt: string;
    updatedAt: string;
    avatar: {
        value?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    age: string | number;
    gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
    species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
    actors: {
        name?: {
            original: string;
            alias?: string[] | undefined;
        } | undefined;
        description?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        deathDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
    };
    birthDate?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    } | undefined;
}>;
export declare const CharacterSortBody: z.ZodObject<{
    age: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    birthDate: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    gender: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    species: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    createdAt: number;
    updatedAt: number;
    birthDate: number;
    age: number;
    gender: number;
    species: number;
}, {
    createdAt: string | number;
    updatedAt: string | number;
    birthDate: string | number;
    age: string | number;
    gender: string | number;
    species: string | number;
}>;
export declare const CharacterPaginationBody: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    strict: z.ZodOptional<z.ZodBoolean>;
    onlyVerified: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodObject<{
        age: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        gender: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        species: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        birthDate?: number | undefined;
        age?: number | undefined;
        gender?: number | undefined;
        species?: number | undefined;
    }, {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        birthDate?: string | number | undefined;
        age?: string | number | undefined;
        gender?: string | number | undefined;
        species?: string | number | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodObject<{
            original: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            original?: string | undefined;
            alias?: string[] | undefined;
        }, {
            original?: string | undefined;
            alias?: string[] | undefined;
        }>>;
        age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        }>>>;
        avatar: z.ZodOptional<z.ZodObject<{
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodOptional<z.ZodString>;
            targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        gender: z.ZodOptional<z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>>;
        species: z.ZodOptional<z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>>;
        actors: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodObject<{
                original: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                original: string;
                alias?: string[] | undefined;
            }, {
                original: string;
                alias?: string[] | undefined;
            }>>;
            birthDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            }, "strip", z.ZodTypeAny, {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            }, {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            }>>>;
            deathDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            }, "strip", z.ZodTypeAny, {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            }, {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            }>>>;
            description: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            avatar: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                newImage: z.ZodOptional<z.ZodObject<{
                    value: z.ZodString;
                    targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                }, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            }>>>;
            links: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>>;
        }, "strict", z.ZodTypeAny, {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: {
            original?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }, {
        name?: {
            original?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }>>;
    from: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        path: z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    }, {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        birthDate?: number | undefined;
        age?: number | undefined;
        gender?: number | undefined;
        species?: number | undefined;
    } | undefined;
    query?: {
        name?: {
            original?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        birthDate?: string | number | undefined;
        age?: string | number | undefined;
        gender?: string | number | undefined;
        species?: string | number | undefined;
    } | undefined;
    query?: {
        name?: {
            original?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            value?: string | undefined;
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            name?: {
                original: string;
                alias?: string[] | undefined;
            } | undefined;
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}>;
export type ICharacterPaginationBody = z.infer<typeof CharacterPaginationBody>;
export declare const CharacterBody: z.ZodObject<{
    name: z.ZodObject<{
        original: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        original: string;
        alias?: string[] | undefined;
    }, {
        original: string;
        alias?: string[] | undefined;
    }>;
    age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    birthDate: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    }>>;
    gender: z.ZodOptional<z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>>;
    species: z.ZodOptional<z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>>;
    description: z.ZodOptional<z.ZodString>;
    avatar: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        newImage: z.ZodOptional<z.ZodObject<{
            value: z.ZodString;
            targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        } | undefined;
    }>>;
    actors: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
        id: z.ZodOptional<z.ZodString>;
        newPerson: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodObject<{
                original: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                original: string;
                alias?: string[] | undefined;
            }, {
                original: string;
                alias?: string[] | undefined;
            }>;
            birthDate: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            }, "strip", z.ZodTypeAny, {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            }, {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            }>>;
            deathDate: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            }, "strip", z.ZodTypeAny, {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            }, {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            }>>;
            description: z.ZodOptional<z.ZodString>;
            avatar: z.ZodOptional<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                newImage: z.ZodOptional<z.ZodObject<{
                    value: z.ZodString;
                    targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                }, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                }>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            }>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
        }, "strict", z.ZodTypeAny, {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }>>;
        role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
    }, "role">, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newPerson?: {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newPerson?: {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: {
        original: string;
        alias?: string[] | undefined;
    };
    description?: string | undefined;
    birthDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    } | undefined;
    avatar?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        } | undefined;
    } | undefined;
    age?: number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}, {
    name: {
        original: string;
        alias?: string[] | undefined;
    };
    description?: string | undefined;
    birthDate?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    } | undefined;
    avatar?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        } | undefined;
    } | undefined;
    age?: string | number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            deathDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}>;
export type ICharacterBody = z.infer<typeof CharacterBody>;
export declare const CharacterCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        name: z.ZodObject<{
            original: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            original: string;
            alias?: string[] | undefined;
        }, {
            original: string;
            alias?: string[] | undefined;
        }>;
        age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        }>>;
        gender: z.ZodOptional<z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>>;
        species: z.ZodOptional<z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>>;
        description: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                value: z.ZodString;
                targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }>>;
        actors: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    original: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    original: string;
                    alias?: string[] | undefined;
                }, {
                    original: string;
                    alias?: string[] | undefined;
                }>;
                birthDate: z.ZodOptional<z.ZodObject<{
                    year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                }, "strip", z.ZodTypeAny, {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                }, {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                }>>;
                deathDate: z.ZodOptional<z.ZodObject<{
                    year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                }, "strip", z.ZodTypeAny, {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                }, {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                }>>;
                description: z.ZodOptional<z.ZodString>;
                avatar: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                    newImage: z.ZodOptional<z.ZodObject<{
                        value: z.ZodString;
                        targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    }, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "role">, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}, {
    data: {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type ICharacterCreateBody = z.infer<typeof CharacterCreateBody>;
export declare const CharacterAddBody: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newCharacter: z.ZodOptional<z.ZodObject<{
        name: z.ZodObject<{
            original: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            original: string;
            alias?: string[] | undefined;
        }, {
            original: string;
            alias?: string[] | undefined;
        }>;
        age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        }>>;
        gender: z.ZodOptional<z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>>;
        species: z.ZodOptional<z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>>;
        description: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            newImage: z.ZodOptional<z.ZodObject<{
                value: z.ZodString;
                targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        }>>;
        actors: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    original: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    original: string;
                    alias?: string[] | undefined;
                }, {
                    original: string;
                    alias?: string[] | undefined;
                }>;
                birthDate: z.ZodOptional<z.ZodObject<{
                    year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                }, "strip", z.ZodTypeAny, {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                }, {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                }>>;
                deathDate: z.ZodOptional<z.ZodObject<{
                    year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    hours: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    minutes: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                    seconds: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
                }, "strip", z.ZodTypeAny, {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                }, {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                }>>;
                description: z.ZodOptional<z.ZodString>;
                avatar: z.ZodOptional<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                    newImage: z.ZodOptional<z.ZodObject<{
                        value: z.ZodString;
                        targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
                        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    }, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "role">, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>>;
    role: z.ZodOptional<z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
    newCharacter?: {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                deathDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } | undefined;
}, {
    id?: string | undefined;
    role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
    newCharacter?: {
        name: {
            original: string;
            alias?: string[] | undefined;
        };
        description?: string | undefined;
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
            } | undefined;
        } | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    original: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
                isGroupe?: boolean | undefined;
                birthDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                deathDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    } | undefined;
}>;
export type ICharacterAddBody = z.infer<typeof CharacterAddBody>;
export declare const CharacterDataToZOD: (data: ICharacter) => {
    name: {
        original: string;
        alias?: string[] | undefined;
    };
    description?: string | undefined;
    birthDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    } | undefined;
    avatar?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        } | undefined;
    } | undefined;
    age?: number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                original: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
            isGroupe?: boolean | undefined;
            birthDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            deathDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
} | undefined;
