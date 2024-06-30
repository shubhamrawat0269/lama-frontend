import styles from "./Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPlusCircle } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Header from "../../components/header/Header";
import RegisterForm from "../register/RegisterForm";
import CreateProjectModal from "../../components/createProjectModal/CreateProjectModal";
import { setShowProjectModal } from "../../store/slices/utilsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { showSignupModal, showProjectModal } = useSelector(
    (state) => state.utilsData
  );
  return (
    <>
      <div className={styles.homeWrapper}>
        {/* Header  */}
        <Header />

        <div className={styles.heroContent}>
          <div className={styles.heroSection}>
            <div className={styles.btnSection}>
              <button className={styles.backBtn}>
                <IoHomeOutline size={20} />
                Back to Home
              </button>
            </div>
            <div className={styles.heroPrimarySection}>
              <h1 className={styles.primaryHeading}>Create New Project</h1>
              <figure>
                <img
                  className={styles.heroImg}
                  src="./hero-img.png"
                  alt="heroImg"
                />
              </figure>
              <p className={styles.heroPara}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                cupiditate quam distinctio maxime voluptatibus vitae eius
                excepturi amet. Perferendis cumque reiciendis nesciunt itaque
                modi. Vero velit ipsum eum ab exercitationem. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quia non velit voluptatum
                voluptatibus vero est placeat architecto eligendi molestias
                nulla. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>

              <button
                className={styles.createBtn}
                onClick={() => dispatch(setShowProjectModal(true))}
              >
                <FaPlusCircle size={30} />
                Create New Project
              </button>
            </div>
          </div>
        </div>
      </div>
      {showSignupModal && <RegisterForm />}
      {showProjectModal && <CreateProjectModal />}
    </>
  );
};

export default Home;
