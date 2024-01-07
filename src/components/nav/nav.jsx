import * as React from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

export const Nav = ({ logo, children, className }) => {
  logo = logo = "../public/images/Logo.png";
  const links = [
    {
      id: 1,
      name: "1.Get Started",
      path: "/",
    },
    {
      id: 2,
      name: "2.Create Account",
      path: "/create-account",
    },
    { id: 3, name: "3.Account Setup", path: "/account-setup" },
    { id: 4, name: "Payement", path: "/payement" },
  ];
  return (
    <div className={clsx(className, "flex ")}>
      <div className="">
        <img src={logo} className={"w-[122.6px], h-[25px]"} alt="" />
      </div>
      <div className={className}>
        {links.map((link) => {
          return (
            <Link
              to={link.path}
              className=" text-base-300 text-sm mr-3"
              key={link.id}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
