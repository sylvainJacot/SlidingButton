import React from "react";
import styled from "styled-components";
import Bullets from "../../02_Molecules/Bullets";


const Header = (props) => {
  return (
    <>
      <HeaderContainer>
        <Bullets />
      </HeaderContainer>
      {props.children}
    </>
  );
};

export default Header;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: #272b30;
`;
