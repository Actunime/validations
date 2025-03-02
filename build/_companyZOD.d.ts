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
    createdDate: z.ZodOptional<z.ZodString>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    type: "STUDIO" | "PRODUCER";
    createdAt: string;
    name: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdDate?: string | undefined;
}, {
    type: "STUDIO" | "PRODUCER";
    createdAt: string;
    name: string;
    updatedAt: string;
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
    logo: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    createdDate?: string | undefined;
}>;
export declare const CompanySortBody: z.ZodObject<{
    type: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    name: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdDate: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    type: number;
    createdAt: number;
    name: number;
    updatedAt: number;
    createdDate: number;
}, {
    type: string | number;
    createdAt: string | number;
    name: string | number;
    updatedAt: string | number;
    createdDate: string | number;
}>;
export declare const CompanyPaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        type: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        name: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        type?: number | undefined;
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: number | undefined;
    }, {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        name?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: string | number | undefined;
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
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        type?: number | undefined;
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: number | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    sort: {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        name?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: string | number | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
}>;
export type ICompanyPaginationBody = z.infer<typeof CompanyPaginationBody>;
export declare const Company_Pagination_ZOD: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodObject<{
        type: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        name: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        type?: number | undefined;
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: number | undefined;
    }, {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        name?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: string | number | undefined;
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
        createdDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        createdAt: z.ZodOptional<z.ZodString>;
        updatedAt: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }, {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        type?: number | undefined;
        createdAt?: number | undefined;
        name?: number | undefined;
        updatedAt?: number | undefined;
        createdDate?: number | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        type?: string | number | undefined;
        createdAt?: string | number | undefined;
        name?: string | number | undefined;
        updatedAt?: string | number | undefined;
        createdDate?: string | number | undefined;
    };
    query: {
        type?: "STUDIO" | "PRODUCER" | undefined;
        createdAt?: string | undefined;
        name?: string | undefined;
        updatedAt?: string | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
        logo?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        createdDate?: string | undefined;
    };
}>;
export type ICompany_Pagination_ZOD = z.infer<typeof Company_Pagination_ZOD>;
export declare const Create_Company_ZOD: z.ZodObject<{
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
}>;
export type ICreate_Company_ZOD = z.infer<typeof Create_Company_ZOD>;
export declare const CompanyCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
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
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
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
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
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
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export declare const Create_Company_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
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
    };
    note?: string | undefined;
}, {
    data: {
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
    };
    note?: string | undefined;
}>;
export type ICreate_Company_ZOD_FORM = z.infer<typeof Create_Company_ZOD_FORM>;
export declare const Add_Company_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Company_ZOD = z.infer<typeof Add_Company_ZOD>;
export declare const CompanyDataToZOD: (data: ICompany) => {
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
