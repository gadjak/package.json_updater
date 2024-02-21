import { axios } from "@/config";
import { Errors } from "@/types";
import { showError } from "@/utils";

export const getPackageJSON = async (branch: string) => {
    try {
      const res = await axios.get(`/src/${branch}/package.json`, {
      });
      return res.data;
    } catch (e) {
      showError(Errors.JSON);
    }
  };
  