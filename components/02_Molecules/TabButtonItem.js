import styled from "styled-components";

const TabButtonItem = (props) => {
  return (
    <>
      <ButtonWrapper
        onClick={props.onClick}
        ItemOrderlist={props.ItemOrderlist}
        isActive={props.isActive}
      >
        {props.label}
      </ButtonWrapper>
    </>
  );
};

export default TabButtonItem;

const ButtonWrapper = styled.button`
  z-index: 11;
  position: relative;
  margin-left: 8px;
  margin-right: 8px;
  height: 52px;
  width: 158px;
  border-radius: 12px;
  border: 0;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
  background-color: transparent;
  cursor: pointer;
  color: ${(props) => (props.isActive ? "White" : "Black")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms ease-in-out 200ms;

  &:hover {
    filter: opacity(0.9);
    background-color: rgba(31, 56, 197, 0.08);
  }

  &:focus {
    outline: 0;
  }

  &:before {
    content: "${(props) => props.ItemOrderlist}";
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: text-bottom;
    padding: 2px;
    width: 20px;
    height: 20px;
    margin-right: 12px;
    font-size: 12px;
    border-radius: 50%;
    transition: all 400ms ease-in-out 200ms;
    color: ${(props) => (props.isActive ? "White" : "#82c315")};
    background-color: ${(props) =>
      props.isActive ? "#ffffff20" : "#82c31520"};
  }
`;
