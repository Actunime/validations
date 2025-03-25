import { ICompany } from '@actunime/types';
import { z } from 'zod';
export declare const CompanyQueryBody: z.ZodObject<{
    type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
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
    logo: z.ZodObject<{
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        value: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
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
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "STUDIO" | "PRODUCER";
    name: {
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
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
        default?: string | undefined;
        alias?: string[] | undefined;
    };
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        value?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdDate?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hours?: string | number | undefined;
        minutes?: string | number | undefined;
        seconds?: string | number | undefined;
    } | undefined;
}>;
export declare const CompanySortBody: z.ZodObject<{
    type: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdDate: z.ZodObject<{
        year: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
        month: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
        day: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    }, "strip", z.ZodTypeAny, {
        year: number;
        month: number;
        day: number;
    }, {
        year: string | number;
        month: string | number;
        day: string | number;
    }>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    type: number;
    createdAt: number;
    updatedAt: number;
    createdDate: {
        year: number;
        month: number;
        day: number;
    };
}, {
    type: string | number;
    createdAt: string | number;
    updatedAt: string | number;
    createdDate: {
        year: string | number;
        month: string | number;
        day: string | number;
    };
}>;
export declare const CompanyPaginationBody: z.ZodObject<{
    page: z.ZodOptional<z.ZodNumber>;
    limit: z.ZodOptional<z.ZodNumber>;
    strict: z.ZodOptional<z.ZodBoolean>;
    onlyVerified: z.ZodOptional<z.ZodBoolean>;
    sort: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
            month: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
            day: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
        }, "strip", z.ZodTypeAny, {
            year: number;
            month: number;
            day: number;
        }, {
            year: string | number;
            month: string | number;
            day: string | number;
        }>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        type?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    }, {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["STUDIO", "PRODUCER"]>>;
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
        logo: z.ZodOptional<z.ZodObject<{
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
        type?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}, {
    sort?: {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
    from?: {
        path: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
        id: string;
    } | undefined;
}>;
export type ICompanyPaginationBody = z.infer<typeof CompanyPaginationBody>;
export declare const Company_Pagination_ZOD: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodObject<{
        type: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
            month: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
            day: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
        }, "strip", z.ZodTypeAny, {
            year: number;
            month: number;
            day: number;
        }, {
            year: string | number;
            month: string | number;
            day: string | number;
        }>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        type?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    }, {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    }>;
    query: z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["STUDIO", "PRODUCER"]>>;
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
        logo: z.ZodOptional<z.ZodObject<{
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
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
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    sort: {
        type?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hours?: number | undefined;
            minutes?: number | undefined;
            seconds?: number | undefined;
        } | undefined;
    };
}, {
    sort: {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: {
            default?: string | undefined;
            alias?: string[] | undefined;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            value?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hours?: string | number | undefined;
            minutes?: string | number | undefined;
            seconds?: string | number | undefined;
        } | undefined;
    };
}>;
export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;
export declare const CompanyBody: z.ZodObject<{
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
}>;
export type ICompanyBody = z.infer<typeof CompanyBody>;
export declare const CompanyCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
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
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
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
    };
    reason?: string | undefined;
    description?: string | undefined;
}, {
    data: {
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
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type ICompanyCreateBody = z.infer<typeof CompanyCreateBody>;
export declare const CompanyAddBody: z.ZodObject<{
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
}>;
export type ICompanyAddBody = z.infer<typeof CompanyAddBody>;
export declare const CompanyDataToZOD: (data: ICompany) => {
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
