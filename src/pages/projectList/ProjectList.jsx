import { IoHomeOutline } from "react-icons/io5";
import { Card, CreateProjectModal, Header } from "../../components";
import styles from "./ProjectList.module.css";
import { FaPlusCircle } from "react-icons/fa";
import { setShowProjectModal } from "../../store/slices/utilsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProjectList = () => {
  const dispatch = useDispatch();
  const { showProjectModal, projectList } = useSelector(
    (state) => state.utilsData
  );

  return (
    <div className={styles.projectWrapper}>
      {/* Header  */}
      <Header />

      <div className={styles.projectContent}>
        <div className={styles.projectSection}>
          <div className={styles.btnSection}>
            <button className={styles.backBtn}>
              <IoHomeOutline size={20} />
              Back to Home
            </button>
          </div>
          <div className={styles.projectPrimarySection}>
            <h1 className={styles.primaryHeading}>Projects</h1>

            <button
              className={styles.createBtn}
              onClick={() => dispatch(setShowProjectModal(true))}
            >
              <FaPlusCircle size={30} />
              Create New Project
            </button>
          </div>
          <div className={`${styles.cardSection}`}>
            {/* project list  */}
            {projectList?.map((cardData) => {
              return (
                <Card
                  name={cardData?.name?.name}
                  key={cardData?.id}
                  id={cardData?.id}
                  createdAt={cardData?.createdAt}
                />
              );
            })}
          </div>
        </div>
      </div>
      {showProjectModal && <CreateProjectModal />}
    </div>
  );
};

export default ProjectList;
