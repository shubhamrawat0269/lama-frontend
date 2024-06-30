import React from "react";

const UploadTitle = ({ imgUrl, title }) => {
  return (
    <div className="flex items-center gap-4">
      <figure>
        <img src={imgUrl} className="w-8" alt="1" />
      </figure>
      <h2 className="text-xl">{title}</h2>
    </div>
  );
};

export default UploadTitle;
