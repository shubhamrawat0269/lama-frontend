const Avatar = ({ name, width, height, imgUrl }) => {
  return (
    <div>
      {imgUrl ? (
        <img
          style={{ width, height }}
          src={imgUrl}
          className="rounded-full aspect-square grid place-content-center"
          alt={imgUrl}
        />
      ) : (
        <div
          style={{ width, height }}
          className="bg-slate-900 aspect-square rounded-full m-5 p-3 grid place-content-center text-2xl text-white"
        >
          {name?.slice(0, 2).toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Avatar;
