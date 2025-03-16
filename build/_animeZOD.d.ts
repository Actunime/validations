import { IAnime } from "@actunime/types";
import { z } from "zod";
export declare const Add_Anime_ZOD: z.ZodObject<{
    id: z.ZodString;
    parentLabel: z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
}, {
    id: string;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
}>;
export declare const AnimeQueryBody: z.ZodObject<{
    title: z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    }>;
    date: z.ZodObject<{
        start: z.ZodOptional<z.ZodString>;
        end: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        start?: string | undefined;
        end?: string | undefined;
    }, {
        start?: string | undefined;
        end?: string | undefined;
    }>;
    format: z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>;
    vf: z.ZodBoolean;
    genres: z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">;
    status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
    trailer: z.ZodString;
    episodes: z.ZodObject<{
        airing: z.ZodOptional<z.ZodNumber>;
        nextAiringDate: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodNumber>;
        durationMinute: z.ZodOptional<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    }, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    }>;
    adult: z.ZodBoolean;
    explicit: z.ZodBoolean;
    links: z.ZodObject<{
        name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        value: z.ZodOptional<z.ZodDefault<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        name?: string | undefined;
    }, {
        value?: string | undefined;
        name?: string | undefined;
    }>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    date: {
        start?: string | undefined;
        end?: string | undefined;
    };
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    title: {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    vf: boolean;
    genres: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[];
    trailer: string;
    adult: boolean;
    explicit: boolean;
    episodes: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    };
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    date: {
        start?: string | undefined;
        end?: string | undefined;
    };
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    title: {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    vf: boolean;
    genres: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[];
    trailer: string;
    adult: boolean;
    explicit: boolean;
    episodes: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    };
}>;
export type IAnimeQueryBody = z.infer<typeof AnimeQueryBody>;
export declare const AnimeSortBody: z.ZodObject<{
    vf: z.ZodEffects<z.ZodNumber, number, number>;
    status: z.ZodEffects<z.ZodNumber, number, number>;
    adult: z.ZodEffects<z.ZodNumber, number, number>;
    explicit: z.ZodEffects<z.ZodNumber, number, number>;
    createdAt: z.ZodEffects<z.ZodNumber, number, number>;
    updatedAt: z.ZodEffects<z.ZodNumber, number, number>;
}, "strip", z.ZodTypeAny, {
    status: number;
    createdAt: number;
    updatedAt: number;
    vf: number;
    adult: number;
    explicit: number;
}, {
    status: number;
    createdAt: number;
    updatedAt: number;
    vf: number;
    adult: number;
    explicit: number;
}>;
export type IAnimeSortBody = z.infer<typeof AnimeSortBody>;
export declare const AnimePaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        vf: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        adult: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        explicit: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    }, {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    }>;
    query: z.ZodObject<{
        title: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        }>>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodString>;
            end: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start?: string | undefined;
            end?: string | undefined;
        }, {
            start?: string | undefined;
            end?: string | undefined;
        }>>;
        format: z.ZodOptional<z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>>;
        vf: z.ZodOptional<z.ZodBoolean>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodOptional<z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>>;
        trailer: z.ZodOptional<z.ZodString>;
        episodes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodNumber>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodNumber>;
            durationMinute: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }>>;
        adult: z.ZodOptional<z.ZodBoolean>;
        explicit: z.ZodOptional<z.ZodBoolean>;
        links: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            value: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            name?: string | undefined;
        }, {
            value?: string | undefined;
            name?: string | undefined;
        }>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    }, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    };
    query: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    };
    query: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    };
}>;
export type IAnimePaginationBody = z.infer<typeof AnimePaginationBody>;
export declare const Anime_Pagination_ZOD: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodObject<{
        vf: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        adult: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        explicit: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    }, {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    }>;
    query: z.ZodObject<{
        title: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        }>>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodString>;
            end: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            start?: string | undefined;
            end?: string | undefined;
        }, {
            start?: string | undefined;
            end?: string | undefined;
        }>>;
        format: z.ZodOptional<z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>>;
        vf: z.ZodOptional<z.ZodBoolean>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodOptional<z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>>;
        trailer: z.ZodOptional<z.ZodString>;
        episodes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodNumber>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodNumber>;
            durationMinute: z.ZodOptional<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }>>;
        adult: z.ZodOptional<z.ZodBoolean>;
        explicit: z.ZodOptional<z.ZodBoolean>;
        links: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodDefault<z.ZodString>>;
            value: z.ZodOptional<z.ZodDefault<z.ZodString>>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            name?: string | undefined;
        }, {
            value?: string | undefined;
            name?: string | undefined;
        }>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    }, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    };
    query: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    };
    query: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
    };
}>;
export type IAnime_Pagination_ZOD = z.infer<typeof Anime_Pagination_ZOD>;
export type IAdd_Anime_ZOD = z.infer<typeof Add_Anime_ZOD>;
export declare const Create_Anime_ZOD: z.ZodEffects<z.ZodObject<{
    groupe: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newGroupe: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    }, {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    }>;
    parent: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }>>;
    manga: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }>>;
    source: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>;
    title: z.ZodEffects<z.ZodObject<{
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>;
    date: z.ZodOptional<z.ZodObject<{
        start: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        end: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        start?: string | undefined;
        end?: string | undefined;
    }, {
        start?: string | undefined;
        end?: string | undefined;
    }>>;
    cover: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
        newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }>>;
    banner: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
        newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }, {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        }>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    }>>;
    synopsis: z.ZodOptional<z.ZodString>;
    format: z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>;
    vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
    genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
    status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
    trailer: z.ZodOptional<z.ZodString>;
    episodes: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        durationMinute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
        durationMinute?: string | number | undefined;
    }>>;
    adult: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
    explicit: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newCompany: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
            name: z.ZodString;
            bio: z.ZodOptional<z.ZodString>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
            logo: z.ZodOptional<z.ZodObject<{
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            createdDate: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        }, {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }>, "many">>;
    staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newPerson: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                }, {
                    content: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }>;
            birthDate: z.ZodOptional<z.ZodString>;
            deathDate: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
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
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }>>;
        role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }>, "many">>;
    characters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newCharacter: z.ZodOptional<z.ZodObject<{
            name: z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                }, {
                    content: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }>;
            age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            birthDate: z.ZodOptional<z.ZodString>;
            gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
            species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
            bio: z.ZodOptional<z.ZodString>;
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
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
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }, {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
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
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>>;
                role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }>, "many">>;
        }, "strict", z.ZodTypeAny, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }>>;
        role: z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
    tracks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newTrack: z.ZodOptional<z.ZodObject<{
            name: z.ZodObject<{
                default: z.ZodString;
                native: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                native?: string | undefined;
            }, {
                default: string;
                native?: string | undefined;
            }>;
            type: z.ZodEnum<("OPENING" | "ENDING" | "OST" | "INSERT")[] & [string, ...string[]]>;
            pubDate: z.ZodOptional<z.ZodString>;
            artists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                newPerson: z.ZodOptional<z.ZodObject<{
                    isGroupe: z.ZodOptional<z.ZodBoolean>;
                    name: z.ZodObject<{
                        default: z.ZodString;
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
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
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }, {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
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
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>>;
                role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }>, "many">>;
            cover: z.ZodOptional<z.ZodObject<{
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }, {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    adult: boolean;
    explicit: boolean;
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    vf?: boolean | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    trailer?: string | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    } | undefined;
    manga?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    adult: boolean | "true" | "false";
    explicit: boolean | "true" | "false";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    vf?: boolean | "true" | "false" | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    trailer?: string | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
        durationMinute?: string | number | undefined;
    } | undefined;
    manga?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}>, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    adult: boolean;
    explicit: boolean;
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    vf?: boolean | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    trailer?: string | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    } | undefined;
    manga?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    adult: boolean | "true" | "false";
    explicit: boolean | "true" | "false";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    vf?: boolean | "true" | "false" | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    trailer?: string | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
        durationMinute?: string | number | undefined;
    } | undefined;
    manga?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}>;
