import "./VideoCard.css";
import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const closeButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  width: "35px",
  height: "35px",
  backgroundColor: "transparent",
  color: "black",
  border: "none",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
};

const VideoCard = ({ videoLink, id, imgLink }) => {
  const [showVideo, setShowVideo] = useState(false);

  const openVideoModal = () => {
    setShowVideo(true);
  };

  const closeVideoModal = () => {
    setShowVideo(false);
  };

  return (
    <div className="video-card">
      <img
        className="video-card-img"
        src={imgLink}
        alt=""
        onClick={openVideoModal}
      />
      <Modal
        open={showVideo}
        onClose={closeVideoModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <button onClick={closeVideoModal} sx={closeButtonStyle}>
            X
          </button>
          <Box sx={style}>
            <iframe
              width="100%"
              height="100%"
              title={`Video ${id}`}
              src={videoLink}
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              autoPlay
              muted
            ></iframe>
          </Box>
        </>
      </Modal>
    </div>
  );
};

export default VideoCard;
