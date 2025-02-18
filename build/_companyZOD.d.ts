import { ICompany } from "@actunime/types";
import { z } from "zod";
export declare const Company_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        updaptedAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
        createdAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
    }, "strict", z.ZodTypeAny, {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    }, {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        name: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        type: z.ZodOptional<z.ZodEnum<("STUDIO" | "PRODUCER")[] & [string, ...string[]]>>;
        allowUnverified: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {} | undefined;
}, {
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {} | undefined;
}>;
export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;
export declare const Create_Company_ZOD: z.ZodObject<{
    type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
    name: z.ZodString;
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
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }, {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    }>>;
    createdDate: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    type: "STUDIO" | "PRODUCER";
    name: string;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    logo?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    createdDate?: string | undefined;
}, {
    type: "STUDIO" | "PRODUCER";
    name: string;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    logo?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    createdDate?: string | undefined;
}>;
export type ICreate_Company_ZOD = z.infer<typeof Create_Company_ZOD>;
export declare const Create_Company_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
        type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
        name: z.ZodString;
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
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }, {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
    note?: string | undefined;
}>;
export type ICreate_Company_ZOD_FORM = z.infer<typeof Create_Company_ZOD_FORM>;
export declare const Add_Company_ZOD: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    newCompany: z.ZodOptional<z.ZodObject<{
        type: z.ZodEnum<["STUDIO", "PRODUCER"]>;
        name: z.ZodString;
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
                label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
                value: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }, {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            }>>;
        }, "strip", z.ZodTypeAny, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }, {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        }>>;
        createdDate: z.ZodOptional<z.ZodString>;
    }, "strict", z.ZodTypeAny, {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }, {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    newCompany?: {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    } | undefined;
}, {
    id?: string | undefined;
    newCompany?: {
        type: "STUDIO" | "PRODUCER";
        name: string;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        logo?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        createdDate?: string | undefined;
    } | undefined;
}>;
export type IAdd_Company_ZOD = z.infer<typeof Add_Company_ZOD>;
export declare const CompanyDataToZOD: (data: ICompany) => {
    type: "STUDIO" | "PRODUCER";
    name: string;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    logo?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    createdDate?: string | undefined;
} | undefined;
//# sourceMappingURL=_companyZOD.d.ts.map