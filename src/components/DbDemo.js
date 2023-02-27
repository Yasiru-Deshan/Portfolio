import React from "react";
import ReactPlayer from "react-player";
import video from "./../images/IMG_3414_Trim.mp4"

const DbDemo = ()=>{
    return (
      <div style={{ width: "100%", height: "100%" }}>
        <ReactPlayer
          width= "100%" height= "100%" 
          url={video}
          playing="true"
        />
      </div>
    );
}

export default DbDemo;

