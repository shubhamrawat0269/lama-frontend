import { useEffect } from "react";
import TabularData from "./components/TabularData/TabularData";
import NotificationBar from "./components/notificationBar/NotificationBar";
import toast from "react-hot-toast";
import axios from "axios";
import { setFileData } from "../../store/slices/workspaceSlice";
import { useDispatch } from "react-redux";

const FileTabularList = () => {
  const dispatch = useDispatch();
  const getTableData = async () => {
    // Api Call
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/files`;
    try {
      const res = await axios.get(url);
      // console.log(res);

      if (res.data.success) {
        dispatch(setFileData(res.data.data));
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    getTableData();
  }, []);
  return (
    <div>
      <NotificationBar
        title="You are currently on the Ques AI Basic Plan!"
        label="Try It Out!"
      />
      <TabularData />
    </div>
  );
};

export default FileTabularList;
