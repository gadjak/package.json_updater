import axios from "axios";

export const getPackageLatestVersion = async (name) => {
  try {
    const response = await axios.get(
      `https://registry.npmjs.org/${name}/latest`
    );
    const latestVersion = response.data.version;
    return latestVersion;
  } catch {
    return null;
  }
};
