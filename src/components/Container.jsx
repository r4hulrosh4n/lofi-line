// import React, { useState } from "react";
import TopUi from "./TopUi";
// import BottomUi from "./BottomUi";

const Container = () => {

  return (
    <div className="w-[95%] h-[95%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col">
      <TopUi />
    </div>
  );
};

export default Container;
