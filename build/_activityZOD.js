"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityPaginationBody = exports.ActivitySortBody = exports.ActivityQueryBody = void 0;
const types_1 = require("@actunime/types");
const zod_1 = require("zod");
const _util_1 = require("./_util");
exports.ActivityQueryBody = zod_1.z.object({
    type: zod_1.z.enum(types_1.ActivityTypeArray),
    action: zod_1.z.enum(types_1.ActivityActionArray),
    author: zod_1.z.string().optional(),
    targets: zod_1.z.array(zod_1.z.object({ path: zod_1.z.enum(types_1.TargetPathArray), id: zod_1.z.string() })),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.ActivitySortBody = zod_1.z.object({
    type: zod_1.z.number().refine(check, checkErr),
    action: zod_1.z.number().refine(check, checkErr),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.ActivityPaginationBody = _util_1.PaginationBody.extend({
    sort: exports.ActivitySortBody.partial(),
    query: exports.ActivityQueryBody.partial()
});
//# sourceMappingURL=_activityZOD.js.map