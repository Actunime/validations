import { z } from "zod";
export declare const Inscription_Zod_Schema: z.ZodObject<{
    account: z.ZodObject<{
        email: z.ZodString;
        password: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        email: string;
        password: string;
    }, {
        email: string;
        password: string;
    }>;
    user: z.ZodObject<{
        username: z.ZodEffects<z.ZodString, string, string>;
        displayName: z.ZodEffects<z.ZodString, string, string>;
        bio: z.ZodOptional<z.ZodEffects<z.ZodString, string, string>>;
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
    }, "strip", z.ZodTypeAny, {
        username: string;
        displayName: string;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
    }, {
        username: string;
        displayName: string;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
    }>;
    captcha: z.ZodString;
}, "strip", z.ZodTypeAny, {
    captcha: string;
    account: {
        email: string;
        password: string;
    };
    user: {
        username: string;
        displayName: string;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
    };
}, {
    captcha: string;
    account: {
        email: string;
        password: string;
    };
    user: {
        username: string;
        displayName: string;
        banner?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
        bio?: string | undefined;
        avatar?: {
            label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            id?: string | undefined;
            newImage?: {
                value: string;
                label?: "COVER" | "BANNER" | "AVATAR" | "LOGO" | undefined;
            } | undefined;
        } | undefined;
    };
}>;
export type IInscription_Zod_Schema = z.infer<typeof Inscription_Zod_Schema>;
//# sourceMappingURL=_inscriptionZOD.d.ts.map