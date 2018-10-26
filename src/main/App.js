import React from "react";
import BodyComponent from "./body/Component";
import FooterComponent from "./footer/Component";
import HeaderComponent from "./header/Component";
import NavbarContainer from "./navbar/Container";

const App = () => {
  return (
    <div>
      <NavbarContainer />
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

export default App;
