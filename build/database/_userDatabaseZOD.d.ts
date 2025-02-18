import { z } from "zod";
export declare const UserDatabase_Pagination_ZOD: z.ZodObject<{
    page: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    limit: z.ZodOptional<z.ZodEffects<z.ZodUnion<[z.ZodNumber, z.ZodString]>, number, string | number>>;
    query: z.ZodOptional<z.ZodObject<{
        displayName: z.ZodOptional<z.ZodString>;
        username: z.ZodOptional<z.ZodString>;
        id: z.ZodOptional<z.ZodString>;
        roles: z.ZodOptional<z.ZodArray<z.ZodEnum<("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] & [string, ...string[]]>, "many">>;
    }, "strict", z.ZodTypeAny, {
        id?: string | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }, {
        id?: string | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    }>>;
    strict: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    sort: z.ZodOptional<z.ZodObject<{
        createdAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
        updatedAt: z.ZodOptional<z.ZodEnum<["DESC", "ASC"]>>;
    }, "strip", z.ZodTypeAny, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }, {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    }>>;
    with: z.ZodOptional<z.ZodObject<{}, "strict", z.ZodTypeAny, {}, {}>>;
}, "strict", z.ZodTypeAny, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: number | undefined;
    limit?: number | undefined;
    strict?: boolean | undefined;
    query?: {
        id?: string | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    } | undefined;
    with?: {} | undefined;
}, {
    sort?: {
        createdAt?: "DESC" | "ASC" | undefined;
        updatedAt?: "DESC" | "ASC" | undefined;
    } | undefined;
    page?: string | number | undefined;
    limit?: string | number | undefined;
    strict?: boolean | undefined;
    query?: {
        id?: string | undefined;
        username?: string | undefined;
        displayName?: string | undefined;
        roles?: ("MEMBER" | "PREMIUM" | "MODERATOR" | "ANIME_MODERATOR" | "MANGA_MODERATOR" | "CHARACTER_MODERATOR" | "PERSON_MODERATOR" | "TRACK_MODERATOR" | "COMPANY_MODERATOR" | "ADMINISTRATOR" | "ACTUNIME")[] | undefined;
    } | undefined;
    with?: {} | undefined;
}>;
export type IUserDatabase_Pagination_ZOD = z.infer<typeof UserDatabase_Pagination_ZOD>;
//# sourceMappingURL=_userDatabaseZOD.d.ts.map