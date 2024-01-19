import { Link } from "react-router-dom";
import clsx from "clsx";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export const Forms = ({
  children,
  title,
  sub_title,
  className,
  label1,
  label2,
  idInput1,
  idInput2,
  btn,
  action,
  socialBtn = false,
}) => {
  const rules = [
    {
      rule: "8 Characters minimum",
    },
    {
      rule: "One uppercase character",
    },
    {
      rule: "One symbol character",
    },
  ];
  const [firstName, setFirstName] = useState("");
  const handleChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const [lastName, setLastName] = useState("");
  const handleChangeLastName = (e) => {
    setLastName(e.target.value);
  };

  console.log(firstName, lastName);

  return (
    <>
      <header>
        <h1 className=" text-2xl font-bold">{title}</h1>
        <p className="text-base-800 pt-2">
          {sub_title}{" "}
          {socialBtn && (
            <span className=" text-personalise-blue">@John doe</span>
          )}
        </p>
      </header>
      <main className={clsx("mt-7", className)}>
        <form className="flex flex-col bg-transparent text-base text-base-300 gap-[14px] text-left placeholder:text-base-300 ">
          <div className="firstName flex flex-col">
            <input
              value={firstName}
              onChange={handleChangeFirstName}
              type="text"
              id={idInput1}
              placeholder={label1}
              className=" outline-none pl-4 bg-transparent border-b border-base-300 py-4"
            />
          </div>
          <div className="lastName flex flex-col">
            <input
              type="text"
              value={lastName}
              onChange={handleChangeLastName}
              id={idInput2}
              placeholder={label2}
              className=" outline-none pl-4 bg-transparent border-b border-base-300 py-4"
            />
            {socialBtn && (
              <div className="rules text-xs flex gap-x-6 flex-wrap text-base-500 pt-2">
                {rules.map((rule) => {
                  return (
                    <p>
                      <span className="pr-1" key={uuidv4()}>
                        check
                      </span>
                      <span key={uuidv4()}>{rule.rule}</span>
                    </p>
                  );
                })}
              </div>
            )}
          </div>
          <div className="btn mt-7 flex flex-col gap-[14px]">
            <button
              type="submit"
              className="py-2 w-full rounded-[30px] text-center bg-primary-gold text-base-dark"
              onClick={action}
            >
              {btn}
            </button>
            {socialBtn && (
              <>
                {/* hr> */}
                <div className="flex gap-10 align-middle justify-center h-10 mt-6 relative">
                  <hr className="w-full" />
                  <p className=" text-base-500 absolute -top-3">or</p>
                  <hr className="w-full" />
                </div>
                <button className="socialbtn border-1 bg-gradient-to-r from-personalise-yellow  to-personalise-indigo rounded-[72px] ">
                  <div className="flex gap-3 py-3 justify-center align-middle bg-black  w-full h-full rounded-[72px]">
                    <span>
                      <img
                        src="../../../public/images/google-logos.png"
                        alt="logo google"
                      />
                    </span>
                    <span className=" text-base-900 text-base font-light">
                      Sign up with Google
                    </span>
                  </div>
                </button>
              </>
            )}
          </div>
        </form>
      </main>
      <div className=" text-base mt-7">
        <p className=" text-base-700">
          Already have an account?{" "}
          <Link className=" text-base-900" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </>
  );
};
