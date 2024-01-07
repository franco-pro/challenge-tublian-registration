import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { Container } from "./components/container/container";
import { Nav } from "./components/nav/nav";
import { Forms } from "./components/forms/form";
import { PlanningPage } from "./components/checkbox_cart/planingPage";
import { SelectCart } from "./components/checkbox_cart/selectCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div className="bg-black">
        <Container
          logo={"../public/images/Image_container.png"}
          className={"flex gap-[50px] bg-black text-white w-full"}
        >
          <div className="mt-4">
            <Nav className={"justify-start flex-col mb-10"} />
            <Forms
              title={"Get Started"}
              sub_title={"Start recruiting streetcred developers, Today!"}
              label1={"First Name"}
              label2={"Last Name"}
              btn={"Process"}
            />
          </div>
        </Container>
        <Container
          logo={"../public/images/Image_container2.png"}
          className={"flex gap-[50px] bg-black text-white w-full"}
        >
          <div className="mt-4">
            <Nav className={"justify-start flex-col mb-10"} />
            <Forms
              title={"Create Account"}
              sub_title={`Creating account for `}
              label1={"Email"}
              label2={"Password"}
              btn={"Create Account"}
              socialBtn={true}
            />
          </div>
        </Container>

        <PlanningPage />
        <SelectCart />
      </div>
    </BrowserRouter>
  );
}

export default App;
