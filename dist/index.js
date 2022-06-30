"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule
      ? __defProp(target, "default", { value: mod, enumerable: true })
      : target,
    mod
  )
);
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  decode: () => decode,
  encode: () => encode,
});
module.exports = __toCommonJS(src_exports);
var import_base32_decode = __toESM(require("base32-decode"));
var import_base32_encode = __toESM(require("base32-encode"));
var import_short_uuid = __toESM(require("short-uuid"));
function encode(id) {
  const shortId = (0, import_short_uuid.default)().fromUUID(id);
  let b32 = (0, import_base32_encode.default)(Buffer.from(shortId), "RFC4648");
  b32 = b32.replaceAll("=", "");
  return b32.toLowerCase();
}
function decode(id) {
  const shortId = (0, import_base32_decode.default)(
    id.toUpperCase(),
    "RFC4648"
  );
  const str = Buffer.from(shortId).toString();
  const longId = (0, import_short_uuid.default)().toUUID(str);
  return longId;
}
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    decode,
    encode,
  });
