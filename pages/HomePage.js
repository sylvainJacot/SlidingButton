import styled from "styled-components";
import TabButtons from "../components/03_Organisms/TabsButtons/TabButtons";

const HomePage = () => {
  return <>
  <HomeContainer>
  <TabButtons/>
  </HomeContainer>
  </>;
};

export default HomePage;

const HomeContainer = styled.div`
background-color:white;
height: 100%;
`;
