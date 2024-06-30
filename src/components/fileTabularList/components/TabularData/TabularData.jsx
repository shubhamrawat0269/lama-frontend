import axios from "axios";
import {
  setActiveSidebar,
  setFileData,
  setSelectedUserData,
} from "../../../../store/slices/workspaceSlice";
import styles from "./TabularData.module.css";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { SIDEBAR_MENU } from "../../../../utils/NAMESPACE";

const TabularData = () => {
  const dispatch = useDispatch();
  const { fileData } = useSelector((state) => state.workspaceData);

  const handleDeleteFile = async (id) => {
    // Api Call
    const url = `${import.meta.env.VITE_BACKEND_URL}/api/delete-file`;
    try {
      const res = await axios.post(url, { id });

      if (res.data.success) {
        toast.error(res.data.message);
        let updatedData = [...fileData];
        let updatedFilterData = updatedData.filter((curr) => curr._id !== id);

        dispatch(setFileData(updatedFilterData));
      }
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
    }
  };

  // console.log(fileData);
  const handleDataEdit = (data) => {
    // console.log(data);

    dispatch(setSelectedUserData(data));
    dispatch(setActiveSidebar(SIDEBAR_MENU.TRANSCRIPT));
  };

  return (
    <div className={styles.tableSection}>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead class="text-xs text-gray-700 uppercase border-2 border-gray-200 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Name
              </th>
              <th scope="col" class="px-6 py-3">
                Upload Date & Time
              </th>
              <th scope="col" class="px-6 py-3">
                Status
              </th>
              <th scope="col" class="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {fileData?.map((data) => {
              return (
                <tr
                  key={data?._id}
                  class="bg-white border-2 border-b border-l border-r dark:border-gray-200"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {data.name}
                  </th>
                  <td class="px-6 py-4">{data.uploadTime}</td>
                  <td class="px-6 py-4">
                    {data.status.toString().toUpperCase()}
                  </td>
                  <td class="px-6 py-4">
                    <div className="flex gap-4 items-center">
                      <button
                        className="text-neutral-800"
                        onClick={() => handleDataEdit(data)}
                      >
                        Edit
                      </button>
                      <button
                        className="text-red-800"
                        onClick={() => handleDeleteFile(data?._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TabularData;
