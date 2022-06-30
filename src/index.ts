import base32Decode from "base32-decode";
import base32encode from "base32-encode";
import short from "short-uuid";

/**
 * @param id - input uuid
 * @returns shortened uuid that conforms to rfc 1132 subdomain
 */
export function encode(id: string) {
  const shortId = short().fromUUID(id);
  let b32 = base32encode(Buffer.from(shortId), "RFC4648");
  b32 = b32.replaceAll("=", "");
  return b32.toLowerCase();
}

/**
 * @param id - shortened uuid that conforms to rfc 1132 subdomain
 * @returns full uuid v4
 */
export function decode(id: string) {
  const shortId = base32Decode(id.toUpperCase(), "RFC4648");
  const str = Buffer.from(shortId).toString();
  const longId = short().toUUID(str);
  return longId;
}
