import styles from "./AppConfiguration.module.css";
import TabsWrapper from "./components/tabsWrapper/TabsWrapper";

const AppConfiguration = () => {
  return (
    <div className={styles.configurationWrapper}>
      <h2 className={styles.primaryHeading}>Configuration</h2>

      <div className={styles.configurationContent}>
        <div>
          <TabsWrapper />
        </div>
      </div>
    </div>
  );
};

export default AppConfiguration;
