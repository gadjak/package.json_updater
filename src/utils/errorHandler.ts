import { errors } from "@/consts";
import { Errors } from "@/types";
  
 export const showError = (type: Errors) => {
    console.log(errors[type]);
    process.exit(1);
  };