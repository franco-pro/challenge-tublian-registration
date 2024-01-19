import React from "react";
import clsx from "clsx";

export const Container = ({ logo, children, className, name }) => {
  return (
    <div className={clsx(className, "container mx-auto")}>
      <div className="relative">
        <img src={logo} alt="" />
        {/* <div className="absolute top-[500px] left-[30%] bg-base-50 text-3xl font-bold p-3 w-60 text-center">
          {name}
        </div> */}
      </div>
      <div className={clsx(" max-w-[405px] ", className)}>{children}</div>
    </div>
  );
};
