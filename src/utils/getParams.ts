import { Errors } from "@/types";
import { showError } from "./errorHandler";
import config from '@/../config.json'
/*
b - branch
p - package
r - repo
*/
export const getParams = () => {
    const b = process.argv.indexOf("-b");
    const branch = b > -1 ? process.argv[b + 1] : "master";
  
    const p = process.argv.indexOf("-p");
    const npmPackage = p > -1 ? process.argv[p + 1] : null;
    if (!npmPackage) {
      showError(Errors.PACKAGE);
    }
    const [name, version] = npmPackage.split("@");

    const r = process.argv.indexOf("-r");
    const repo = r > -1 ? process.argv[r + 1] : config.repo;
    if(!repo) {
      showError(Errors.REPO);
    }

    return {
      branch,
      npmPackage: {
        name,
        version,
      },
      repo
    };
  };