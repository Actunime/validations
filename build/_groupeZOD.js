"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupeDataToZOD = exports.GroupeAddBody = exports.GroupeCreateBody = exports.GroupeBody = exports.GroupePaginationBody = exports.GroupeSortBody = exports.GroupeQueryBody = void 0;
const zod_1 = require("zod");
const _util_1 = require("./_util");
const _patchZOD_1 = require("./_patchZOD");
const _media_1 = require("./_media");
exports.GroupeQueryBody = zod_1.z.object({
    name: _media_1.MediaTitleBody.partial(),
});
const check = (v) => [-1, 1].includes(v);
const checkErr = "le sort doit être soit -1 ou 1";
exports.GroupeSortBody = zod_1.z.object({
    name: zod_1.z.number().refine(check, checkErr),
    createdAt: zod_1.z.number().refine(check, checkErr),
    updatedAt: zod_1.z.number().refine(check, checkErr),
});
exports.GroupePaginationBody = _util_1.PaginationBody.extend({
    sort: exports.GroupeSortBody.partial(),
    query: exports.GroupeQueryBody.partial()
});
exports.GroupeBody = zod_1.z.object({
    name: _media_1.MediaTitleBody,
});
exports.GroupeCreateBody = _patchZOD_1.PatchParamsBody.partial().extend({
    data: exports.GroupeBody
});
exports.GroupeAddBody = zod_1.z.object({
    id: zod_1.z.optional(zod_1.z.string()),
    newGroupe: zod_1.z.optional(exports.GroupeBody),
});
const GroupeDataToZOD = (data) => {
    if (!data)
        return;
    const toZOD = {
        name: data.name,
    };
    const safeParse = exports.GroupeBody.safeParse(toZOD);
    if (safeParse.success)
        return safeParse.data;
    return toZOD;
};
exports.GroupeDataToZOD = GroupeDataToZOD;
//# sourceMappingURL=_groupeZOD.js.map