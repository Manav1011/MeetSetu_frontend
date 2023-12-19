import React, { useRef,useEffect } from 'react'
import Card from 'react-bootstrap/Card';

function VideoElements(props) {
  const {user,stream} = props
  const videoRef = useRef(null);
  useEffect(() => {
    // Set the srcObject when the component mounts or when the stream changes
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }

    // Clean up the stream when the component unmounts or when the stream changes
    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    };
  }, [stream]);
  return (
        <Card     
          text='dark'
          style={{ width: '24rem' ,height:'24rem'}}
          className="m-4"
        >
          <Card.Header>{user}</Card.Header>
          <Card.Body className="d-flex" style={{alignItems:'center',flexDirection:'column'}}>            
            <video ref={videoRef} style={{ width: '300px', height: '300px' }} autoPlay playsInline muted={user === 'You'} />
          </Card.Body>
        </Card>    
  )
}

export default VideoElements