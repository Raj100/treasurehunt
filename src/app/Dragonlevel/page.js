import React from "react";
import fire from "../../assets/dragon-fire.png"

const page = () => {
  return (
    <>
      <div className="grid grid-cols-1 mt-10">
        <div className="dragon relative translate-y-1/2	">
          <h3 className="absolute  top-1/2 ">Hello</h3>
          {/* <div className="fire"></div> */}
        </div>
        <div className="dragon2 relative ">
          <h3 className="absolute -scale-x-100 top-1/2  dragontext">Hello</h3>
        </div>
      </div>
    </>
  );
};

export default page;
