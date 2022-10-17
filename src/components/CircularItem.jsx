import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

const CircularItem = ({ value, styles, text }) => {
  return (
    <>
      {/* Circular Item */}
      <div className="w-[150px] lg:w-[275px] flex flex-col items-center gap-y-6">
        <CircularProgressbar
          strokeWidth={1}
          value={value}
          styles={styles}
          text={`${value}%`}
        />
        {/* Text */}
        <div className="uppercase font-light tracking-[1.2px] text-center">
          {text}
        </div>
      </div>
    </>
  );
};

export default CircularItem;
