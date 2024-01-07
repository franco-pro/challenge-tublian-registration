import React from "react";
import clsx from "clsx";

export const Container = ({ logo, children, className }) => {
  return (
    <div className={clsx(className, "container mx-auto")}>
      <div className="">
        <img src={logo} alt="" />
      </div>
      <div className={clsx(" max-w-[405px]", className)}>{children}</div>
    </div>
  );
};
