require('module-alias/register')
import { getPackageJSON, createNewBranch, commitNewPackage, createPullRequest } from "@/api";
import { getParams, getUpdatedPackageJSON } from "@/utils";

const main = async () => {
  const { branch, npmPackage } = getParams();
  const packageJSON = await getPackageJSON(branch);
  const updatedPackageJSON = await getUpdatedPackageJSON(
    packageJSON,
    npmPackage
  );
  await createNewBranch(branch);
  await commitNewPackage(updatedPackageJSON);
  await createPullRequest(branch);
  console.log("Success");
};
main();
