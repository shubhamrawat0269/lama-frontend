import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./CreateProjectModal.module.css";
import {
  setProjectList,
  setProjectLoader,
  setProjectName,
  setShowProjectModal,
} from "../../store/slices/utilsSlice";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const CreateProjectModal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const { projectInfo } = useSelector((state) => state.utilsData);

  const handleCreateProject = async () => {
    if (projectInfo.length < 1) {
      setError("Project Name Field Cannot be empty");
      return;
    } else {
      setError("");

      const url = `${import.meta.env.VITE_BACKEND_URL}/api/project/create`;
      try {
        const res = await axios.post(url, { name: projectInfo });
        // console.log(res);

        if (res.data.success) {
          const projectInfo = {
            id: uuidv4(),
            name: res.data.data,
            createdAt: new Date().toLocaleString(),
          };

          toast.success(res.data.message);
          dispatch(setProjectList(projectInfo));

          dispatch(setShowProjectModal(false));
          dispatch(setProjectName(""));
          navigate("/projects");
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
        dispatch(setProjectName(""));
      }
    }
  };

  return (
    <div className={styles.searchUserWrapper}>
      <div className={styles.searchUserContent}>
        <h2 className={styles.heading}>Create Project</h2>
        <div className={styles.inputBox}>
          <label htmlFor="projectname">Enter Project Name:</label>
          <input
            type="text"
            id="projectname"
            placeholder="Project Name"
            className={styles.searchInput}
            value={projectInfo}
            autoComplete="off"
            onChange={(e) => dispatch(setProjectName(e.target.value))}
          />
        </div>
        {error && <p className="text-red-700">{error}</p>}
        <div className={styles.btnContainer}>
          <button
            className={styles.cancelBtn}
            onClick={() => dispatch(setShowProjectModal(false))}
          >
            Cancel
          </button>
          <button className={styles.createBtn} onClick={handleCreateProject}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateProjectModal;
