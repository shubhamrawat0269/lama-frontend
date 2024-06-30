import styles from "./NotificationBar.module.css";

const NotificationBar = ({ title, label }) => {
  return (
    <div className={styles.notificationSection}>
      <h3 className={styles.heading}>{title}</h3>
      <div>
        <button className={styles.btn}>{label}</button>
      </div>
    </div>
  );
};

export default NotificationBar;
