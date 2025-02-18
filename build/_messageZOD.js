"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Create_Message_ZOD = void 0;
const zod_1 = require("zod");
exports.Create_Message_ZOD = zod_1.z.object({
    content: zod_1.z.string(),
    replyTo: zod_1.z.optional(zod_1.z.string()),
});
