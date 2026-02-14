import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "./components/Image";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import Popup from "./components/Popup";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [Page, setPage] = useState(1);
  const [isClicked, setIsClicked] = useState(false);

  //*API calling
  const getData = async () => {
    const { data } = await axios.get(
      `https://picsum.photos/v2/list?page=${Page}&limit=30`,
    );
    setUserData(data);
    // console.log(userData);
  };

  useEffect(() => {
    getData();
  }, [Page]);

  console.log(isClicked);

  return (
    <>
      <Popup btnClick = {[isClicked, setIsClicked]} />
      
      <div className= {`${isClicked ? "block" : "hidden"} mt-12`}>         
          <h1 className="text-center lobster-two-bold-italic text-5xl!">
            Galleria
          </h1>
          <Image userdata={userData} />

          <div className="mt-15 flex justify-center gap-8">
            <button
              onClick={() => {
                if (Page === 1) return;
                setPage((p) => p - 1);
                console.log(Page);
              }}
              className={`${Page === 1 ? "cursor-not-allowed active:scale-none" : "cursor-pointer active:scale-95"} bg-amber-400 px-4  md:px-10 py-4 text-black text-lg font-bold rounded-lg`}
            >
              <CircleArrowLeft
                size={38}
                color="black"
                className="hidden sm:block"
              />
              <CircleArrowLeft
                size={28}
                color="black"
                className="block sm:hidden"
              />
            </button>
            <h1 className="font-semibold! text-xl! md:text-[25px]! justify-center flex items-center">
              Page {Page}
            </h1>
            <button
              onClick={() => {
                setPage((p) => p + 1);
                console.log(Page);
              }}
              className="bg-amber-400 active:scale-95 px-4  md:px-10 py-4 text-black text-lg font-bold rounded-lg cursor-pointer"
            >
              <CircleArrowRight
                size={38}
                color="black"
                className="hidden sm:block"
              />
              <CircleArrowRight
                size={28}
                color="black"
                className="block sm:hidden"
              />
            </button>
          </div>
        </div>
      
    </>
  );
};

export default App;
