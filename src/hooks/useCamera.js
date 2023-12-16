import axios from "axios";
import React, { useEffect } from "react";
import { header } from "../utils/constant";
import { APIMiddleware } from "../helpers/GlobalFunctions";
import { useParams } from "react-router-dom";

const useCamera = () => {
  const axiosInstance = axios.create();
  const { id } = useParams();

  useEffect(() => {
    fetchMeetingData(id);
  }, []);

  const fetchMeetingData = async (uid) => {
    const endpoint = "/meet/get_meeting_details";
    const method = "get";
    let headers = header;
    let params = {
      meet_uid: uid,
    };
    let response_obj = await APIMiddleware(
      axiosInstance,
      endpoint,
      method,
      headers,
      null,
      params
    );
  };

  return { id };
};

export default useCamera;
