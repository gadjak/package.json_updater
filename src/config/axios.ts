import nativeAxios from "axios";
import config from "@/../config.json";
import { getParams } from "@/utils";
const { apiKey, workspace } = config;
const { repo } = getParams();

export const axios = nativeAxios.create({
  baseURL: `https://api.bitbucket.org/2.0/repositories/${workspace}/${repo}`,
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
});
