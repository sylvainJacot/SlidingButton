
import styled from "styled-components";

const Bullet = (props) => {
  return (
    <>
        <BulletItem
          BulletColor={props.BulletColor}
          size={props.size}
        ></BulletItem>
    </>
  );
};

export default Bullet;

const BulletItem = styled.div`
  display: block;
  position: relative;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  border-radius: 50%;
  background-color: ${(props) => props.BulletColor};
  margin-left: 10px;
`;
