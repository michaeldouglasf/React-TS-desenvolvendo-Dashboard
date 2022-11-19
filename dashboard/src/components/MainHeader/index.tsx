import React, { useMemo } from "react";
import { Container, Profile, Welcome, UserName } from "./styles";
import emojis from "../../utils/emojis";
import Toogle from "../Toogle/index";

function MainHeader() {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  return (
    <Container>
      <Toogle />
      <Profile>
        <Welcome>Ola, {emoji}</Welcome>
        <UserName>Michael Douglas</UserName>
      </Profile>
    </Container>
  );
}

export default MainHeader;
