
import { axios } from "@/config";
import { newBranchName } from "@/consts";
import { Errors } from "@/types";
import { showError } from "@/utils";

export const createNewBranch = async (branch: string) => {
    try {
      await axios.post(
        `/refs/branches`,
        {
          name: newBranchName,
          target: {
            hash: branch,
          },
        },
      );
    } catch (e) {
      showError(Errors.CREATE_BRANCH);
    }
  };