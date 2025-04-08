import { z } from "zod";
export declare const PatchQueryBody: z.ZodObject<{
    id: z.ZodString;
    ref: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    type: z.ZodEnum<("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] & [string, ...string[]]>;
    status: z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>;
    target: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    targetPath: z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>;
    description: z.ZodString;
    reason: z.ZodString;
    original: z.ZodAny;
    changes: z.ZodAny;
    isChangesUpdated: z.ZodBoolean;
    author: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    moderator: z.ZodObject<{
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
    }, {
        id: string;
    }>;
    createdAt: z.ZodEffects<z.ZodString, string, string>;
    updatedAt: z.ZodEffects<z.ZodString, string, string>;
}, "strip", z.ZodTypeAny, {
    status: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED";
    type: "CREATE" | "UPDATE" | "DELETE" | "RESTORE";
    id: string;
    reason: string;
    author: {
        id: string;
    };
    createdAt: string;
    updatedAt: string;
    ref: {
        id: string;
    };
    target: {
        id: string;
    };
    targetPath: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    description: string;
    isChangesUpdated: boolean;
    moderator: {
        id: string;
    };
    original?: any;
    changes?: any;
}, {
    status: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED";
    type: "CREATE" | "UPDATE" | "DELETE" | "RESTORE";
    id: string;
    reason: string;
    author: {
        id: string;
    };
    createdAt: string;
    updatedAt: string;
    ref: {
        id: string;
    };
    target: {
        id: string;
    };
    targetPath: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report";
    description: string;
    isChangesUpdated: boolean;
    moderator: {
        id: string;
    };
    original?: any;
    changes?: any;
}>;
export declare const PatchSortBody: z.ZodObject<{
    id: z.ZodEffects<z.ZodNumber, number, number>;
    ref: z.ZodObject<{
        id: z.ZodEffects<z.ZodNumber, number, number>;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
    type: z.ZodEffects<z.ZodNumber, number, number>;
    status: z.ZodEffects<z.ZodNumber, number, number>;
    target: z.ZodEffects<z.ZodNumber, number, number>;
    targetPath: z.ZodEffects<z.ZodNumber, number, number>;
    description: z.ZodEffects<z.ZodNumber, number, number>;
    reason: z.ZodEffects<z.ZodNumber, number, number>;
    isChangesUpdated: z.ZodEffects<z.ZodNumber, number, number>;
    author: z.ZodObject<{
        id: z.ZodEffects<z.ZodNumber, number, number>;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
    moderator: z.ZodObject<{
        id: z.ZodEffects<z.ZodNumber, number, number>;
    }, "strip", z.ZodTypeAny, {
        id: number;
    }, {
        id: number;
    }>;
    createdAt: z.ZodEffects<z.ZodNumber, number, number>;
    updatedAt: z.ZodEffects<z.ZodNumber, number, number>;
}, "strip", z.ZodTypeAny, {
    status: number;
    type: number;
    id: number;
    reason: number;
    author: {
        id: number;
    };
    createdAt: number;
    updatedAt: number;
    ref: {
        id: number;
    };
    target: number;
    targetPath: number;
    description: number;
    isChangesUpdated: number;
    moderator: {
        id: number;
    };
}, {
    status: number;
    type: number;
    id: number;
    reason: number;
    author: {
        id: number;
    };
    createdAt: number;
    updatedAt: number;
    ref: {
        id: number;
    };
    target: number;
    targetPath: number;
    description: number;
    isChangesUpdated: number;
    moderator: {
        id: number;
    };
}>;
export declare const PatchPaginationBody: z.ZodObject<z.objectUtil.extendShape<{
    page: z.ZodNumber;
    limit: z.ZodNumber;
    strict: z.ZodBoolean;
    onlyVerified: z.ZodBoolean;
    sort: z.ZodAny;
    query: z.ZodAny;
}, {
    sort: z.ZodObject<{
        id: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        ref: z.ZodOptional<z.ZodObject<{
            id: z.ZodEffects<z.ZodNumber, number, number>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>>;
        type: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        status: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        target: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        targetPath: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        description: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        reason: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        isChangesUpdated: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        author: z.ZodOptional<z.ZodObject<{
            id: z.ZodEffects<z.ZodNumber, number, number>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>>;
        moderator: z.ZodOptional<z.ZodObject<{
            id: z.ZodEffects<z.ZodNumber, number, number>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: number;
        }>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodNumber, number, number>>;
    }, "strip", z.ZodTypeAny, {
        status?: number | undefined;
        type?: number | undefined;
        id?: number | undefined;
        reason?: number | undefined;
        author?: {
            id: number;
        } | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        ref?: {
            id: number;
        } | undefined;
        target?: number | undefined;
        targetPath?: number | undefined;
        description?: number | undefined;
        isChangesUpdated?: number | undefined;
        moderator?: {
            id: number;
        } | undefined;
    }, {
        status?: number | undefined;
        type?: number | undefined;
        id?: number | undefined;
        reason?: number | undefined;
        author?: {
            id: number;
        } | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        ref?: {
            id: number;
        } | undefined;
        target?: number | undefined;
        targetPath?: number | undefined;
        description?: number | undefined;
        isChangesUpdated?: number | undefined;
        moderator?: {
            id: number;
        } | undefined;
    }>;
    query: z.ZodObject<{
        id: z.ZodOptional<z.ZodString>;
        ref: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>>;
        type: z.ZodOptional<z.ZodEnum<("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] & [string, ...string[]]>>;
        status: z.ZodOptional<z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>>;
        target: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>>;
        targetPath: z.ZodOptional<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>>;
        description: z.ZodOptional<z.ZodString>;
        reason: z.ZodOptional<z.ZodString>;
        original: z.ZodOptional<z.ZodAny>;
        changes: z.ZodOptional<z.ZodAny>;
        isChangesUpdated: z.ZodOptional<z.ZodBoolean>;
        author: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>>;
        moderator: z.ZodOptional<z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>>;
        createdAt: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
        updatedAt: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
    }, "strip", z.ZodTypeAny, {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | undefined;
        type?: "CREATE" | "UPDATE" | "DELETE" | "RESTORE" | undefined;
        original?: any;
        id?: string | undefined;
        reason?: string | undefined;
        author?: {
            id: string;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        ref?: {
            id: string;
        } | undefined;
        target?: {
            id: string;
        } | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        description?: string | undefined;
        changes?: any;
        isChangesUpdated?: boolean | undefined;
        moderator?: {
            id: string;
        } | undefined;
    }, {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | undefined;
        type?: "CREATE" | "UPDATE" | "DELETE" | "RESTORE" | undefined;
        original?: any;
        id?: string | undefined;
        reason?: string | undefined;
        author?: {
            id: string;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        ref?: {
            id: string;
        } | undefined;
        target?: {
            id: string;
        } | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        description?: string | undefined;
        changes?: any;
        isChangesUpdated?: boolean | undefined;
        moderator?: {
            id: string;
        } | undefined;
    }>;
}>, "strip", z.ZodTypeAny, {
    sort: {
        status?: number | undefined;
        type?: number | undefined;
        id?: number | undefined;
        reason?: number | undefined;
        author?: {
            id: number;
        } | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        ref?: {
            id: number;
        } | undefined;
        target?: number | undefined;
        targetPath?: number | undefined;
        description?: number | undefined;
        isChangesUpdated?: number | undefined;
        moderator?: {
            id: number;
        } | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | undefined;
        type?: "CREATE" | "UPDATE" | "DELETE" | "RESTORE" | undefined;
        original?: any;
        id?: string | undefined;
        reason?: string | undefined;
        author?: {
            id: string;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        ref?: {
            id: string;
        } | undefined;
        target?: {
            id: string;
        } | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        description?: string | undefined;
        changes?: any;
        isChangesUpdated?: boolean | undefined;
        moderator?: {
            id: string;
        } | undefined;
    };
}, {
    sort: {
        status?: number | undefined;
        type?: number | undefined;
        id?: number | undefined;
        reason?: number | undefined;
        author?: {
            id: number;
        } | undefined;
        createdAt?: number | undefined;
        updatedAt?: number | undefined;
        ref?: {
            id: number;
        } | undefined;
        target?: number | undefined;
        targetPath?: number | undefined;
        description?: number | undefined;
        isChangesUpdated?: number | undefined;
        moderator?: {
            id: number;
        } | undefined;
    };
    page: number;
    limit: number;
    strict: boolean;
    onlyVerified: boolean;
    query: {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | undefined;
        type?: "CREATE" | "UPDATE" | "DELETE" | "RESTORE" | undefined;
        original?: any;
        id?: string | undefined;
        reason?: string | undefined;
        author?: {
            id: string;
        } | undefined;
        createdAt?: string | undefined;
        updatedAt?: string | undefined;
        ref?: {
            id: string;
        } | undefined;
        target?: {
            id: string;
        } | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | undefined;
        description?: string | undefined;
        changes?: any;
        isChangesUpdated?: boolean | undefined;
        moderator?: {
            id: string;
        } | undefined;
    };
}>;
export type IPatchPaginationBody = z.infer<typeof PatchPaginationBody>;
export declare const PatchParamsBody: z.ZodObject<{
    description: z.ZodString;
    reason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    reason: string;
    description: string;
}, {
    reason: string;
    description: string;
}>;
export declare const Patch_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        updaptedAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
        createdAt: z.ZodOptional<z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>>;
    }, "strict", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    }>>;
    query: z.ZodOptional<z.ZodObject<{
        target: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        targetPath: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>, "many">]>>>;
        author: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        status: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodArray<z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>, "many">, z.ZodEnum<("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] & [string, ...string[]]>]>>>;
        actionUser: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        type: z.ZodOptional<z.ZodOptional<z.ZodUnion<[z.ZodEnum<("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] & [string, ...string[]]>, z.ZodArray<z.ZodEnum<("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] & [string, ...string[]]>, "many">]>>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    }, "strict", z.ZodTypeAny, {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        type?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] | undefined;
        actionUser?: string | undefined;
    }, {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        type?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] | undefined;
        actionUser?: string | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{
        author: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        target: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        actions: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
        ref: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, "strict", z.ZodTypeAny, {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    }, {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    }>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        type?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] | undefined;
        actionUser?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updaptedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        status?: "PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED" | ("PENDING" | "PROGRESS" | "ACCEPTED" | "REJECTED")[] | undefined;
        type?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("CREATE" | "UPDATE" | "DELETE" | "RESTORE")[] | undefined;
        author?: string | undefined;
        ref?: string | undefined;
        target?: string | undefined;
        targetPath?: "User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report" | ("User" | "Groupe" | "Manga" | "Anime" | "Person" | "Character" | "Track" | "Company" | "Image" | "Patch" | "Activity" | "Report")[] | undefined;
        actionUser?: string | undefined;
    } | undefined;
    with?: {
        author?: boolean | undefined;
        ref?: boolean | undefined;
        target?: boolean | undefined;
        actions?: boolean | undefined;
    } | undefined;
}>;
export type IPatch_Pagination_ZOD = z.infer<typeof Patch_Pagination_ZOD>;
export declare const Patch_Action_ZOD: z.ZodObject<{
    note: z.ZodString;
    changes: z.ZodOptional<z.ZodAny>;
}, "strip", z.ZodTypeAny, {
    note: string;
    changes?: any;
}, {
    note: string;
    changes?: any;
}>;
export type IPatch_Action_ZOD = z.infer<typeof Patch_Action_ZOD>;
export declare const AddChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    note: z.ZodOptional<z.ZodString>;
    data: z.ZodAny;
}, "strict", z.ZodTypeAny, {
    id: string;
    note?: string | undefined;
    data?: any;
}, {
    id: string;
    note?: string | undefined;
    data?: any;
}>;
export type IAddChangesToPatch_ZOD = z.infer<typeof AddChangesToPatch_ZOD>;
export declare const AcceptChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IAcceptChangesToPatch_ZOD = z.infer<typeof AcceptChangesToPatch_ZOD>;
export declare const DenyChangesToPatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IDenyChangesToPatch_ZOD = z.infer<typeof DenyChangesToPatch_ZOD>;
export declare const DeletePatch_ZOD: z.ZodObject<{
    id: z.ZodString;
    moderatorNote: z.ZodOptional<z.ZodString>;
}, "strict", z.ZodTypeAny, {
    id: string;
    moderatorNote?: string | undefined;
}, {
    id: string;
    moderatorNote?: string | undefined;
}>;
export type IDeletePatch_ZOD = z.infer<typeof DeletePatch_ZOD>;
