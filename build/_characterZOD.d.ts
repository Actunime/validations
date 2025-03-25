import { ICharacter } from '@actunime/types';
import { z } from 'zod';
export declare const CharacterQueryBody: z.ZodObject<{
    name: z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        default?: string | undefined;
        alias?: string[] | undefined;
    }, {
        default?: string | undefined;
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
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
    gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
    species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
    actors: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        name: z.ZodOptional<z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
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
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
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
        isGroupe?: boolean | undefined;
        name?: {
            default: string;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        description?: string | undefined;
    }, {
        isGroupe?: boolean | undefined;
        name?: {
            default: string;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        description?: string | undefined;
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    avatar: {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdAt: string;
    updatedAt: string;
    age: number;
    gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
    species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
    actors: {
        isGroupe?: boolean | undefined;
        name?: {
            default: string;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        description?: string | undefined;
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
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    avatar: {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdAt: string;
    updatedAt: string;
    age: string | number;
    gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
    species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
    actors: {
        isGroupe?: boolean | undefined;
        name?: {
            default: string;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        description?: string | undefined;
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
    birthDate: number;
    createdAt: number;
    updatedAt: number;
    age: number;
    gender: number;
    species: number;
}, {
    birthDate: string | number;
    createdAt: string | number;
    updatedAt: string | number;
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
        birthDate?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        age?: number | undefined;
        gender?: number | undefined;
        species?: number | undefined;
    }, {
        birthDate?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        age?: string | number | undefined;
        gender?: string | number | undefined;
        species?: string | number | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            default?: string | undefined;
            alias?: string[] | undefined;
        }, {
            default?: string | undefined;
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
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        gender: z.ZodOptional<z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>>;
        species: z.ZodOptional<z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>>;
        actors: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
            name: z.ZodOptional<z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: string[] | undefined;
            }, {
                default: string;
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
                    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                }, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                }>>;
            }, "strip", z.ZodTypeAny, {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
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
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        }, {
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        }>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
    }, {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
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
    sort?: {
        birthDate?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        age?: number | undefined;
        gender?: number | undefined;
        species?: number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}, {
    sort?: {
        birthDate?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        age?: string | number | undefined;
        gender?: string | number | undefined;
        species?: string | number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
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
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            isGroupe?: boolean | undefined;
            name?: {
                default: string;
                alias?: string[] | undefined;
            } | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
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
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: string[] | undefined;
    }, {
        default: string;
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
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }>>;
    }, "strip", z.ZodTypeAny, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }>>;
    actors: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newPerson: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: string[] | undefined;
            }, {
                default: string;
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
                    label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                    value: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                }, {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                }>>;
            }, "strip", z.ZodTypeAny, {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
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
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        }, {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        }>>;
        role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
    birthDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    } | undefined;
    avatar?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    description?: string | undefined;
    age?: number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
}, {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
    birthDate?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    } | undefined;
    avatar?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    description?: string | undefined;
    age?: string | number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
}>;
export type ICharacterBody = z.infer<typeof CharacterBody>;
export declare const CharacterCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        name: z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
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
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        actors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: string[] | undefined;
                }, {
                    default: string;
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
                        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    }, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
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
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            }, {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    }, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export type ICharacterCreateBody = z.infer<typeof CharacterCreateBody>;
export declare const CharacterAddBody: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newCharacter: z.ZodOptional<z.ZodObject<{
        name: z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
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
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        actors: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: string[] | undefined;
                }, {
                    default: string;
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
                        label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                        value: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    }, {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    }>>;
                }, "strip", z.ZodTypeAny, {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
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
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            }, {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    }, {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    }>>;
    role: z.ZodOptional<z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
    newCharacter?: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    } | undefined;
}, {
    id?: string | undefined;
    role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
    newCharacter?: {
        name: {
            default: string;
            alias?: string[] | undefined;
        };
        birthDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        description?: string | undefined;
        age?: string | number | undefined;
        gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
        species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
        actors?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                description?: string | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
    } | undefined;
}>;
export type ICharacterAddBody = z.infer<typeof CharacterAddBody>;
export declare const CharacterDataToZOD: (data: ICharacter) => {
    name: {
        default: string;
        alias?: string[] | undefined;
    };
    birthDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hours?: number | undefined;
        minutes?: number | undefined;
        seconds?: number | undefined;
    } | undefined;
    avatar?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    description?: string | undefined;
    age?: number | undefined;
    gender?: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE" | undefined;
    species?: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC" | undefined;
    actors?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            description?: string | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
} | undefined;
