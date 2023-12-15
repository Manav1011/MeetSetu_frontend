import { header } from "../utils/constant";
import { APIMiddleware } from "../helpers/GlobalFunctions";
import axios from "axios";
import io from "socket.io-client";

const useSignup = () => {
  const axiosInstance = axios.create();
  let endpoint = "/stakeholder/signup/";
  let method = "post";
  let headers = header;
  const handleSignup = async (body) => {    
    try {
      let response_obj = await APIMiddleware(
        axiosInstance,
        endpoint,
        method,
        headers,
        body,
        null
      );      
      if (response_obj.error === false) {
        // const socket = io(`http://localhost:3001`);

        console.log(response_obj?.response?.data?.message);
        console.log(response_obj?.response?.data?.data?.secret);
      } else {
        console.log("Error in SignUp: ", response_obj.error);
      }
    } catch (error) {}
  };
  return {
    handleSignup,
  };
};

export default useSignup;
