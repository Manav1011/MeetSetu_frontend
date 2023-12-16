import { base_url, base_url_socket, header } from "../utils/constant";
import {
  APIMiddleware,
  successAlert,
  errorAlert,
} from "../helpers/GlobalFunctions";
import axios from "axios";
import io from "socket.io-client";
import Swal from "sweetalert";

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
        if (response_obj.response.status == 200) {
          const secretKey = response_obj?.response?.data?.data?.secret;
          // let Socket =
          const socket = new WebSocket(`${base_url_socket}/auth/${secretKey}/`);
          socket.onopen = async () => {
            console.log("Socket connected");
          };
          socket.onmessage = async (e) => {
            let data = JSON.parse(e.data);
            if (data.action === "email_confirmed") {
              console.log("Socket message: ", e.data);
            }
          };
          socket.onclose = async () => {
            console.log("Socket closed");
          };
          socket.onerror = async (e) => {
            console.log("Socket error: ", e);
          };

          Swal({
            title: response_obj.response.data.message,
            text: "!!!!",
            icon: "success",
          });
        }
        // const socket = io(`http://localhost:3001`);
        console.log(response_obj?.response?.data?.message);
        console.log(response_obj?.response?.data?.data?.secret);
      } else {
        if (response_obj.response) {
          Swal({
            title: response_obj?.response?.data?.message,
            text: "!!!!",
            icon: "error",
          });
        } else {
          Swal({
            title: response_obj.error.message,
            text: "!!!!",
            icon: "error",
            button: "OK",
          });
        }
        console.log("Error in SignUp: ", response_obj.error);
      }
    } catch (error) {}
  };
  return {
    handleSignup,
  };
};

export default useSignup;
