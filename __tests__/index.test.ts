import { v4 as uuid } from "uuid";

import * as SubdomainUUID from "../src/index";

describe("Base 32 Short", () => {
  it.each(
    Array(100)
      .fill(null)
      .map(() => [uuid()])
  )("encode / decode %s", (id) => {
    const res = SubdomainUUID.encode(id);
    const backagain = SubdomainUUID.decode(res);
    expect(id).toBe(backagain);
    expect(res.length).toBe(36);
  });
});
