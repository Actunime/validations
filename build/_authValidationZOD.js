"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth_Validation_ZOD = void 0;
const zod_1 = require("zod");
exports.Auth_Validation_ZOD = zod_1.z.object({
    email: zod_1.z
        .string({ required_error: "Veuillez renseigner votre email" })
        .email({ message: "Email invalide" }),
    code: zod_1.z.string({ required_error: "Veuillez renseigner le code" }),
});
//# sourceMappingURL=_authValidationZOD.js.map