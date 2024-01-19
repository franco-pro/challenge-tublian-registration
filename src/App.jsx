import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Container } from "./components/container/container";
import { Nav } from "./components/nav/nav";
import { Forms } from "./components/forms/form";
import { PlanningPage } from "./components/checkbox_cart/planingPage";
import { SelectCart } from "./components/checkbox_cart/selectCard";
import { ChoiceCardPopup } from "./components/choiceCardPop-up";
import { ContainerPage } from "./components/container/containerPage";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  let handleButtonClick = () => {
    setStep(step + 1);
    console.log("step :", step);
  };

  return (
    <BrowserRouter>
      <div className={"bg-black "}>
        {step === 1 && (
          <Container
            logo={"../public/images/Image_container.png"}
            className={"flex gap-[50px] bg-black text-white w-full"}
          >
            <div className="mt-4">
              <Nav className={"justify-start flex-col mb-10"} />
              <Forms
                action={handleButtonClick}
                title={"Get Started"}
                sub_title={"Start recruiting streetcred developers, Today!"}
                idInput1={"firstName"}
                label1={"First Name"}
                idInput2={"lastName"}
                label2={"Last Name"}
                btn={"Process"}
              />
            </div>
          </Container>
        )}
        {step === 2 && (
          <Container
            logo={"../public/images/Image_container2.png"}
            className={"flex gap-[50px] bg-black text-white w-full"}
          >
            <div className="mt-4">
              <Nav className={"justify-start flex-col mb-10"} />
              <Forms
                action={handleButtonClick}
                title={"Create Account"}
                sub_title={`Creating account for `}
                idInput1={"email"}
                label1={"Email"}
                idInput2={"password"}
                label2={"Password"}
                btn={"Create Account"}
                socialBtn={true}
              />
            </div>
          </Container>
        )}

        {step === 3 && (
          <div>
            <PlanningPage action={handleButtonClick} />
          </div>
        )}
        {step === 4 && (
          <div>
            <SelectCart />
          </div>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
