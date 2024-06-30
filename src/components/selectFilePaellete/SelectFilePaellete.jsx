import styles from "./SelectFilePaellete.module.css";
import { FaCloudArrowUp } from "react-icons/fa6";

const SelectFilePaellete = () => {
  return (
    <div className={styles.palleteSection}>
      <div className={styles.palleteInfoSection}>
        <div className={styles.palleteImg}>
          <FaCloudArrowUp size={80} color="purple" />
        </div>
        <p className={styles.primaryText}>
          Select a file or drag and drop (Podcast media or Transcription Text)
        </p>
        <p className={styles.secondaryText}>
          Lorem ipsum dolor sit amet consectetur.
        </p>

        <button className={styles.selectBtn}>Select File</button>
      </div>
    </div>
  );
};

export default SelectFilePaellete;
