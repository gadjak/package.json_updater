
import { getPackageLatestVersion, isPackageExist } from "@/api";
import { showError } from "./errorHandler";
import { Errors } from "@/types";

export const getUpdatedPackageJSON = async (packageJSON, { name, version }) => {
    const isExist = await isPackageExist(packageJSON, { name, version });
    if (!isExist) {
      showError(Errors.PACKAGE_NOT_EXIST);
    }
    const newPackageJSON = {
      ...packageJSON,
    };
    newPackageJSON.dependencies[name] =
      version || (await getPackageLatestVersion(name));
    return newPackageJSON;
  };
  