export type ICreate_Anime_ZOD = z.infer<typeof Create_Anime_ZOD>;
export declare const AnimeCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodEffects<z.ZodObject<{
        groupe: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newGroupe: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        }, {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        }>;
        parent: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }>>;
        manga: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }>>;
        source: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>;
        title: z.ZodEffects<z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }>, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            end: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            start?: string | undefined;
            end?: string | undefined;
        }, {
            start?: string | undefined;
            end?: string | undefined;
        }>>;
        cover: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
            newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        banner: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
            newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        synopsis: z.ZodOptional<z.ZodString>;
        format: z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>;
        vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
        trailer: z.ZodOptional<z.ZodString>;
        episodes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            durationMinute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        }>>;
        adult: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
        explicit: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newCompany: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
                name: z.ZodString;
                bio: z.ZodOptional<z.ZodString>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                logo: z.ZodOptional<z.ZodObject<{
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                createdDate: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            }, {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }>, "many">>;
        staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        content: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        content: string;
                    }, {
                        content: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }>;
                birthDate: z.ZodOptional<z.ZodString>;
                deathDate: z.ZodOptional<z.ZodString>;
                bio: z.ZodOptional<z.ZodString>;
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
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
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }>, "many">>;
        characters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newCharacter: z.ZodOptional<z.ZodObject<{
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        content: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        content: string;
                    }, {
                        content: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }>;
                age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                birthDate: z.ZodOptional<z.ZodString>;
                gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
                species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
                bio: z.ZodOptional<z.ZodString>;
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
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
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }, {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }>>;
                        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            value: z.ZodEffects<z.ZodString, string, string>;
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
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>>;
                    role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }>>;
            role: z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>;
        }, "strip", z.ZodTypeAny, {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
        tracks: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newTrack: z.ZodOptional<z.ZodObject<{
                name: z.ZodObject<{
                    default: z.ZodString;
                    native: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    native?: string | undefined;
                }, {
                    default: string;
                    native?: string | undefined;
                }>;
                type: z.ZodEnum<("OPENING" | "ENDING" | "OST" | "INSERT")[] & [string, ...string[]]>;
                pubDate: z.ZodOptional<z.ZodString>;
                artists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    newPerson: z.ZodOptional<z.ZodObject<{
                        isGroupe: z.ZodOptional<z.ZodBoolean>;
                        name: z.ZodObject<{
                            default: z.ZodString;
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
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
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }, {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }>>;
                        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            value: z.ZodEffects<z.ZodString, string, string>;
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
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>>;
                    role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }>, "many">>;
                cover: z.ZodOptional<z.ZodObject<{
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }, {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type IAnimeCreateBody = z.infer<typeof AnimeCreateBody>;
export declare const Create_Anime_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodEffects<z.ZodObject<{
        groupe: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newGroupe: z.ZodOptional<z.ZodObject<{
                name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                name: string;
            }, {
                name: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        }, {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        }>;
        parent: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }>>;
        manga: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        }>>;
        source: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>;
        title: z.ZodEffects<z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }>, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }, {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        }>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
            end: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        }, "strip", z.ZodTypeAny, {
            start?: string | undefined;
            end?: string | undefined;
        }, {
            start?: string | undefined;
            end?: string | undefined;
        }>>;
        cover: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
            newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        banner: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            label: z.ZodOptional<z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>>;
            newImage: z.ZodOptional<z.ZodOptional<z.ZodObject<{
                label: z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }, {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            }>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        }>>;
        synopsis: z.ZodOptional<z.ZodString>;
        format: z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>;
        vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
        trailer: z.ZodOptional<z.ZodString>;
        episodes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            durationMinute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        }>>;
        adult: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
        explicit: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
            name: z.ZodString;
            value: z.ZodEffects<z.ZodString, string, string>;
        }, "strip", z.ZodTypeAny, {
            value: string;
            name: string;
        }, {
            value: string;
            name: string;
        }>, "many">>;
        companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newCompany: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
                name: z.ZodString;
                bio: z.ZodOptional<z.ZodString>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
                logo: z.ZodOptional<z.ZodObject<{
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                createdDate: z.ZodOptional<z.ZodString>;
            }, "strict", z.ZodTypeAny, {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            }, {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }>, "many">>;
        staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        content: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        content: string;
                    }, {
                        content: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }>;
                birthDate: z.ZodOptional<z.ZodString>;
                deathDate: z.ZodOptional<z.ZodString>;
                bio: z.ZodOptional<z.ZodString>;
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
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
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }>>;
            role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }, {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }>, "many">>;
        characters: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newCharacter: z.ZodOptional<z.ZodObject<{
                name: z.ZodObject<{
                    default: z.ZodString;
                    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        content: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        content: string;
                    }, {
                        content: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }, {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                }>;
                age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                birthDate: z.ZodOptional<z.ZodString>;
                gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
                species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
                bio: z.ZodOptional<z.ZodString>;
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
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
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }, {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }>>;
                        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            value: z.ZodEffects<z.ZodString, string, string>;
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
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>>;
                    role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }, {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }>>;
            role: z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>;
        }, "strip", z.ZodTypeAny, {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
        tracks: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newTrack: z.ZodOptional<z.ZodObject<{
                name: z.ZodObject<{
                    default: z.ZodString;
                    native: z.ZodOptional<z.ZodString>;
                }, "strip", z.ZodTypeAny, {
                    default: string;
                    native?: string | undefined;
                }, {
                    default: string;
                    native?: string | undefined;
                }>;
                type: z.ZodEnum<("OPENING" | "ENDING" | "OST" | "INSERT")[] & [string, ...string[]]>;
                pubDate: z.ZodOptional<z.ZodString>;
                artists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    newPerson: z.ZodOptional<z.ZodObject<{
                        isGroupe: z.ZodOptional<z.ZodBoolean>;
                        name: z.ZodObject<{
                            default: z.ZodString;
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }, {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
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
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }, {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        }>>;
                        links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            name: z.ZodString;
                            value: z.ZodEffects<z.ZodString, string, string>;
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
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>>;
                    role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
                }, "strip", z.ZodTypeAny, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }, {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }>, "many">>;
                cover: z.ZodOptional<z.ZodObject<{
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
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }, {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                }>>;
                links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    name: z.ZodString;
                    value: z.ZodEffects<z.ZodString, string, string>;
                }, "strip", z.ZodTypeAny, {
                    value: string;
                    name: string;
                }, {
                    value: string;
                    name: string;
                }>, "many">>;
            }, "strict", z.ZodTypeAny, {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }, {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
            durationMinute?: number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        banner?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            newImage?: {
                value: string;
                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: string;
                bio?: string | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                logo?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                createdDate?: string | undefined;
            } | undefined;
        }[] | undefined;
        characters?: {
            role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
            id?: string | undefined;
            newCharacter?: {
                name: {
                    default: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                };
                gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
                species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
                birthDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                age?: string | number | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        episodes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
            durationMinute?: string | number | undefined;
        } | undefined;
        manga?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        tracks?: {
            id?: string | undefined;
            newTrack?: {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    id?: string | undefined;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    newImage?: {
                        value: string;
                        label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                pubDate?: string | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            default: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            id?: string | undefined;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            newImage?: {
                                value: string;
                                label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    note?: string | undefined;
}>;
export type ICreate_Anime_ZOD_FORM = z.infer<typeof Create_Anime_ZOD_FORM>;
export declare const PreCreateAnimeZodSchema: z.ZodObject<{
    title: z.ZodEffects<z.ZodObject<{
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
}, {
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
}>;
export declare const Create_Anime_Update_ZOD: z.ZodObject<{
    groupe: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newGroupe: z.ZodOptional<z.ZodObject<{
            name: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
        }, {
            name: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    }, {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    }>>;
    parent: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        parentLabel: z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }, {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    }>>;
    parentPath: z.ZodOptional<z.ZodEnum<["Anime", "Manga"]>>;
    title: z.ZodOptional<z.ZodEffects<z.ZodObject<{
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }, {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    }>>;
    date: z.ZodOptional<z.ZodObject<{
        start: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        end: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        start?: string | undefined;
        end?: string | undefined;
    }, {
        start?: string | undefined;
        end?: string | undefined;
    }>>;
    image: z.ZodOptional<z.ZodObject<{
        cover: z.ZodOptional<z.ZodString>;
        banner: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        cover?: string | undefined;
        banner?: string | undefined;
    }, {
        cover?: string | undefined;
        banner?: string | undefined;
    }>>;
    synopsis: z.ZodOptional<z.ZodString>;
    source: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    sourcePath: z.ZodOptional<z.ZodEnum<["Anime", "Manga"]>>;
    format: z.ZodOptional<z.ZodEnum<("FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL")[] & [string, ...string[]]>>;
    vf: z.ZodOptional<z.ZodBoolean>;
    genres: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    themes: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    trailer: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>>;
    episodes: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        durationMinute: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
        durationMinute?: string | number | undefined;
    }>>;
    adult: z.ZodOptional<z.ZodBoolean>;
    explicit: z.ZodOptional<z.ZodBoolean>;
    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>;
    companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newCompany: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
            name: z.ZodString;
            bio: z.ZodOptional<z.ZodString>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
            logo: z.ZodOptional<z.ZodObject<{
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            createdDate: z.ZodOptional<z.ZodString>;
        }, "strict", z.ZodTypeAny, {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        }, {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }>, "many">>;
    staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newPerson: z.ZodOptional<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                }, {
                    content: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }>;
            birthDate: z.ZodOptional<z.ZodString>;
            deathDate: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
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
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }>>;
        role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }, {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }>, "many">>;
    characters: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newCharacter: z.ZodOptional<z.ZodObject<{
            name: z.ZodObject<{
                default: z.ZodString;
                alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                }, {
                    content: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }, {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            }>;
            age: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            birthDate: z.ZodOptional<z.ZodString>;
            gender: z.ZodEnum<("MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE")[] & [string, ...string[]]>;
            species: z.ZodEnum<("AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC")[] & [string, ...string[]]>;
            bio: z.ZodOptional<z.ZodString>;
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
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
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }, {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
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
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>>;
                role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }>, "many">>;
        }, "strict", z.ZodTypeAny, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }, {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }>>;
        role: z.ZodEnum<("PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
    tracks: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newTrack: z.ZodOptional<z.ZodObject<{
            name: z.ZodObject<{
                default: z.ZodString;
                native: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                default: string;
                native?: string | undefined;
            }, {
                default: string;
                native?: string | undefined;
            }>;
            type: z.ZodEnum<("OPENING" | "ENDING" | "OST" | "INSERT")[] & [string, ...string[]]>;
            pubDate: z.ZodOptional<z.ZodString>;
            artists: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                newPerson: z.ZodOptional<z.ZodObject<{
                    isGroupe: z.ZodOptional<z.ZodBoolean>;
                    name: z.ZodObject<{
                        default: z.ZodString;
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }, {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
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
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }, {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    }>>;
                    links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        name: z.ZodString;
                        value: z.ZodEffects<z.ZodString, string, string>;
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
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>>;
                role: z.ZodOptional<z.ZodEnum<("DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR")[] & [string, ...string[]]>>;
            }, "strip", z.ZodTypeAny, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }, {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }>, "many">>;
            cover: z.ZodOptional<z.ZodObject<{
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
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }, {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            }>>;
            links: z.ZodOptional<z.ZodArray<z.ZodObject<{
                name: z.ZodString;
                value: z.ZodEffects<z.ZodString, string, string>;
            }, "strip", z.ZodTypeAny, {
                value: string;
                name: string;
            }, {
                value: string;
                name: string;
            }>, "many">>;
        }, "strict", z.ZodTypeAny, {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }, {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    title?: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    } | undefined;
    format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
    vf?: boolean | undefined;
    genres?: string[] | undefined;
    trailer?: string | undefined;
    adult?: boolean | undefined;
    explicit?: boolean | undefined;
    groupe?: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    } | undefined;
    parent?: {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    source?: string | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    parentPath?: "Manga" | "Anime" | undefined;
    image?: {
        cover?: string | undefined;
        banner?: string | undefined;
    } | undefined;
    sourcePath?: "Manga" | "Anime" | undefined;
    themes?: string[] | undefined;
}, {
    status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    title?: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    } | undefined;
    format?: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL" | undefined;
    vf?: boolean | undefined;
    genres?: string[] | undefined;
    trailer?: string | undefined;
    adult?: boolean | undefined;
    explicit?: boolean | undefined;
    groupe?: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    } | undefined;
    parent?: {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    source?: string | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: string | number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
        durationMinute?: string | number | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    parentPath?: "Manga" | "Anime" | undefined;
    image?: {
        cover?: string | undefined;
        banner?: string | undefined;
    } | undefined;
    sourcePath?: "Manga" | "Anime" | undefined;
    themes?: string[] | undefined;
}>;
export declare const AnimeDataToZOD: (data: IAnime) => {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "FILM" | "SERIE" | "SERIE_COURTE" | "ONA" | "OVA" | "SPECIAL";
    adult: boolean;
    explicit: boolean;
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    source: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "ORIGINAL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    banner?: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        newImage?: {
            value: string;
            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    vf?: boolean | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    trailer?: string | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: string;
            bio?: string | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            logo?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            createdDate?: string | undefined;
        } | undefined;
    }[] | undefined;
    characters?: {
        role: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN";
        id?: string | undefined;
        newCharacter?: {
            name: {
                default: string;
                alias?: {
                    content: string;
                }[] | undefined;
            };
            gender: "MASCULIN" | "FEMININ" | "NEUTRE" | "TRANSGENRE" | "NON_BINAIRE" | "GENRE_FLUIDE" | "AUTRE";
            species: "AUTRE" | "HUMAIN" | "ELFE" | "NAIN" | "LEZARD" | "DRAGON" | "ORC";
            birthDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            age?: number | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    episodes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
        durationMinute?: number | undefined;
    } | undefined;
    manga?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    tracks?: {
        id?: string | undefined;
        newTrack?: {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                id?: string | undefined;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                newImage?: {
                    value: string;
                    label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            pubDate?: string | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        default: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        id?: string | undefined;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        newImage?: {
                            value: string;
                            label: "COVER" | "BANNER" | "AVATAR" | "LOGO";
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
} | undefined;
