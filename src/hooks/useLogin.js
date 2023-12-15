import { header } from "../utils/constant";
import { APIMiddleware,successAlert,errorAlert } from "../helpers/GlobalFunctions";
import axios from "axios";
import io from "socket.io-client";
import Swal from "sweetalert";

const useLogin = () => {
  const axiosInstance = axios.create();
  let endpoint = "/stakeholder/login/";
  let method = "post";
  let headers = header;
  const handleLogin = async (body) => {    
    console.log(body)
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
        if(response_obj.response){
          Swal({
            title: response_obj?.response?.data?.message,
            text: '!!!!',
            icon: "error",    
          });
        }else{
          Swal({
            title: response_obj.error.message,
            text: '!!!!',
            icon: "error",    
            button:'OK'
          });    
        }
        console.log("Error in Login: ", response_obj.error);
      }
    } catch (error) {}
  };
  return {
    handleLogin,
  };
};

export default useLogin;
