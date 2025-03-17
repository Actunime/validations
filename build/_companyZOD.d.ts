import { ICompany } from "@actunime/types";
import { z } from "zod";
export declare const CompanyQueryBody: z.ZodObject<{
    type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
    name: z.ZodString;
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
    logo: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
    createdDate: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "STUDIO" | "PRODUCER";
    name: string;
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdDate?: {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    } | undefined;
}, {
    type: "STUDIO" | "PRODUCER";
    name: string;
    createdAt: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdDate?: {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    } | undefined;
}>;
export declare const CompanySortBody: z.ZodObject<{
    type: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    name: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
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
    name: number;
    createdAt: number;
    updatedAt: number;
    createdDate: {
        year: number;
        month: number;
        day: number;
    };
}, {
    type: string | number;
    name: string | number;
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
        name: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
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
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    }, {
        type?: string | number | undefined;
        name?: string | number | undefined;
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
        name: z.ZodOptional<z.ZodString>;
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
        logo: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        }>>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    }, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    }>>;
    from: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        path: z.ZodEnum<("User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser")[] & [string, ...string[]]>;
    }, "strip", z.ZodTypeAny, {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    }, {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    }>>;
}, "strip", z.ZodTypeAny, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        type?: number | undefined;
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    } | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    } | undefined;
    from?: {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
        id: string;
    } | undefined;
}, {
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    onlyVerified?: boolean | undefined;
    sort?: {
        type?: string | number | undefined;
        name?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    } | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    } | undefined;
    from?: {
        path: "User" | "Account" | "UserProfile" | "UserPreferences" | "UserAnimeListe" | "UserDeleteAnimeFromListe" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | "DisabledUser" | "PremiumUser";
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
        name: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
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
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    }, {
        type?: string | number | undefined;
        name?: string | number | undefined;
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
        name: z.ZodOptional<z.ZodString>;
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
        logo: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        }>>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    }, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        type?: number | undefined;
        name?: number | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: {
            year: number;
            month: number;
            day: number;
        } | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        type?: string | number | undefined;
        name?: string | number | undefined;
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: {
            year: string | number;
            month: string | number;
            day: string | number;
        } | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    };
}>;
export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;
export declare const Create_Company_ZOD: z.ZodObject<{
    type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
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
    createdDate: z.ZodOptional<z.ZodObject<{
        year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
    }, "strip", z.ZodTypeAny, {
        year?: number | undefined;
        month?: number | undefined;
        day?: number | undefined;
        hour?: number | undefined;
        minute?: number | undefined;
    }, {
        year?: string | number | undefined;
        month?: string | number | undefined;
        day?: string | number | undefined;
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    type: "STUDIO" | "PRODUCER";
    name: string;
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
        hour?: number | undefined;
        minute?: number | undefined;
    } | undefined;
}, {
    type: "STUDIO" | "PRODUCER";
    name: string;
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
        hour?: string | number | undefined;
        minute?: string | number | undefined;
    } | undefined;
}>;
export type ICreate_Company_ZOD = z.infer<typeof Create_Company_ZOD>;
export declare const CompanyCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
        type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
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
        createdDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    }, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    };
    reason?: string | undefined;
    description?: string | undefined;
}>;
export type ICompanyCreateBody = z.infer<typeof CompanyCreateBody>;
export declare const Create_Company_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
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
        createdDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    }, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    };
    note?: string | undefined;
}>;
export type ICreate_Company_ZOD_FORM = z.infer<typeof Create_Company_ZOD_FORM>;
export declare const Add_Company_ZOD: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newCompany: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
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
        createdDate: z.ZodOptional<z.ZodObject<{
            year: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            month: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            day: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            hour: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
            minute: z.ZodOptional<z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>>;
        }, "strip", z.ZodTypeAny, {
            year?: number | undefined;
            month?: number | undefined;
            day?: number | undefined;
            hour?: number | undefined;
            minute?: number | undefined;
        }, {
            year?: string | number | undefined;
            month?: string | number | undefined;
            day?: string | number | undefined;
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        }>>;
    }, "strict", z.ZodTypeAny, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    }, {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    newCompany?: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: number | undefined;
            minute?: number | undefined;
        } | undefined;
    } | undefined;
}, {
    id?: string | undefined;
    newCompany?: {
        type: "STUDIO" | "PRODUCER";
        name: string;
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
            hour?: string | number | undefined;
            minute?: string | number | undefined;
        } | undefined;
    } | undefined;
}>;
export type IAdd_Company_ZOD = z.infer<typeof Add_Company_ZOD>;
export declare const CompanyDataToZOD: (data: ICompany) => {
    type: "STUDIO" | "PRODUCER";
    name: string;
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
        hour?: number | undefined;
        minute?: number | undefined;
    } | undefined;
} | undefined;
