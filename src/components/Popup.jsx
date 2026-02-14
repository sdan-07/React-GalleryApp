const Popup = (props) => {
  const ClickingButton = (e) => {
    e.preventDefault();
    props.btnClick[1]((prev) => !prev);
    // console.log(props.btnClick[0]);
  };

  return (
    <div
      className={`${props.btnClick[0] ? "hidden" : "grid"} h-screen bg-slate-900 grid-cols-1 place-items-center`}
    >
      <div className="box bg-gray-600 mx-20 px-12 py-16 rounded-2xl flex flex-col justify-center items-center">
        <p className="text-md lg:text-lg mb-8">
          This site <span className="italic font-bold">Galleria</span> uses API
          calling feature which shows randomly fetched images
        </p>

        <button
          className="px-3 py-3 rounded-xl border-3 border-red-700 bg-red-600 hover:transition-all cursor-pointer hover:bg-red-500 text-xl"
          onClick={ClickingButton}
        >
          OK, got it!
        </button>
      </div>
    </div>
  );
};

export default Popup;
