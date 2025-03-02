import { z } from "zod";
import { IPerson } from "@actunime/types";
export declare const PersonName_validation: z.ZodObject<{
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
export declare const Base_Create_Person_ZOD: z.ZodObject<{
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
}>;
export declare const Create_Person_ZOD: z.ZodObject<{
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
}>;
export declare const Partial_Create_Person_ZOD: z.ZodObject<{
    isGroupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodObject<{
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
    }>>;
    birthDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    deathDate: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    bio: z.ZodOptional<z.ZodOptional<z.ZodString>>;
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
    }>>>;
    links: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
        name: z.ZodString;
        value: z.ZodEffects<z.ZodString, string, string>;
    }, "strip", z.ZodTypeAny, {
        value: string;
        name: string;
    }, {
        value: string;
        name: string;
    }>, "many">>>;
}, "strict", z.ZodTypeAny, {
    name?: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    } | undefined;
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
    name?: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    } | undefined;
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
}>;
export type ICreate_Person_ZOD = z.infer<typeof Create_Person_ZOD>;
export declare const PersonCreateBody: z.ZodObject<z.objectUtil.extendShape<{
    description: z.ZodOptional<z.ZodString>;
    reason: z.ZodOptional<z.ZodString>;
}, {
    data: z.ZodObject<{
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
    }>;
}>, "strip", z.ZodTypeAny, {
    data: {
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
    };
    description?: string | undefined;
    reason?: string | undefined;
}, {
    data: {
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
    };
    description?: string | undefined;
    reason?: string | undefined;
}>;
export declare const Create_Person_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
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
    };
    note?: string | undefined;
}, {
    data: {
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
    };
    note?: string | undefined;
}>;
export type ICreate_Person_ZOD_FORM = z.infer<typeof Create_Person_ZOD_FORM>;
export declare const PersonQueryBody: z.ZodObject<{
    isGroupe: z.ZodBoolean;
    name: z.ZodObject<{
        default: z.ZodOptional<z.ZodString>;
        alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
            content: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            content: string;
        }, {
            content: string;
        }>, "many">>>;
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
    birthDate: z.ZodString;
    deathDate: z.ZodString;
    avatar: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }, {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    }>;
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
    createdAt: string;
    name: {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    };
    updatedAt: string;
    isGroupe: boolean;
    birthDate: string;
    deathDate: string;
    avatar: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
}, {
    createdAt: string;
    name: {
        default?: string | undefined;
        alias?: {
            content: string;
        }[] | undefined;
    };
    updatedAt: string;
    isGroupe: boolean;
    birthDate: string;
    deathDate: string;
    avatar: {
        id?: string | undefined;
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
    };
    links: {
        value?: string | undefined;
        name?: string | undefined;
    };
}>;
export declare const PersonSortBody: z.ZodObject<{
    isGroupe: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    birthDate: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    deathDate: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    createdAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
    updatedAt: z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>;
}, "strip", z.ZodTypeAny, {
    createdAt: number;
    updatedAt: number;
    isGroupe: number;
    birthDate: number;
    deathDate: number;
}, {
    createdAt: string | number;
    updatedAt: string | number;
    isGroupe: string | number;
    birthDate: string | number;
    deathDate: string | number;
}>;
export declare const PersonPaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        deathDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        isGroupe?: number | undefined;
        birthDate?: number | undefined;
        deathDate?: number | undefined;
    }, {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        isGroupe?: string | number | undefined;
        birthDate?: string | number | undefined;
        deathDate?: string | number | undefined;
    }>;
    query: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>>;
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
        birthDate: z.ZodOptional<z.ZodString>;
        deathDate: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
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
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    }, {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        isGroupe?: number | undefined;
        birthDate?: number | undefined;
        deathDate?: number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        isGroupe?: string | number | undefined;
        birthDate?: string | number | undefined;
        deathDate?: string | number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    };
}>;
export declare const Person_Pagination_ZOD: z.ZodObject<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    sort: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        birthDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        deathDate: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        isGroupe?: number | undefined;
        birthDate?: number | undefined;
        deathDate?: number | undefined;
    }, {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        isGroupe?: string | number | undefined;
        birthDate?: string | number | undefined;
        deathDate?: string | number | undefined;
    }>;
    query: z.ZodObject<{
        isGroupe: z.ZodOptional<z.ZodBoolean>;
        name: z.ZodOptional<z.ZodObject<{
            default: z.ZodOptional<z.ZodString>;
            alias: z.ZodOptional<z.ZodOptional<z.ZodArray<z.ZodObject<{
                content: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                content: string;
            }, {
                content: string;
            }>, "many">>>;
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
        birthDate: z.ZodOptional<z.ZodString>;
        deathDate: z.ZodOptional<z.ZodString>;
        avatar: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            label: z.ZodOptional<z.ZodEnum<("COVER" | "BANNER" | "AVATAR" | "LOGO")[] & [string, ...string[]]>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }, {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        }>>;
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
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    }, {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        isGroupe?: number | undefined;
        birthDate?: number | undefined;
        deathDate?: number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    };
}, {
    page: number;
    limit: number;
    strict: boolean;
    sort: {
        createdAt?: string | number | undefined;
        updatedAt?: string | number | undefined;
        isGroupe?: string | number | undefined;
        birthDate?: string | number | undefined;
        deathDate?: string | number | undefined;
    };
    query: {
        createdAt?: string | undefined;
        name?: {
            default?: string | undefined;
            alias?: {
                content: string;
            }[] | undefined;
        } | undefined;
        updatedAt?: string | undefined;
        isGroupe?: boolean | undefined;
        birthDate?: string | undefined;
        deathDate?: string | undefined;
        avatar?: {
            id?: string | undefined;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
        links?: {
            value?: string | undefined;
            name?: string | undefined;
        } | undefined;
    };
}>;
export type IPerson_Pagination_ZOD = z.infer<typeof Person_Pagination_ZOD>;
export declare const Add_Person_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Person_ZOD = z.infer<typeof Add_Person_ZOD>;
export declare const PersonBody: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
export declare const PersonDataToZOD: (data: IPerson) => {
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
