import { FaHome } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { SIDEBAR_MENU } from "../../utils/NAMESPACE";
import { setActiveSidebar } from "../../store/slices/workspaceSlice";

const BreadCrumb = () => {
  const dispatch = useDispatch();
  const { activeSidebarMenu } = useSelector((state) => state.workspaceData);
  return (
    <div>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              to={`/projects`}
              className="inline-flex items-center text-lg font-medium text-gray-700"
              onClick={() => dispatch(setActiveSidebar(SIDEBAR_MENU.PROJECT))}
            >
              <FaHome size={25} />
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <a href="#" class="ms-1 text-sm font-medium text-gray-700 ">
                {activeSidebarMenu.toUpperCase()}
              </a>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;
