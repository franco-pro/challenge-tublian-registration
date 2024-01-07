import clsx from "clsx";
import { Nav } from "../nav/nav";
import { v4 as uuidv4 } from "uuid";

export const SelectCart = () => {
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
      color: "bg-[#B29BF3]",
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
      color: "bg-[#79BBFF]",
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
      color: "bg-[#22BFD6]",
    },
  ];
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
          <div className="btn text-center">we go to work here later</div>
        </header>
        <div className="container-card p-1 rounded-[20px] flex gap-x-[10px]">
          {dataCards.map((data) => {
            return (
              <div
                className="card border border-base-100 rounded-[20px] min-w-[201px] max-h-[464px] p-5"
                key={uuidv4()}
              >
                <button
                  className={clsx(
                    "rounded-[10px] mb-[14px] px-5 py-[3px]",
                    data.color
                  )}
                >
                  {data.title}
                </button>
                <div className="mb-5 flex align-baseline">
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
                  <div className="elements flex flex-col gap-y-3">
                    <div className="single_elememt flex align-top justify-start gap-x-2">
                      <img
                        src="../../../public/images/tick-circle.svg"
                        alt="tick circle"
                      />
                      <span className="text-sm font-medium text-base-900">
                        {data.feature_1}
                      </span>
                    </div>
                    <div className="single_elememt flex align-top justify-start gap-x-2">
                      <img
                        className=" shrink-0"
                        src="../../../public/images/tick-circle.svg"
                        alt="tick circle"
                      />
                      <span className="text-sm font-medium text-base-900">
                        {data.feature_2}
                      </span>
                    </div>
                    <div className="single_elememt flex align-top justify-start gap-x-2">
                      <img
                        src="../../../public/images/tick-circle.svg"
                        alt="tick circle"
                      />
                      <span className="text-sm font-medium text-base-900">
                        {data.feature_3}
                      </span>
                    </div>
                    <div className="single_elememt flex align-top justify-start gap-x-2">
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
                    <button>Subcription</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
