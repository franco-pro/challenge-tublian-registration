import "../../../styles/checkbox.css";
import { useState } from "react";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid"; // Import uuid for unique IDs

export const Checkbox = ({ title, sub_title, image }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChangeChecked = (e) => {
    setIsChecked(e.target.checked);
    console.log(e.target.checked);
  };
  const uniqueId = uuidv4(); //Generate id
  const grandient =
    "bg-gradient-to-r from-personalise-yellow to-personalise-indigo";
  const grandientChecked =
    "checked:bg-gradient-to-r checked:from-personalise-yellow checked:to-personalise-indigo";
  return (
    <>
      <div
        className={clsx(
          isChecked && grandient,
          " p-1 w-[250px] h-[288px] rounded-[20px]"
          // grandientHover
        )}
      >
        <form
          className={clsx(
            " flex flex-col w-full h-full px-[26px] justify-center align-middle bg-base-50 border-base-100 rounded-[20px] relative "
          )}
        >
          <input
            checked={isChecked}
            type="checkbox"
            id={uniqueId} // Use the unique ID here
            onChange={handleChangeChecked}
            className={clsx(
              "appearance-none border border-base-100 bg-base-50 hover:border-base-50 hover:bg-base-100 rounded-full absolute w-6 h-6 top-[14px] right-[14px] peer",
              grandientChecked
            )}
          />
          <svg
            className="
      absolute 
      w-5 h-5 hidden peer-checked:block text-black p-1 pointer-events-none top-[16px] right-[16px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <label
            htmlFor={uniqueId}
            className="flex flex-col justify-center align-middle gap-[18px] text-white text-center  cursor-pointer"
          >
            <div className="images">
              <img src={image} alt="" />
            </div>
            <div className="flex flex-col gap-2">
              <h2 className=" text-xl font-bold">{title}</h2>
              <p className=" text-base-800 text-base font-medium">
                {sub_title}
              </p>
            </div>
          </label>
        </form>
      </div>
    </>
  );
};
