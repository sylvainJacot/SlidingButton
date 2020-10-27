import styled from "styled-components";
import Header from "./03_Organisms/Header/Header";

export default function Layout({ children }) {
  return (
    <AppContainer>
      <ScreenMask>
        <Header />
        {children}
      </ScreenMask>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  background-color: grey;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ScreenMask = styled.div`
  display: block;
  position: relative;
  width: 720px;
  height: 512px;
  overflow: hidden;
  background-color: lightgray;
  border-radius: 16px;
`;
