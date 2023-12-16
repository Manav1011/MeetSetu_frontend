import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Webcam from "react-webcam";
import { useAuth } from "../context/AuthContext";
import useCamera from "../hooks/useCamera";

const CameraPage = () => {
  const webcamRef = React.useRef(null);
  const [meetingInfoPopUp, setMeetingInfoPopUp] = useState(false);
  const { activeMeeting } = useAuth();
  const { id } = useParams();
  const { id: pramas } = useCamera();

  console.log(activeMeeting);
  const handleActivePopUp = () => {
    setMeetingInfoPopUp((prev) => !prev);
  };
  return (
    <div className="relative  h-screen">
      <div className="flex">
        {/* Left side: Camera view */}
        <div className="w-1/2 p-4">
          <Webcam
            audio={false}
            ref={webcamRef}
            mirrored={true} // Adjust as needed
            screenshotFormat="image/jpeg"
          />
        </div>

        {/* Right side: Meeting participants */}
        <div className="w-1/2 p-4">
          {/* Add your meeting participants list or any other content here */}
          <h2>Meeting Participants</h2>
          {/* Example: Display participants' names */}
          <ul>
            <li>Participant 1</li>
            <li>Participant 2</li>
            {/* Add more participants dynamically */}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 bg-indigo-100 text-black w-full flex  justify-between p-2">
        <div>
          <div className="relative">
            <div className="hover:cursor-pointer" onClick={handleActivePopUp}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-file-earmark-person"
                viewBox="0 0 16 16"
              >
                <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            {meetingInfoPopUp && (
              <div className="absolute bottom-5">
                <div className="bg-white p-5  border-2 border-black">
                  {activeMeeting.title}
                </div>
              </div>
            )}
          </div>
        </div>
        <div>second</div>
        <div>third</div>
      </div>
    </div>
  );
};

export default CameraPage;
