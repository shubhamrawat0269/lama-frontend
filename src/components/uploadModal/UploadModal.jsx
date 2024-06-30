import { IoClose } from "react-icons/io5";
import styles from "./UploadModal.module.css";
import UploadTitle from "./UploadTitle";
import { setFileInfo, setUploadModal } from "../../store/slices/workspaceSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

const UploadModal = ({ show, source }) => {
  const dispatch = useDispatch();
  const { fileData } = useSelector((state) => state.workspaceData);
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const handleUserData = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmitFileData = async (e) => {
    e.preventDefault();
    let fileData = {
      ...data,
      uploadTime: new Date().toLocaleString(),
      status: true,
    };

    // console.log(fileData);

    // Api Call
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/upload-file`;
    try {
      const res = await axios.post(url, fileData);
      // console.log(res);

      if (res.data.success) {
        toast.success(res.data.message);

        dispatch(setUploadModal({ title: "", show: false }));
        dispatch(setFileInfo(res.data.data));
        setData({
          name: "",
          description: "",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {show && (
        <div className={styles.searchUserWrapper}>
          <form
            onSubmit={handleSubmitFileData}
            className={styles.searchUserContent}
          >
            <div className={styles.heading}>
              <UploadTitle
                imgUrl={`.../../../public/${source}.png`}
                title={`Upload From ${source}`}
              />
              <div
                className={styles.closeBtn}
                onClick={() =>
                  dispatch(setUploadModal({ title: "", show: false }))
                }
              >
                <button>
                  <IoClose />
                </button>
              </div>
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="projectname">Name:</label>
              <input
                type="text"
                id="projectname"
                name="name"
                className={styles.searchInput}
                value={data.name}
                onChange={handleUserData}
              />
            </div>
            <div className={styles.inputBox}>
              <label htmlFor="projectname">Description:</label>
              <input
                type="text"
                id="projectname"
                name="description"
                className={styles.searchInput}
                value={data.description}
                onChange={handleUserData}
              />
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.createBtn}>Save</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default UploadModal;
