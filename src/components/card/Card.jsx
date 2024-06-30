import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";

const Card = ({ name, createdAt, key, id }) => {
  return (
    <div key={key}>
      <Link
        to={`/dashboard/${id}`}
        className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <Avatar width={70} height={70} name={name} />
        <div className="flex flex-col gap-1 justify-between p-4">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            {name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {createdAt}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
