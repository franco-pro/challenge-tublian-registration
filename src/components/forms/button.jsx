import clsx from "clsx";
import { Children } from "react";

export const Button = ({ icon, children, statebtn, className }) => {
  let resultState = "";
  switch (statebtn) {
    case "normal":
      resultState =
        "rounded-[30px] bg-primary-gold flex justify-center align-middle text-base fond-medium text-base-900 hover:bg-primary-gold-100 active:bg-primary-gold-50";
      break;

    case "personalise":
      resultState =
        "rounded-[30px] bg-transparent border border-red-600 flex justify-center align-middle text-base fond-medium text-base-900 hover:bg-gradient-to-r hover:from-personalise-yellow hover:to-personalise-indigo active:text-primary-gold-50";
      break;

    default:
      console.log("state don't exist");
  }

  return (
    <>
      <button
        type="button"
        className={clsx(
          "w-[405px] py-2 m-auto text-base-dark",
          resultState,
          className
        )}
      >
        {children}
      </button>
    </>
  );
};
