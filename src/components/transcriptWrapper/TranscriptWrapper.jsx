import { FaSearch } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import styles from "./TranscriptWrapper.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import {
  setActiveSidebar,
  setFileData,
} from "../../store/slices/workspaceSlice";
import { SIDEBAR_MENU } from "../../utils/NAMESPACE";

const TranscriptWrapper = () => {
  const { selectedUserData, fileData } = useSelector(
    (state) => state.workspaceData
  );
  const dispatch = useDispatch();

  const [btns, setBtns] = useState(false);
  const [text, setText] = useState(selectedUserData?.description);
  // console.log(selectedUserData);

  const showBtnContainer = () => {
    setBtns(true);
  };

  const discardChanges = () => {
    setBtns(false);
  };

  const handleFileDataSave = async () => {
    const { status, uploadTime } = selectedUserData;
    const updatedFileData = {
      status,
      uploadTime,
      description: text,
    };

    const upadtedData = {
      id: selectedUserData?._id,
      fileDetail: updatedFileData,
    };

    // Api Call
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/edit-file`;
    try {
      const res = await axios.post(url, upadtedData);

      if (res.data.success) {
        toast.success(res.data.message);
        setBtns(false);
        setText(res.data.data.description);

        let fileInfo = [...fileData];
        let getUpdatedObj = fileInfo.filter(
          (cur) => cur._id === selectedUserData?._id
        );

        getUpdatedObj[0]["description"] = res.data.data.description;
        // console.log(getUpdatedObj);
        // console.log(fileInfo);
        dispatch(setFileData(fileInfo));
        setTimeout(() => {
          dispatch(setActiveSidebar(SIDEBAR_MENU.PROJECT));
        }, 1500);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className={styles.transcriptWrapper}>
      <div className={styles.btnSection}>
        <h2 className={styles.primaryHeading}>Edit Transcript</h2>
        {btns && (
          <div className={styles.btnContainer}>
            <button className={styles.discardBtn} onClick={discardChanges}>
              Discard
            </button>
            <button className={styles.saveBtn} onClick={handleFileDataSave}>
              Save & Exit
            </button>
          </div>
        )}
      </div>

      <div className={styles.transcriptContent}>
        <div className={styles.transcriptHeader}>
          <div>
            <button
              className={styles.editBtn}
              onClick={() => showBtnContainer()}
            >
              <MdEdit />
              Edit Mode
            </button>
          </div>
          <div className={styles.searchBtn}>
            <FaSearch size={16} color="purple" />
          </div>
        </div>
        <p className={styles.para}>Speaker</p>

        {btns ? (
          <div>
            <input
              type="text"
              name="text"
              className="w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        ) : (
          <div className={styles.transContent}>{text}</div>
        )}
      </div>
    </div>
  );
};

export default TranscriptWrapper;
