import Avatar from "../avatar/Avatar";
import BreadCrumb from "../breadCrumb/BreadCrumb";
import styles from "./DashboardHeader.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

const DashboardHeader = () => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerContainer}>
        <div>
          <BreadCrumb />
        </div>
        <div className={styles.headerSecondaryContent}>
          <div className={styles.profileContent}>
            <IoIosArrowDown size={25} />
            <span>EN</span>
            <Avatar
              width={30}
              height={30}
              imgUrl="../../../public/images/flag.png"
            />
          </div>
          <div>
            <FaRegBell size={25} />
          </div>
        </div>
      </div>
      <div className={styles.btnSection}>
        <div>{/* <IoSettingsOutline size={25} /> */}</div>
        <div>{/* <FaRegBell size={25} /> */}</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
