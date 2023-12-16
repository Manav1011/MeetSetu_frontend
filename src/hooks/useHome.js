import React, { useState } from "react";
import { APIMiddleware } from "../helpers/GlobalFunctions";
import axios from "axios";
import { base_url, base_url_socket, header } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const useHome = () => {
  const axiosInstance = axios.create();
  let navigate = useNavigate();
  let headers = header;
  const [userList, setUserList] = useState([]);

  const handleCreateNewMeeting = async ({
    activeSlide,
    selectedUsers = null,
  }) => {
    let body;
    console.log(activeSlide);
    if (activeSlide.type === "public" || activeSlide.type === "asktojoin") {
      body = {
        meet_type: activeSlide.type,
      };
    }
    if (activeSlide.type === "private" || activeSlide.type === "onetoone") {
      body = {
        meet_type: activeSlide.type,
        user_list: selectedUsers,
      };
    }

    let endpoint = "/meet/create_meet/";
    let method = "post";

    try {
      let response_obj = await APIMiddleware(
        axiosInstance,
        endpoint,
        method,
        headers,
        body,
        null
      );
      console.log(response_obj.response.data.data.UID, "response --------");
      const uid = response_obj.response.data.data.UID;
      navigate(`/camera/${uid}`);
    } catch (error) {
      console.log(error);
      return error;
    }
  };
  const getUserForPrivateMeeting = async () => {
    const method = "get";
    const endpoint = "/meet/get_user_list";
    try {
      let response_obj = await APIMiddleware(
        axiosInstance,
        endpoint,
        method,
        headers,
        null,
        null
      );
      setUserList(response_obj.response.data.data);
      console.log(response_obj.response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleCreateNewMeeting,
    getUserForPrivateMeeting,
    userList,
  };
};

export default useHome;
