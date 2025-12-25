const Image = (props) => {
  
  const printImages = () => {
    if (props.userdata.length === 0)
      return <p className="text-slate-400">Loading Images, Please wait...</p>;

    return props.userdata.map((e) => {
      return (
        <div>
          <div className="mt-5">
            <a href={e.url}>
              <img
                className="h-62 w-full rounded-xl object-cover "
                src={e.download_url}
                alt=""
                srcset=""
              />
            </a>
            <p className="text-sm md:text-lg lg:text-xl text-center font-bold">{e.author}</p>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 p-3">{printImages()}</div>
    </div>
  );
};

export default Image;
