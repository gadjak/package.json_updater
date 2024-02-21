import { isPackageExist } from "../src/api/isPackageExist";

describe("Is npm package exist", () => {
  it("should return true", async () => {
    expect(
      await isPackageExist({ dependencies: {} }, { name: "express" })
    ).toBe(true);
  });

  it("should return true", async () => {
    expect(
      await isPackageExist(
        { dependencies: {} },
        { name: "express", version: "3.0.0" }
      )
    ).toBe(true);
  });

  it("should return false", async () => {
    expect(
      await isPackageExist(
        { dependencies: {} },
        { name: "express", version: "322.0.0" }
      )
    ).toBe(false);
  });

  it("should return true", async () => {
    expect(
      await isPackageExist(
        { dependencies: { express: "3.0.0" } },
        { name: "express" }
      )
    ).toBe(true);
  });
});
