import { useState } from "react";
import styled from "styled-components";
import TabButtonItem from "../../02_Molecules/TabButtonItem";
import { TabButtonsItems } from "../../01_Atoms/TabButtons-Data";

const TabButtons = () => {

  const [buttonProps, setButtonProps] = useState(TabButtonsItems);

  const HandleButtonState = (index) => {
    const TabButtons = [...buttonProps];
    TabButtons[index].isActive = !TabButtons[index].isActive;
    // setButtonProps(TabButtons);
    console.log(TabButtons[index].isActive);
  };

  return (
    <>
      <ButtonsWrapper>
        {TabButtonsItems.map((item, index) => (
          <div key={item.id}>
            <TabButtonItem
              label={item.label}
              ItemOrderlist={item.id}
              isActive={item.isActive}
              onClick={() => HandleButtonState(index)}
            />
          </div>
        ))}
        <SlidingButton></SlidingButton>
      </ButtonsWrapper>
    </>
  );
};

export default TabButtons;

const ButtonsWrapper = styled.form`
  position: relative;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 24px;
  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
  align-items: center;
`;

const SlidingButton = styled.div`
  z-index: 10;
  position: absolute;
  left: 0;
  top: 0;
  margin-left: 8px;
  margin-right: 8px;
  height: 52px;
  width: 158px;
  border-radius: 12px;
  border: 0;
  background-color: #1f38c5;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(12, 17, 43, 0.12),
    0 1px 4px 0 rgba(12, 17, 43, 0.16);
  transition: transform 600ms ease-in-out;
  transform: translateX(0);
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
`;
