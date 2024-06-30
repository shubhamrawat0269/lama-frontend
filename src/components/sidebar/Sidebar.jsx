import styles from "./Sidebar.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { SIDEBAR_MENU } from "../../utils/NAMESPACE";
import { useDispatch } from "react-redux";
import { setActiveSidebar } from "../../store/slices/workspaceSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.sidebarSection}>
      <div className={styles.sidebarMessageWrapper}>
        <div>
          <figure className={styles.logoWrapper}>
            <img
              className={styles.logoImg}
              src="../../../public/images/logo.png"
              alt="logo"
            />
            <img
              className={styles.logoContent}
              src="../../../public/images/lama.png"
              alt="HeroImg"
            />
          </figure>
          <p className={styles.para}>Podcast Upload Flow.</p>
        </div>
        <div className={styles.sidebarContentWrapper}>
          <div className={styles.sidebarMsgInfoContainer}>
            <ol className={styles.sidebarList}>
              <li
                className={styles.sidebarListItem}
                onClick={() => dispatch(setActiveSidebar(SIDEBAR_MENU.PROJECT))}
              >
                <span className={styles.number}>1</span>
                <span className={styles.title}>Project</span>
              </li>
              <li
                className={styles.sidebarListItem}
                onClick={() =>
                  dispatch(setActiveSidebar(SIDEBAR_MENU.CONFIGURATION))
                }
              >
                <span className={styles.number}>2</span>
                <span className={styles.title}>Widget Configuration</span>
              </li>
            </ol>
          </div>
          <div>
            <div
              className={styles.sidebarListItem}
              onClick={() => dispatch(setActiveSidebar(SIDEBAR_MENU.SETTINGS))}
            >
              <IoSettingsOutline size={25} />
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
