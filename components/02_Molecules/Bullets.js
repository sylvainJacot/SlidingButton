import styled from "styled-components";
import Bullet from "../01_Atoms/Bullet";

const Bullets = () => {
  return (
    <>
      <BulletsContainer>
        <Bullet BulletColor={"#FD7A8C"} size={"12px"}/>
        <Bullet BulletColor={"#FFE895"} size={"12px"}/>
        <Bullet BulletColor={"#80EBFF"} size={"12px"}/>
      </BulletsContainer>
    </>
  );
};

export default Bullets;

const BulletsContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
