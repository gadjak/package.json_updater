import { axios } from "@/config";
import { newBranchName } from "@/consts";
import { Errors } from "@/types";
import { showError } from "@/utils";


export const createPullRequest = async (targetBranch: string) => {
  try {
    await axios.post(
      `/pullrequests`,
      {
        title: "Update package.json",
        source: {
          branch: {
            name: newBranchName,
          },
        },
        destination: {
          branch: {
            name: targetBranch,
          },
        },
      },
    );
  } catch (e) {
    showError(Errors.CREATE_PULL_REQUEST);
  }
};
