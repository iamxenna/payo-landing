import React, { Dispatch, FC, SetStateAction } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { headerHeight } from "../../../../styles/global";

const Wrapper = styled.div`
  width: 95%;
  height: ${headerHeight}px;
  background: rgba(26, 12, 35, 0.6);
  backdrop-filter: blur(30px);
  position: fixed;
  top: 18px;
  padding: 0 28px 0 32px;
  left: 0;
  right: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  border-radius: 26px;
  margin: 0 auto;
  z-index: 3;
`;

export const BurgerMenu: FC<{
  isOpenHeaderMenuResp: boolean;
  setIsOpenHeaderMenuResp: Dispatch<SetStateAction<boolean>>;
}> = ({ setIsOpenHeaderMenuResp, isOpenHeaderMenuResp }) => {
  return (
    <Wrapper>
      <Flex align="center" justify="space-between" width={100} margin={"0 8px"}>
        <Image src={"/assets/images/Logo.svg"} width={87} height={36} quality={100} alt="payo-logo" />
        <Flex cursor={"pointer"} gap={16}>
          <Flex margin="auto 0" onClick={() => setIsOpenHeaderMenuResp(!isOpenHeaderMenuResp)}>
            <Image src={"/assets/images/BBar.svg"} width={44} height={14} quality={100} alt={"payo-bar"} />
          </Flex>
        </Flex>
      </Flex>
    </Wrapper>
  );
};
