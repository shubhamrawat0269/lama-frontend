import React from "react";
import UploadWrappers from "../uploadWrappers/UploadWrappers";
import SelectFilePaellete from "../selectFilePaellete/SelectFilePaellete";
import UploadModal from "../uploadModal/UploadModal";
import FileTabularList from "../fileTabularList/FileTabularList";
import { useSelector } from "react-redux";

const UploadSection = () => {
  const { uploadModal, uploadSource, fileData } = useSelector(
    (state) => state.workspaceData
  );
  return (
    <>
      <UploadWrappers />
      <UploadModal show={uploadModal} source={uploadSource} />
      {fileData.length !== 0 ? <FileTabularList /> : <SelectFilePaellete />}
    </>
  );
};

export default UploadSection;
