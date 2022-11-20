import React,{useState} from "react";
import { 
  Container, 
  ToogleLabel, 
  ToogleSelector } from "./styles";

function Toogle() {
  
  const [toogleOn, setToogleOn] = useState(false)

  return (
    <Container>
      <ToogleLabel>Light</ToogleLabel>
      <ToogleSelector 
        checked={toogleOn}
        uncheckedIcon={false} 
        checkedIcon={false} 
        onChange={() => setToogleOn(!toogleOn)} 
      />
      <ToogleLabel>Dark</ToogleLabel>
    </Container>
  );
}

export default Toogle;
