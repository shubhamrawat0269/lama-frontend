import { useSelector } from "react-redux";
import {
  DashboardHeader,
  Sidebar,
  UploadSection,
  TranscriptWrapper,
  AppConfiguration,
  SettingsPanel,
} from "../../components";
import styles from "./UserDashboard.module.css";
import { SIDEBAR_MENU } from "../../utils/NAMESPACE";

const UserDashboard = () => {
  const { activeSidebarMenu } = useSelector((state) => state.workspaceData);
  return (
    <>
      <div className={styles.dashboardWrapper}>
        <section>
          <Sidebar />
        </section>
        <div className={styles.dashbaordPrimaryContainer}>
          <DashboardHeader />

          {activeSidebarMenu === SIDEBAR_MENU.PROJECT && <UploadSection />}
          {activeSidebarMenu === SIDEBAR_MENU.CONFIGURATION && (
            <AppConfiguration />
          )}
          {activeSidebarMenu === SIDEBAR_MENU.SETTINGS && <SettingsPanel />}
          {activeSidebarMenu === SIDEBAR_MENU.TRANSCRIPT && (
            <TranscriptWrapper />
          )}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
