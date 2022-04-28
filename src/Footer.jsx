import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -10px;
  width: 100%;
`;

export function Footer() {
    return (
        <FooterDiv>
            Made with ♥ by<a href="https://www.linkedin.com/in/arsh-raina-727106197/"> ARSH RAINA</a>
        </FooterDiv>
    );
}