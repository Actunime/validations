import { IManga } from "@actunime/types";
import { z } from "zod";
export declare const Manga_Pagination_ZOD: z.ZodObject<{
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
        allowUnverified: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }, {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        groupe: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        parent: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        source: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        staffs: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        companys: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        characters: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        groupe?: boolean | undefined;
        parent?: boolean | undefined;
        source?: boolean | undefined;
        staffs?: boolean | undefined;
        companys?: boolean | undefined;
        characters?: boolean | undefined;
    }, {
        groupe?: boolean | undefined;
        parent?: boolean | undefined;
        source?: boolean | undefined;
        staffs?: boolean | undefined;
        companys?: boolean | undefined;
        characters?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {
        groupe?: boolean | undefined;
        parent?: boolean | undefined;
        source?: boolean | undefined;
        staffs?: boolean | undefined;
        companys?: boolean | undefined;
        characters?: boolean | undefined;
    } | undefined;
}, {
    sort?: {
        updaptedAt?: "DESC" | "ASC" | undefined;
        createdAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        name?: string | undefined;
        allowUnverified?: boolean | undefined;
    } | undefined;
    with?: {
        groupe?: boolean | undefined;
        parent?: boolean | undefined;
        source?: boolean | undefined;
        staffs?: boolean | undefined;
        companys?: boolean | undefined;
        characters?: boolean | undefined;
    } | undefined;
}>;
export type IManga_Pagination_ZOD = z.infer<typeof Manga_Pagination_ZOD>;
export declare const Add_Manga_ZOD: z.ZodObject<{
    id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
    sourceLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>>>;
}, "strip", z.ZodTypeAny, {
    id?: string | undefined;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
}, {
    id?: string | undefined;
    parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
    sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
}>;
export type IAdd_Manga_ZOD = z.infer<typeof Add_Manga_ZOD>;
export declare const Create_Manga_ZOD: z.ZodObject<{
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
        id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        sourceLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    }, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    }>>;
    source: z.ZodOptional<z.ZodObject<{
        id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
        sourceLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>>>;
    }, "strip", z.ZodTypeAny, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    }, {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    }>>;
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
    banner: z.ZodOptional<z.ZodObject<{
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
    synopsis: z.ZodOptional<z.ZodString>;
    format: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>;
    vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
    genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
    status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
    chapters: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
    }>>;
    volumes: z.ZodOptional<z.ZodObject<{
        airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        nextAiringDate: z.ZodOptional<z.ZodString>;
        total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    }, "strip", z.ZodTypeAny, {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
    }, {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
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
    }>, "many">>;
    staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
            isGroupe: z.ZodOptional<z.ZodBoolean>;
            name: z.ZodObject<{
                first: z.ZodString;
                last: z.ZodOptional<z.ZodString>;
                alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    content: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    content: string;
                }, {
                    content: string;
                }>, "many">>;
            }, "strip", z.ZodTypeAny, {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            }, {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            }>;
            birthDate: z.ZodOptional<z.ZodString>;
            deathDate: z.ZodOptional<z.ZodString>;
            bio: z.ZodOptional<z.ZodString>;
            avatar: z.ZodOptional<z.ZodObject<{
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
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }>, {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
        }, {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
            actors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                id: z.ZodOptional<z.ZodString>;
                newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    isGroupe: z.ZodOptional<z.ZodBoolean>;
                    name: z.ZodObject<{
                        first: z.ZodString;
                        last: z.ZodOptional<z.ZodString>;
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    }, {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
                    avatar: z.ZodOptional<z.ZodObject<{
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: string | number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: string | number | undefined;
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
                newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                    isGroupe: z.ZodOptional<z.ZodBoolean>;
                    name: z.ZodObject<{
                        first: z.ZodString;
                        last: z.ZodOptional<z.ZodString>;
                        alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            content: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            content: string;
                        }, {
                            content: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    }, {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    }>;
                    birthDate: z.ZodOptional<z.ZodString>;
                    deathDate: z.ZodOptional<z.ZodString>;
                    bio: z.ZodOptional<z.ZodString>;
                    avatar: z.ZodOptional<z.ZodObject<{
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }>, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                }, {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
        }, {
            type: "OPENING" | "ENDING" | "OST" | "INSERT";
            name: {
                default: string;
                native?: string | undefined;
            };
            cover?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
        } | undefined;
    }>, "many">>;
}, "strict", z.ZodTypeAny, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean;
    explicit: boolean;
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    banner?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    source?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: number | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    vf?: boolean | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    chapters?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
    } | undefined;
    volumes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
        } | undefined;
    }[] | undefined;
}, {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean | "true" | "false";
    explicit: boolean | "true" | "false";
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    banner?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    source?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: string | number | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    vf?: boolean | "true" | "false" | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    chapters?: {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
    } | undefined;
    volumes?: {
        airing?: string | number | undefined;
        nextAiringDate?: string | undefined;
        total?: string | number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
        } | undefined;
    }[] | undefined;
}>;
export type ICreate_Manga_ZOD = z.infer<typeof Create_Manga_ZOD>;
export declare const Create_Manga_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
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
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
            sourceLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        }>>;
        source: z.ZodOptional<z.ZodObject<{
            id: z.ZodOptional<z.ZodOptional<z.ZodString>>;
            parentLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM")[] & [string, ...string[]]>>>;
            sourceLabel: z.ZodOptional<z.ZodOptional<z.ZodEnum<("ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME")[] & [string, ...string[]]>>>;
        }, "strip", z.ZodTypeAny, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        }, {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        }>>;
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
        banner: z.ZodOptional<z.ZodObject<{
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
        synopsis: z.ZodOptional<z.ZodString>;
        format: z.ZodEnum<("MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER")[] & [string, ...string[]]>;
        vf: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodBoolean, z.ZodLiteral<"true">, z.ZodLiteral<"false">]>, boolean, boolean | "true" | "false">>;
        genres: z.ZodOptional<z.ZodArray<z.ZodEnum<("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] & [string, ...string[]]>, "many">>;
        status: z.ZodEnum<("AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any")[] & [string, ...string[]]>;
        chapters: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
        }>>;
        volumes: z.ZodOptional<z.ZodObject<{
            airing: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
            nextAiringDate: z.ZodOptional<z.ZodString>;
            total: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
        }, "strip", z.ZodTypeAny, {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
        }, {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
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
        }>, "many">>;
        staffs: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodOptional<z.ZodString>;
            newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                isGroupe: z.ZodOptional<z.ZodBoolean>;
                name: z.ZodObject<{
                    first: z.ZodString;
                    last: z.ZodOptional<z.ZodString>;
                    alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                        content: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        content: string;
                    }, {
                        content: string;
                    }>, "many">>;
                }, "strip", z.ZodTypeAny, {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                }, {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                }>;
                birthDate: z.ZodOptional<z.ZodString>;
                deathDate: z.ZodOptional<z.ZodString>;
                bio: z.ZodOptional<z.ZodString>;
                avatar: z.ZodOptional<z.ZodObject<{
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
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }>, {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
            }, {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                actors: z.ZodOptional<z.ZodArray<z.ZodObject<{
                    id: z.ZodOptional<z.ZodString>;
                    newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                        isGroupe: z.ZodOptional<z.ZodBoolean>;
                        name: z.ZodObject<{
                            first: z.ZodString;
                            last: z.ZodOptional<z.ZodString>;
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        }, {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
                        avatar: z.ZodOptional<z.ZodObject<{
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: string | number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: string | number | undefined;
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
                    newPerson: z.ZodOptional<z.ZodEffects<z.ZodObject<{
                        isGroupe: z.ZodOptional<z.ZodBoolean>;
                        name: z.ZodObject<{
                            first: z.ZodString;
                            last: z.ZodOptional<z.ZodString>;
                            alias: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                content: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                content: string;
                            }, {
                                content: string;
                            }>, "many">>;
                        }, "strip", z.ZodTypeAny, {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        }, {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        }>;
                        birthDate: z.ZodOptional<z.ZodString>;
                        deathDate: z.ZodOptional<z.ZodString>;
                        bio: z.ZodOptional<z.ZodString>;
                        avatar: z.ZodOptional<z.ZodObject<{
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }>, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    }, {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            }, {
                type: "OPENING" | "ENDING" | "OST" | "INSERT";
                name: {
                    default: string;
                    native?: string | undefined;
                };
                cover?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            } | undefined;
        }>, "many">>;
    }, "strict", z.ZodTypeAny, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean;
        explicit: boolean;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        source?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: number | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            } | undefined;
        }[] | undefined;
    }, {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        source?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: string | number | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            } | undefined;
        }[] | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean;
        explicit: boolean;
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        source?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: number | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        vf?: boolean | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        chapters?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
        } | undefined;
        volumes?: {
            airing?: number | undefined;
            nextAiringDate?: string | undefined;
            total?: number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            } | undefined;
        }[] | undefined;
    };
    note?: string | undefined;
}, {
    data: {
        status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
        groupe: {
            id?: string | undefined;
            newGroupe?: {
                name: string;
            } | undefined;
        };
        title: {
            default: string;
            alias?: {
                content: string;
            }[] | undefined;
        };
        format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
        adult: boolean | "true" | "false";
        explicit: boolean | "true" | "false";
        date?: {
            start?: string | undefined;
            end?: string | undefined;
        } | undefined;
        cover?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        links?: {
            value: string;
            name: string;
        }[] | undefined;
        parent?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        source?: {
            id?: string | undefined;
            parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
            sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
        } | undefined;
        staffs?: {
            id?: string | undefined;
            newPerson?: {
                name: {
                    first: string;
                    alias?: {
                        content: string;
                    }[] | undefined;
                    last?: string | undefined;
                };
                isGroupe?: boolean | undefined;
                birthDate?: string | undefined;
                deathDate?: string | undefined;
                bio?: string | undefined;
                avatar?: {
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                actors?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                age?: string | number | undefined;
            } | undefined;
        }[] | undefined;
        synopsis?: string | undefined;
        vf?: boolean | "true" | "false" | undefined;
        genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
        chapters?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
        } | undefined;
        volumes?: {
            airing?: string | number | undefined;
            nextAiringDate?: string | undefined;
            total?: string | number | undefined;
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
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    id?: string | undefined;
                    newImage?: {
                        value: string;
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                    } | undefined;
                } | undefined;
                links?: {
                    value: string;
                    name: string;
                }[] | undefined;
                artists?: {
                    id?: string | undefined;
                    newPerson?: {
                        name: {
                            first: string;
                            alias?: {
                                content: string;
                            }[] | undefined;
                            last?: string | undefined;
                        };
                        isGroupe?: boolean | undefined;
                        birthDate?: string | undefined;
                        deathDate?: string | undefined;
                        bio?: string | undefined;
                        avatar?: {
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            id?: string | undefined;
                            newImage?: {
                                value: string;
                                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                            } | undefined;
                        } | undefined;
                        links?: {
                            value: string;
                            name: string;
                        }[] | undefined;
                    } | undefined;
                    role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
                }[] | undefined;
                pubDate?: string | undefined;
            } | undefined;
        }[] | undefined;
    };
    note?: string | undefined;
}>;
export type ICreate_Manga_ZOD_FORM = z.infer<typeof Create_Manga_ZOD_FORM>;
export declare const MangaDataToZOD: (data: IManga) => {
    status: "AIRING" | "PAUSED" | "ENDED" | "STOPPED" | "POSTONED" | "SOON" | "any";
    groupe: {
        id?: string | undefined;
        newGroupe?: {
            name: string;
        } | undefined;
    };
    title: {
        default: string;
        alias?: {
            content: string;
        }[] | undefined;
    };
    format: "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "WEB_LOVEL" | "GRAPHIC_NOVEL" | "DOUJINSHI" | "ONE_SHOT" | "OTHER";
    adult: boolean;
    explicit: boolean;
    date?: {
        start?: string | undefined;
        end?: string | undefined;
    } | undefined;
    cover?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    banner?: {
        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        id?: string | undefined;
        newImage?: {
            value: string;
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
        } | undefined;
    } | undefined;
    links?: {
        value: string;
        name: string;
    }[] | undefined;
    parent?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    source?: {
        id?: string | undefined;
        parentLabel?: "SEQUEL" | "SPIN_OFF" | "ALTERNATIVE" | "REBOOT" | "FILM" | undefined;
        sourceLabel?: "ORIGINAL" | "MANGA" | "MANHWA" | "MANHUA" | "LIGHT_NOVEL" | "VISUAL_NOVEL" | "WEB_NOVEL" | "GAME" | "NOVEL" | "ANIME" | undefined;
    } | undefined;
    staffs?: {
        id?: string | undefined;
        newPerson?: {
            name: {
                first: string;
                alias?: {
                    content: string;
                }[] | undefined;
                last?: string | undefined;
            };
            isGroupe?: boolean | undefined;
            birthDate?: string | undefined;
            deathDate?: string | undefined;
            bio?: string | undefined;
            avatar?: {
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            actors?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            age?: number | undefined;
        } | undefined;
    }[] | undefined;
    synopsis?: string | undefined;
    vf?: boolean | undefined;
    genres?: ("ACTION" | "AVENTURE" | "COMEDIE" | "DRAME" | "FANTAISIE" | "FANTASTIQUE" | "HORREUR" | "ROMANCE" | "SCI_FI" | "SPORTS" | "THRILLER" | "MECHA" | "MYSTERE" | "PSYCHOLOGIQUE" | "ISEKAI" | "HAREM" | "REVERSE_HAREM" | "ECCHI" | "SLICE_OF_LIFE" | "YAOI" | "YURI" | "SHOUNEN" | "SEINEN" | "SHOJO" | "JOSEI" | "KODOMOMUKE")[] | undefined;
    chapters?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
    } | undefined;
    volumes?: {
        airing?: number | undefined;
        nextAiringDate?: string | undefined;
        total?: number | undefined;
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
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                id?: string | undefined;
                newImage?: {
                    value: string;
                    label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                } | undefined;
            } | undefined;
            links?: {
                value: string;
                name: string;
            }[] | undefined;
            artists?: {
                id?: string | undefined;
                newPerson?: {
                    name: {
                        first: string;
                        alias?: {
                            content: string;
                        }[] | undefined;
                        last?: string | undefined;
                    };
                    isGroupe?: boolean | undefined;
                    birthDate?: string | undefined;
                    deathDate?: string | undefined;
                    bio?: string | undefined;
                    avatar?: {
                        label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        id?: string | undefined;
                        newImage?: {
                            value: string;
                            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
                        } | undefined;
                    } | undefined;
                    links?: {
                        value: string;
                        name: string;
                    }[] | undefined;
                } | undefined;
                role?: "DOUBLAGE_SEIYU" | "AUTEUR" | "EDITEUR" | "PRODUCTEUR" | "REALISATEUR" | "REALISATEUR_EPISODES" | "REALISATEUR_MISEENPAGE" | "DIRECTEUR_ARTISTIQUE_CINEMATROGRAPHIQUE" | "DIRECTEUR_ANIMATION" | "CONCEPTEUR" | "ANIMATEUR_PRINCIPAL" | "ANIMATEUR_INTERMEDIAIRE" | "COLORISTES" | "DIRECTEUR_ENREGISTREMENT" | "SCENARISTE" | "ANIMATEUR_3D" | "METTEUR_EN_SCENE" | "SUPERVISEUR" | "MONTEUR" | "RESPONSABLE_DROITS" | "PRODUCTEUR_MUSIQUE" | "RESPONSABLE_MARKETING" | "DIFFUSEUR" | "STORYBOARDER" | "ARTISTE_VFX" | "INGENIEUR_SON" | "DIRECTEUR_DOUBLAGE" | "TRADUCTEUR" | "MANGAKA" | "CHARACTER_DESIGNER" | "DESSINATEUR_DECORS" | "REALISATEUR_MISE_EN_PAGE" | "COMPOSITEUR" | "PAROLIER" | "ARRANGEUR" | "MUSICIEN" | "CHANTEUR_EUSE" | "CHEF_ORCHESTRE" | "PRODUCTEUR_MUSICAL" | "DESIGNER_SONORE" | "MIXEUR" | undefined;
            }[] | undefined;
            pubDate?: string | undefined;
        } | undefined;
    }[] | undefined;
} | undefined;
//# sourceMappingURL=_mangaZOD.d.ts.map