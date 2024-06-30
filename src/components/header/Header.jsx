import styles from "./Header.module.css";
import { IoSettingsOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
// import st from ""

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <div>
        <figure className={styles.logoWrapper}>
          <img
            className={styles.logoImg}
            src=".../../../public/images/logo.png"
            alt="logo"
          />
          <img
            className={styles.logoContent}
            src="../../../public/images/lama.png"
            alt="HeroImg"
          />
        </figure>
      </div>
      <div className={styles.btnSection}>
        <div>
          <IoSettingsOutline size={25} />
        </div>
        <div className="cursor-pointer">
          <CiLogout size={25} />
        </div>
      </div>
    </div>
  );
};

export default Header;
