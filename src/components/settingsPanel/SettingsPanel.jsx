import Avatar from "../avatar/Avatar";
import { useSelector } from "react-redux";
import NotificationBar from "../fileTabularList/components/notificationBar/NotificationBar";
import styles from "./SettingsPanel.module.css";

const SettingsPanel = () => {
  const { currentUserData } = useSelector((state) => state.userData);
  return (
    <div className={styles.settingSection}>
      <h2 className={styles.primaryHeading}>Accout Settings</h2>

      <div className={styles.profileSection}>
        <Avatar width={100} height={100} name={"Shubham"} />

        <div className={styles.inputBox}>
          <label htmlFor="projectname">Email</label>
          <input
            type="text"
            id="projectname"
            name="email"
            className={styles.searchInput}
            value={currentUserData?.email}
          />
        </div>
      </div>
      <h2 className={styles.primaryHeading}>Subscriptions</h2>

      <div className="mt-4">
        <NotificationBar
          title="All files are processed! You are ready to go!"
          label="Try It Out!"
        />

        <div className={styles.cancelBtn}>Cancel Subscription</div>
      </div>
    </div>
  );
};

export default SettingsPanel;
