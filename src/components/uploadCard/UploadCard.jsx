import { useDispatch } from "react-redux";
import Avatar from "../avatar/Avatar";
import styles from "./UploadCard.module.css";
import { setUploadModal } from "../../store/slices/workspaceSlice";

const UploadCard = ({ id, title, imgUrl, label }) => {
  const dispatch = useDispatch();
  const handleOpenUploadModal = (label) => {
    // console.log(label);
    dispatch(setUploadModal({ title: label, show: true }));
  };

  return (
    <div key={id} onClick={() => handleOpenUploadModal(label)}>
      <a
        href="#"
        className="flex flex-col gap-3 items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row p-2"
      >
        <Avatar width={60} height={60} name={"Shubham"} imgUrl={imgUrl} />
        <h5 className="text-lg tracking-tight text-purple-900">{title}</h5>
      </a>
    </div>
  );
};

export default UploadCard;
