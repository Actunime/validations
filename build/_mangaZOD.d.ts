import { IManga } from '@actunime/types';
import { z } from 'zod';
export declare const MangaQueryBody: z.ZodObject<{
    title: z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        default?: string | undefined;
        alias?: string[] | undefined;
    }, {
        default?: string | undefined;
        alias?: string[] | undefined;
    }>;
    date: z.ZodObject<{
        start: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
        end: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
    }, "strip", z.ZodTypeAny, {
        start?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        end?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
    }, {
        start?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        end?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
    }>;
    format: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>;
    vf: z.ZodBoolean;
    genres: z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">;
    status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
    trailer: z.ZodString;
    chapters: z.ZodObject<{
        airing: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        nextAiringDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
        total: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    }>;
    volumes: z.ZodObject<{
        airing: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        nextAiringDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
        total: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    }>;
    adult: z.ZodBoolean;
    explicit: z.ZodBoolean;
    links: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        name?: string | undefined;
    }, {
        value?: string | undefined;
        name?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    date: {
        start?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        end?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
    };
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    title: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    vf: boolean;
    genres: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[];
    trailer: string;
    chapters: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    };
    volumes: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    };
    adult: boolean;
    explicit: boolean;
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    date: {
        start?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        end?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
    };
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    title: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    vf: boolean;
    genres: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[];
    trailer: string;
    chapters: {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    };
    volumes: {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    };
    adult: boolean;
    explicit: boolean;
}>;
export declare const MangaSortBody: z.ZodObject<{
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
export declare const MangaPaginationBody: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    strict: z.ZodOptional<z.ZodBoolean>;
    onlyVerified: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodObject<{
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
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        title: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        }, "strip", z.ZodTypeAny, {
            default?: string | undefined;
            alias?: string[] | undefined;
        }, {
            default?: string | undefined;
            alias?: string[] | undefined;
        }>>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
            end: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
        }, "strip", z.ZodTypeAny, {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        }, {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        }>>;
        format: z.ZodOptional<z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>>;
        vf: z.ZodOptional<z.ZodBoolean>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodOptional<z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>>;
        trailer: z.ZodOptional<z.ZodString>;
        chapters: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            nextAiringDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
            total: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        }>>;
        volumes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            nextAiringDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
            total: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        }>>;
        adult: z.ZodOptional<z.ZodBoolean>;
        explicit: z.ZodOptional<z.ZodBoolean>;
        links: z.ZodOptional<z.ZodObject<{
            name: z.ZodOptional<z.ZodString>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            name?: string | undefined;
        }, {
            value?: string | undefined;
            name?: string | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        format?: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
    }, {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        format?: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
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
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        format?: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}, {
    sort?: {
        status?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        vf?: number | undefined;
        adult?: number | undefined;
        explicit?: number | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        status?: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any" | undefined;
        date?: {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        title?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        format?: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER" | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        trailer?: string | undefined;
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        adult?: boolean | undefined;
        explicit?: boolean | undefined;
    } | undefined;
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}>;
export type IMangaPaginationBody = z.infer<typeof MangaPaginationBody>;
export declare const MangaAddBody: z.ZodObject<{
    id: z.ZodString;
    parentLabel: z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>;
}, "strip", z.ZodTypeAny, {
    id: string;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
}, {
    id: string;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
}>;
export type IMangaAddBody = z.infer<typeof MangaAddBody>;
export declare const MangaBody: z.ZodObject<{
    groupe: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newGroupe: z.ZodOptional<z.ZodObject<{
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
        }, "strip", z.ZodTypeAny, {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        }, {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newGroupe?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        } | undefined;
    }, {
        id?: string | undefined;
        newGroupe?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        } | undefined;
    }>;
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
    title: z.ZodObject<{
        default: z.ZodString;
        alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        default: string;
        alias?: string[] | undefined;
    }, {
        default: string;
        alias?: string[] | undefined;
    }>;
    date: z.ZodOptional<z.ZodObject<{
        start: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
        end: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
    }, "strip", z.ZodTypeAny, {
        start?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        end?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
    }, {
        start?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        end?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
    }>>;
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
    banner: z.ZodOptional<z.ZodObject<{
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
    synopsis: z.ZodOptional<z.ZodString>;
    format: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>;
    vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
    genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
    status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
    chapters: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodObject<{
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
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    }>>;
    volumes: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodObject<{
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
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    }>>;
    adult: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
    explicit: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
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
    companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newCompany: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
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
            description: z.ZodOptional<z.ZodString>;
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
            createdDate: z.ZodOptional<z.ZodObject<{
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
        }, "strict", z.ZodTypeAny, {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        }, {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        } | undefined;
    }, {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        } | undefined;
    }>, "many">>;
    staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                default: string;
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
            actors: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
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
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        default: string;
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
                        default: string;
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
                        default: string;
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
                default: string;
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
                } | undefined;
            } | undefined;
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
                default: string;
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
                } | undefined;
            } | undefined;
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
                default: string;
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
                } | undefined;
            } | undefined;
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
                default: string;
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
                } | undefined;
            } | undefined;
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
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: string[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean;
    explicit: boolean;
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        } | undefined;
    };
    date?: {
        start?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        end?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
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
    chapters?: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    } | undefined;
    volumes?: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    } | undefined;
    parent?: {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    synopsis?: string | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        } | undefined;
    }[] | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    characters?: {
        id?: string | undefined;
        role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
        newCharacter?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
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
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: string[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean | "true" | "false";
    explicit: boolean | "true" | "false";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        } | undefined;
    };
    date?: {
        start?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        end?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
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
    chapters?: {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    } | undefined;
    volumes?: {
        airing?: string | number | undefined;
        nextAiringDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
        total?: string | number | undefined;
    } | undefined;
    parent?: {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    synopsis?: string | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        } | undefined;
    }[] | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    characters?: {
        id?: string | undefined;
        role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
        newCharacter?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
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
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
}>;
export type IMangaBody = z.infer<typeof MangaBody>;
export declare const MangaCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        groupe: z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newGroupe: z.ZodOptional<z.ZodObject<{
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
            }, "strip", z.ZodTypeAny, {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            }, {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        }, {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        }>;
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
        title: z.ZodObject<{
            default: z.ZodString;
            alias: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        }, "strip", z.ZodTypeAny, {
            default: string;
            alias?: string[] | undefined;
        }, {
            default: string;
            alias?: string[] | undefined;
        }>;
        date: z.ZodOptional<z.ZodObject<{
            start: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
            end: z.ZodOptional<z.ZodObject<{
                year: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                month: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                day: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                hours: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                minutes: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
                seconds: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
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
        }, "strip", z.ZodTypeAny, {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        }, {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
        }>>;
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
        banner: z.ZodOptional<z.ZodObject<{
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
        synopsis: z.ZodOptional<z.ZodString>;
        format: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>;
        vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
        chapters: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodObject<{
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
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        }>>;
        volumes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodObject<{
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
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        }>>;
        adult: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
        explicit: z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">;
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
        companys: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newCompany: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
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
                description: z.ZodOptional<z.ZodString>;
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
                createdDate: z.ZodOptional<z.ZodObject<{
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
            }, "strict", z.ZodTypeAny, {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
            }, {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
            } | undefined;
        }, {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
            } | undefined;
        }>, "many">>;
        staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    default: string;
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
                actors: z.ZodOptional<z.ZodArray<z.ZodObject<Omit<{
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            default: string;
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
                            default: string;
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
                            default: string;
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
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: string[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        };
        date?: {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
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
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        parent?: {
            id: string;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        synopsis?: string | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        characters?: {
            id?: string | undefined;
            role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
            newCharacter?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: string[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        };
        date?: {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
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
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        parent?: {
            id: string;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        synopsis?: string | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        characters?: {
            id?: string | undefined;
            role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
            newCharacter?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        title: {
            default: string;
            alias?: string[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean;
        explicit: boolean;
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        };
        date?: {
            start?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            end?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
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
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
            total?: number | undefined;
        } | undefined;
        parent?: {
            id: string;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        synopsis?: string | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: number | undefined;
                    month?: number | undefined;
                    day?: number | undefined;
                    hours?: number | undefined;
                    minutes?: number | undefined;
                    seconds?: number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        characters?: {
            id?: string | undefined;
            role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
            newCharacter?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
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
            alias?: string[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
            } | undefined;
        };
        date?: {
            start?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            end?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
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
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: {
                year?: string | number | undefined;
                month?: string | number | undefined;
                day?: string | number | undefined;
                hours?: string | number | undefined;
                minutes?: string | number | undefined;
                seconds?: string | number | undefined;
            } | undefined;
            total?: string | number | undefined;
        } | undefined;
        parent?: {
            id: string;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        } | undefined;
        synopsis?: string | undefined;
        companys?: {
            id?: string | undefined;
            newCompany?: {
                type: "STUDIO" | "PRODUCER";
                name: {
                    default: string;
                    alias?: string[] | undefined;
                };
                description?: string | undefined;
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
                createdDate?: {
                    year?: string | number | undefined;
                    month?: string | number | undefined;
                    day?: string | number | undefined;
                    hours?: string | number | undefined;
                    minutes?: string | number | undefined;
                    seconds?: string | number | undefined;
                } | undefined;
            } | undefined;
        }[] | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            } | undefined;
            role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
        }[] | undefined;
        characters?: {
            id?: string | undefined;
            role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
            newCharacter?: {
                name: {
                    default: string;
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
                    } | undefined;
                } | undefined;
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
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                }[] | undefined;
            } | undefined;
        }[] | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type IMangaCreateBody = z.infer<typeof MangaCreateBody>;
export declare const MangaDataToZOD: (data: IManga) => {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    title: {
        default: string;
        alias?: string[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean;
    explicit: boolean;
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: {
                default: string;
                alias?: string[] | undefined;
            };
        } | undefined;
    };
    date?: {
        start?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        end?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
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
    chapters?: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    } | undefined;
    volumes?: {
        airing?: number | undefined;
        nextAiringDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
        total?: number | undefined;
    } | undefined;
    parent?: {
        id: string;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    } | undefined;
    synopsis?: string | undefined;
    companys?: {
        id?: string | undefined;
        newCompany?: {
            type: "STUDIO" | "PRODUCER";
            name: {
                default: string;
                alias?: string[] | undefined;
            };
            description?: string | undefined;
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
            createdDate?: {
                year?: number | undefined;
                month?: number | undefined;
                day?: number | undefined;
                hours?: number | undefined;
                minutes?: number | undefined;
                seconds?: number | undefined;
            } | undefined;
        } | undefined;
    }[] | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        } | undefined;
        role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
    }[] | undefined;
    characters?: {
        id?: string | undefined;
        role?: "PRINCIPAL" | "SECONDAIRE" | "FIGURANT" | "ANTAGONISTE" | "SOUTIEN" | undefined;
        newCharacter?: {
            name: {
                default: string;
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
                } | undefined;
            } | undefined;
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
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
            }[] | undefined;
        } | undefined;
    }[] | undefined;
} | undefined;
