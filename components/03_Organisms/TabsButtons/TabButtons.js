import { useState } from "react";
import styled from "styled-components";
import TabButtonItem from "../../02_Molecules/TabButtonItem";
import { TabButtonsItems } from "../../01_Atoms/TabButtons-Data";

const TabButtons = () => {
  const [buttonProps, setButtonProps] = useState(TabButtonsItems);

  // ////////////   STATE OF SLIDING BUTTON (TRANSLATE X )  ////////////

  const [slidingbtn, setSlidingButton] = useState("0");

  // //////////// HANDLE CLIK BUTTON  ////////////

  const HandleButtonState = (index) => {
    const Buttons = [...buttonProps];

    // Get index of targeted element

    const TargetIndex = Buttons.indexOf(Buttons[index]);

    // Change CSS with the index value for the sliding button

    setSlidingButton(TargetIndex);

    console.log(Buttons);

    // Buttons[index].isActive = true;
    setButtonProps(Buttons);
  };

  // const Buttons = [...buttonProps];
  // console.log(Buttons);

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
        <SlidingButton transformxbutton={slidingbtn}></SlidingButton>
      </ButtonsWrapper>
    </>
  );
};

export default TabButtons;

const ButtonsWrapper = styled.div`
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
  transform: translateX(
    calc(${(props) => props.transformxbutton}* (158px + 16px))
  );
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0;
  line-height: 16px;
`;
