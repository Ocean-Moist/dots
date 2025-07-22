"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisjointSet = void 0;
class DisjointSet {
    constructor() {
        this.map = new Map();
    }
    set(tvar, type) {
        this.map.set(tvar, type);
    }
    get(type) {
        if (type.nodeType !== "Var") {
            return type;
        }
        let node = type;
        let parent = this.map.get(node);
        while ((parent === null || parent === void 0 ? void 0 : parent.nodeType) === "Var") {
            const grandparent = this.map.get(parent);
            if (!grandparent) {
                return parent;
            }
            this.map.set(node, grandparent);
            node = parent;
            parent = grandparent;
        }
        return parent !== null && parent !== void 0 ? parent : node;
    }
    contains(tvar) {
        return this.map.has(tvar);
    }
    toMap() {
        return this.map;
    }
}
exports.DisjointSet = DisjointSet;
//# sourceMappingURL=disjointSet.js.map