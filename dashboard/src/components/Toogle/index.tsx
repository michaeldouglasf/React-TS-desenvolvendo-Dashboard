import React from "react";
import { 
  Container, 
  ToogleLabel, 
  ToogleSelector } from "./styles";

function Toogle() {
  return (
    <Container>
      <ToogleLabel>Light</ToogleLabel>
      <ToogleSelector 
        checked
        uncheckedIcon={false} 
        checkedIcon={false} 
        onChange={() => console.log("mudou")} 
      />
      <ToogleLabel>Dark</ToogleLabel>
    </Container>
  );
}

export default Toogle;
