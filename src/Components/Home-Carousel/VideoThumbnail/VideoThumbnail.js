import React from "react";

const VideoimgLink = ({ videoId }) => {
  const imgLinkUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <div>
      <img src={imgLinkUrl} alt="Miniatura del video de YouTube" />
    </div>
  );
};

export default VideoimgLink;
