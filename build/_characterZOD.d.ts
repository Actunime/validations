import { ICharacter } from "@actunime/types";
import { z } from "zod";
export declare const Character_Pagination_ZOD: z.ZodObject<{
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
        actors: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        avatar: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        avatar?: boolean | undefined;
        actors?: boolean | undefined;
    }, {
        avatar?: boolean | undefined;
        actors?: boolean | undefined;
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
        avatar?: boolean | undefined;
        actors?: boolean | undefined;
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
        avatar?: boolean | undefined;
        actors?: boolean | undefined;
    } | undefined;
}>;
export type ICharacter_Pagination_ZOD = z.infer<typeof Character_Pagination_ZOD>;
export declare const Character_Name_ZOD: z.ZodObject<{
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
export declare const Create_Character_ZOD: z.ZodObject<{
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
}>;
export type ICreate_Character_ZOD = z.infer<typeof Create_Character_ZOD>;
export declare const Create_Character_ZOD_FORM: z.ZodObject<{
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
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
    };
    note?: string | undefined;
}>;
export type ICreate_Character_ZOD_FORM = z.infer<typeof Create_Character_ZOD_FORM>;
export declare const Add_Character_ZOD: z.ZodObject<{
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
}>;
export type IAdd_Character_ZOD = z.infer<typeof Add_Character_ZOD>;
export declare const CharacterDataToZOD: (data: ICharacter) => {
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
//# sourceMappingURL=_characterZOD.d.ts.map