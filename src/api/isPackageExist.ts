import axios from "axios";

export const isPackageExist = async (packageJSON, { name, version } : { name: string, version?: string }) => {
    if (packageJSON.dependencies[name]) {
      return true;
    }
    try {
      const queryVersion = version ? `/${version}` : "";
      const res = await axios.head(
        `https://registry.npmjs.org/${name}` + queryVersion
      );
      return res.status === 200;
    } catch (e) {
      return false;
    }
  };
  