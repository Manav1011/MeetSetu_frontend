import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";
import { useAuth } from "../context/AuthContext";
import useMeetInfo from "../hooks/useMeetInfo";
import { useEffect } from "react";
import MeetDetailToast from "../components/meetview/MeetDetailToast";
import ParticipantsModal from "../components/meetview/ParticipantsModal";
import ChatOffcanvas from "../components/meetview/ChatOffcanvas";
import { base_url_socket } from "../utils/constant";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "react-chat-elements/dist/main.css"

const MeetView = () => {
  const webcamRef = React.useRef(null);
  const [meetingInfoPopUp, setMeetingInfoPopUp] = useState(false);
  const { activeMeeting } = useAuth();
  const { id } = useParams();
  const [meetDetails,setMeetDetails] = useState(null)  
  const [createdAt,setCreatedAt] = useState(null)
  const [meetDetailToast, showMeetDetailToast] = useState(false); 
  const [showParticipantModal, setShowParticipantModal] = useState(false);  
  const [showChatOffcanvas, setShowChatOffcanvas] = useState(false);  
  const [chatSocket,setChatSocket] = useState(null)
  
  console.log('calleeeeeed')
  useMeetInfo({meetDetails:meetDetails,setMeetDetails:setMeetDetails});
  useEffect(() => {
    if(meetDetails){
      const dateObject = new Date(meetDetails.created_at);
      const hour = String(dateObject.getHours()).padStart(2,"0");
      const minute = String(dateObject.getMinutes()).padStart(2, "0");
      setCreatedAt(`${hour}:${minute}`)
    }
  },[meetDetails])
  useEffect(() => {        
    if(!chatSocket){      
      setChatSocket(new WebSocket(`${base_url_socket}/chat/${id}/`))    
    }
  },[])
  // console.log(meetDetails);
  const handleActivePopUp = () => {
    setMeetingInfoPopUp((prev) => !prev);
  };
  return (
    <div className="relative  h-screen">
      <div className="flex">
        {/* Left side: Camera view */}
        <div className="w-1/2 p-4">
          {/* <Webcam
            audio={false}
            ref={webcamRef}
            mirrored={true} // Adjust as needed
            screenshotFormat="image/jpeg"
          /> */}
        </div>

        {/* Right side: Meeting participants */}
        <div className="w-1/2 p-4">
         
        </div>
      </div>
      <div className="absolute bottom-0  text-black w-full flex  justify-between p-4">
        <div>
          <div className="relative">
            <div className="hover:cursor-pointer" onClick={handleActivePopUp}>
                <p>
                  {createdAt} | {id}
                </p>
            </div>
          </div>
        </div>    
        <div>    
          <button type="button" className="btn btn-outline-success mx-2 p-2" style={{border:'1px solid',borderRadius:'50%'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-mic" viewBox="0 0 16 16">
              <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/>
              <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>
            </svg>         
          </button>
          <button type="button" className="btn btn-outline-primary mx-2 p-2" style={{border:'1px solid',borderRadius:'50%'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></path>
                </svg>                  
          </button>
          <button type="button" className="btn-lg btn btn-outline-danger mx-2 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
                    <path d="M7.5 1v7h1V1z"/>
                    <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
                </svg>
          </button>
        </div>
        <div>
            <button type="button" className="btn  mx-2 p-2" onClick={() => {showMeetDetailToast(!meetDetailToast)}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
              </svg>
            </button>
            <button type="button" className="btn mx-2 p-2" >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16" onClick={() => {setShowParticipantModal(!showParticipantModal)}}>
                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
              </svg>
            </button>
            <button type="button" className="btn-lg btn  mx-2 p-2" onClick={() => {setShowChatOffcanvas(!showChatOffcanvas)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
            </svg>
            </button>
        </div>
      </div>
      {meetDetails && (
      <>
        <MeetDetailToast
          meetDetails={meetDetails}
          UID={id}
          type={meetDetails.type}
          status={meetDetails.status}
          host={meetDetails.host.email}
          meetDetailToast={meetDetailToast}
          showMeetDetailToast={showMeetDetailToast}
        />
        <ParticipantsModal meetDetails={meetDetails} showParticipantModal={showParticipantModal} setShowParticipantModal={setShowParticipantModal}/>
        {chatSocket?<ChatOffcanvas chatSocket={chatSocket} meetDetails={meetDetails} showChatOffcanvas={showChatOffcanvas} setShowChatOffcanvas={setShowChatOffcanvas}/>: null}
      </>
    )}
    </div>
  );
};

export default MeetView;