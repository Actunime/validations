"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeConfig = exports.NextJsConfig = exports.ReactLibraryConfig = exports.BaseConfig = void 0;
console.log("Hello from typescript-config");
var base_json_1 = require("./config/base.json");
Object.defineProperty(exports, "BaseConfig", { enumerable: true, get: function () { return __importDefault(base_json_1).default; } });
var react_library_json_1 = require("./config/react-library.json");
Object.defineProperty(exports, "ReactLibraryConfig", { enumerable: true, get: function () { return __importDefault(react_library_json_1).default; } });
var nextjs_json_1 = require("./config/nextjs.json");
Object.defineProperty(exports, "NextJsConfig", { enumerable: true, get: function () { return __importDefault(nextjs_json_1).default; } });
var node_json_1 = require("./config/node.json");
Object.defineProperty(exports, "NodeConfig", { enumerable: true, get: function () { return __importDefault(node_json_1).default; } });
//# sourceMappingURL=index.js.map