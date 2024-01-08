import clsx from "clsx";
import { Nav } from "../nav/nav";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../forms/button";
import { useState } from "react";

export const SelectCart = () => {
  const [selectPlan, setSelectPlan] = useState("month");
  const handleSelectPlan = (e) => {
    setSelectPlan(e.target.value);
  };
  //differents data used in cards
  const dataCards = [
    {
      title: "Pro",
      price: "$19.99",
      limit: "/Month",
      feature_1: "Advanced search for developer profiles with filters.",
      feature_2: "Increased monthly messages to developers.",
      feature_3: "Priority support.",
      feature_4_check: false,
      textbtn: "Subscribe",
      colorTextBtn: "text-base-dark",
      colorTitle: "bg-[#B29BF3]",
      btnColor: "bg-primary-gold",
      border: "border border-[#B29BF3]",
      gradient: "bg-gradient-to-t from-[#855FEF] to-[#5435AA]",
    },
    {
      title: "Business Plan",
      price: "$49.99",
      limit: "/Month",
      feature_1:
        "Premium access to developer profiles and advanced search filters.",
      feature_2: "Increased monthly messages to developers.",
      feature_3: "Dedicated account manager for personalized support.",
      feature_4: "Early access to new features and updates.",
      feature_4_check: true,
      textbtn: "Subscribe",
      colorTextBtn: "text-base-dark",
      colorTitle: "bg-[#79BBFF]",
      btnColor: "bg-primary-gold",
      border: "border border-[#79BBFF]",
      gradient: "bg-gradient-to-t from-[#0881FF] to-[#0B4F95]",
    },
    {
      title: "Enterprise Plan",
      price: "Custom Pricing",
      limit: "",
      feature_1: "Tailored solutions for large enterprises or agencies.",
      feature_2:
        "Full access to all platform features, including custom integrations.",
      feature_3: "Unlimited monthly messages to developers.",
      feature_4: "Priority support with 24/7 availability.",
      feature_4_check: true,
      textbtn: "Contact Us",
      colorTextBtn: "white",
      colorTitle: "bg-[#22BFD6]",
      btnColor:
        "bg-gradient-to-r from-personalise-yellow to-personalise-indigo",
      border: "border border-[#22BFD6]",
      gradient: "bg-gradient-to-t from-[#068092] to-[#043B43]",
    },
  ];
  const hoverGradient =
    "hover:bg-gradient-to-r hover:from-personalise-yellow hover:to-personalise-indigo";
  return (
    <>
      <div className="container m-auto">
        <Nav className={"flex justify-between"} />
        <header className=" mb-[60px] mt-10">
          <div className="payement_plan w-[379px] h-[96px] flex flex-col flex-wrap gap-y-[14px] m-auto mb-10">
            <h1 className="text-2xl font-bold text-center text-white">
              Payement Plan
            </h1>
            <p className="text-base font-medium text-center text-base-800 px-4">
              We will customize your experience based on your option.
            </p>
          </div>
          {/* system radio */}
          <div className="btn flex justify-between items-center border border-base-100 bg-base-50 rounded-[10px] w-[360px] h-12 mx-auto">
            {/* input value monthly */}
            <div
              className={clsx(
                " w-[178px] h-10 m-1 text-base-900 text-xl font-bold capitalize flex justify-center items-center rounded-[5px]",
                selectPlan === "month" &&
                  "bg-gradient-to-r from-personalise-yellow to-personalise-indigo"
              )}
            >
              <input
                type="radio"
                id="month"
                name="plan"
                value="month"
                checked={selectPlan === "month"}
                onChange={handleSelectPlan}
                className=" appearance-none"
              />
              <label className="cursor-pointer" htmlFor="month">
                Monthly
              </label>
            </div>
            {/* input value annually */}
            <div
              className={clsx(
                "bg-transparent w-[178px] h-10 m-1 text-base-800 text-xl font-bold capitalize flex justify-center items-center rounded-[5px]",
                selectPlan === "annual" &&
                  "bg-gradient-to-r from-personalise-yellow to-personalise-indigo text-base-900"
              )}
            >
              <input
                type="radio"
                id="annual"
                name="plan"
                value="annual"
                className="appearance-none"
                checked={setSelectPlan === "year"}
                onChange={handleSelectPlan}
              />
              <label className="cursor-pointer" htmlFor="annual">
                Annually{" "}
                <span className="w-[57px] h-6 bg-[#445742] rounded-[33px] text-xs font-bold text-[#76F368] py-1 px-[6px]">
                  20% off
                </span>
              </label>
            </div>
          </div>
        </header>
        <div
          className={clsx(
            "container-card rounded-[20px] flex gap-x-[28px] justify-center"
          )}
        >
          {dataCards.map((data) => {
            return (
              //start differents cards
              <div
                key={uuidv4()}
                className={clsx(
                  "rounded-[20px] max-w-[301px] max-h-[464px] justify-between flex flex-col gap-y-5 p-1 cursor-pointer",
                  hoverGradient
                )}
              >
                <div className="card border border-base-100 rounded-[20px] max-w-[301px] max-h-[464px] p-5 flex-1 justify-between flex flex-col gap-y-5 bg-base-50">
                  <header className="">
                    <button
                      className={clsx(
                        "rounded-[10px] mb-[14px] px-5 py-[3px] text-base-900",
                        data.colorTitle,
                        data.border,
                        data.gradient
                      )}
                    >
                      {data.title}
                    </button>
                    <div className="mb-5 flex items-end">
                      <h2 className="text-2xl font-bold text-base-900">
                        {data.price}
                      </h2>
                      <span className="text-lg font-medium text-base-700 m-0 p-0">
                        {data.limit}
                      </span>
                    </div>

                    <div className="">
                      <h3 className="text-xl font-medium text-base-700 mb-2">
                        Feature:
                      </h3>
                      {/* start displays elements */}
                      <div className="elements flex flex-col gap-y-3 max-w-[261px] max-h-[216px]">
                        <div className="single_elememt flex items-start justify-start gap-x-2">
                          <img
                            src="../../../public/images/tick-circle.svg"
                            alt="tick circle"
                          />
                          <span className="text-sm font-medium text-base-900">
                            {data.feature_1}
                          </span>
                        </div>
                        <div className="single_elememt flex items-start justify-start gap-x-2">
                          <img
                            className=" shrink-0"
                            src="../../../public/images/tick-circle.svg"
                            alt="tick circle"
                          />
                          <span className="text-sm font-medium text-base-900">
                            {data.feature_2}
                          </span>
                        </div>
                        <div className="single_elememt flex items-start justify-start gap-x-2">
                          <img
                            src="../../../public/images/tick-circle.svg"
                            alt="tick circle"
                          />
                          <span className="text-sm font-medium text-base-900">
                            {data.feature_3}
                          </span>
                        </div>
                        <div className="single_elememt flex items-start justify-start gap-x-2">
                          {data.feature_4_check && (
                            <div className="single_elememt flex align-top justify-start gap-x-2">
                              <img
                                src="../../../public/images/tick-circle.svg"
                                alt="tick circle"
                              />
                              <span className="text-sm font-medium text-base-900">
                                {data.feature_4}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </header>
                  <Button
                    statebtn={"normal"}
                    className={clsx(
                      data.btnColor,
                      data.colorTextBtn,
                      "w-full items-end text-base font-medium"
                    )}
                  >
                    {data.textbtn}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
