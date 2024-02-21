import FormData from "form-data";
import {axios} from "@/config";
import { newBranchName } from "@/consts";
import { showError } from "@/utils";
import { Errors } from "@/types";
export const commitNewPackage = async (packageJSON) => {
    try {
      const form = new FormData();
  
      form.append("branch", newBranchName);
      form.append("message", "updated package.json");
  
      const blob = Buffer.from(JSON.stringify(packageJSON, null, 2), "utf8");
      form.append("package.json", blob, { filename: "package.json" });
  
      await axios.post(`/src`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          ...form.getHeaders(),
        },
      });
    } catch (e) {
      console.log(e);
      showError(Errors.ERROR_COMMIT)
    }
  };