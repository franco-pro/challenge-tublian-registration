import React from "react";
import { Container } from "../container/container";
import { Nav } from "../nav/nav";
import { Checkbox } from "./checkbox";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../forms/button";

export const PlanningPage = () => {
  const checkCards = [
    {
      image: "../../../public/images/Team-project.png",
      title: "Team Projects",
      paragraph: "Hire developers for team projects.",
    },
    {
      image: "../../../public/images/personnal-project.png",
      title: "Personal Projects",
      paragraph: "Hire developers for personal projects.",
    },
    {
      image: "../../../public/images/recruiting.png",
      title: "Recruiting",
      paragraph: "Recruit developers for outstanding companies.",
    },
  ];
  return (
    <React.Fragment>
      <div className="container m-auto">
        <Nav className={"flex justify-between"} />
        <div className=" mt-10">
          <header className="text-center flex flex-col justify-center gap-[14px] mb-10">
            <h1 className=" text-2xl font-bold text-base-900">
              How are you planning to use Tublian?
            </h1>
            <p className=" text-base font-medium text-base-800 max-w-[379px] m-auto px-4">
              We will customize your experience based on your option.
            </p>
          </header>
          <div className="content  m-auto w-full flex gap-7 mb-10">
            {checkCards.map((card) => {
              return (
                <Checkbox
                  title={card.title}
                  sub_title={card.paragraph}
                  image={card.image}
                  key={uuidv4()}
                />
              );
            })}
          </div>
          <Button statebtn={"normal"}>Next</Button>
        </div>
      </div>
    </React.Fragment>
  );
};
