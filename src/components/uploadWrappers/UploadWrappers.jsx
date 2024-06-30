import { uploadCardData } from "../../dummy";
import Card from "../card/Card";
import UploadCard from "../uploadCard/UploadCard";
import styles from "./UploadWrappers.module.css";

const UploadWrappers = () => {
  return (
    <div className={styles.uploadSection}>
      <h2 className={styles.primaryHeading}>Upload</h2>

      <div className={`${styles.cardSection}`}>
        {/* project list  */}
        {uploadCardData.map((card, id) => {
          return (
            <UploadCard id={id} title={card?.title} imgUrl={card?.imgUrl} label={card?.label} />
          );
        })}
      </div>
    </div>
  );
};

export default UploadWrappers;
