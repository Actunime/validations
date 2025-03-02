"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationBody = exports.zodDate = exports.zodNumber = exports.zodBoolean = void 0;
const zod_1 = require("zod");
const zodBoolean = () => zod_1.z
    .union([zod_1.z.boolean(), zod_1.z.literal("true"), zod_1.z.literal("false")])
    .transform((value) => value === true || value === "true");
exports.zodBoolean = zodBoolean;
const zodNumber = () => zod_1.z
    .union([zod_1.z.number(), zod_1.z.string()])
    .transform((value) => typeof value === "string" ? parseInt(value) : value);
exports.zodNumber = zodNumber;
const zodDate = () => zod_1.z
    .union([zod_1.z.date(), zod_1.z.string()])
    .transform((value) => typeof value === "string" ? new Date(value) : value);
exports.zodDate = zodDate;
exports.PaginationBody = zod_1.z.object({
    page: zod_1.z.number(),
    limit: zod_1.z.number(),
    strict: zod_1.z.boolean(),
    sort: zod_1.z.any(),
    query: zod_1.z.any(),
});
//# sourceMappingURL=_util.js.map