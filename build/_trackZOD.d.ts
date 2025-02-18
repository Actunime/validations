import { ITrack } from "@actunime/types";
import { z } from "zod";
export declare const Track_Pagination_ZOD: z.ZodObject<{
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
        artists: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        cover: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        cover?: boolean | undefined;
        artists?: boolean | undefined;
    }, {
        cover?: boolean | undefined;
        artists?: boolean | undefined;
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
        cover?: boolean | undefined;
        artists?: boolean | undefined;
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
        cover?: boolean | undefined;
        artists?: boolean | undefined;
    } | undefined;
}>;
export type ITrack_Pagination_ZOD = z.infer<typeof Track_Pagination_ZOD>;
export declare const Create_Track_ZOD: z.ZodObject<{
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
}>;
export type ICreate_Track_ZOD = z.infer<typeof Create_Track_ZOD>;
export declare const Create_Track_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
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
    };
    note?: string | undefined;
}, {
    data: {
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
    };
    note?: string | undefined;
}>;
export type ICreate_Track_ZOD_FORM = z.infer<typeof Create_Track_ZOD_FORM>;
export declare const Add_Track_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Track_ZOD = z.infer<typeof Add_Track_ZOD>;
export declare const TrackDataToZOD: (data: ITrack) => {
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
//# sourceMappingURL=_trackZOD.d.ts.map