import React from "react";

const TopUi = () => {
  return (
    <div className="flex flex-row justfy-center">
      <span className="basis-1/2 basis-1/2 font-body text-white text-xl">
        listening now 13
      </span>
      <ul className="basis-1/2 justify-end flex">
        <button className="">
          <img
            title="FullScreen"
            src="src/assets/image/fullscreen.svg"
            className="w-5 ml-4"
          ></img>
        </button>
        <button className="">
          <img
            title="twitter"
            src="src/assets/image/twitter.svg"
            className="w-5 ml-4"
          ></img>
        </button>
        <button className="">
          <img
            title="Promodoro"
            src="src/assets/image/timer.svg"
            className="w-5 ml-4"
          ></img>
        </button>
        <button title="About" className="">
          <img src="src/assets/image/heart.svg" className="w-5 ml-4"></img>
        </button>
      </ul>
    </div>
  );
};

export default TopUi;
