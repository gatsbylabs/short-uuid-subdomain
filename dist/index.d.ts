import short from "short-uuid";

/**
 * @param id - input uuid
 * @returns shortened uuid that conforms to rfc 1132 subdomain
 */
declare function encode(id: string): string;
/**
 * @param id - shortened uuid that conforms to rfc 1132 subdomain
 * @returns full uuid v4
 */
declare function decode(id: string): short.UUID;

export { decode, encode };
