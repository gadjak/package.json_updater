import { getPackageLatestVersion } from "../src/api/getPackageLatestVersion";

describe("Is npm package exist", () => {
  it("should return string value", async () => {
    expect(typeof (await getPackageLatestVersion("express"))).toBe('string');
  });

  it("should return false", async () => {
    expect(await getPackageLatestVersion("exprsdfsess")).toBe(null);
  });
});
