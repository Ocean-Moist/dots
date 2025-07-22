"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoWorkspaceContainsError = void 0;
class NoWorkspaceContainsError extends Error {
    constructor(uri) {
        super(`No Elm workspace contains ${uri.fsPath}`);
    }
}
exports.NoWorkspaceContainsError = NoWorkspaceContainsError;
//# sourceMappingURL=noWorkspaceContainsError.js.map