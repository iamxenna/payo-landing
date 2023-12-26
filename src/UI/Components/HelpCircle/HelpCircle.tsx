import Image from "next/image";
import { FC, useRef, useState } from "react";
import { useClickOutside } from "hooks/useClickOutside";
import { SOCIAL_NETWORKS, HELP_MENU } from "./HelpCircle.constants";

import { Container as MainContainer } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Container, Link, LinkContainer, MenuContainer, TopContent } from "./HelpCircle.styles";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { useStore } from "Core/store";
import SupportModal from "Components/Modals/SupportModal/SupportModal";

export const HelpCircle: FC<{ openResp(): void }> = ({ openResp }) => {
  const {
    store: {
      Device: { isMobile },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isSupportOpen, setIsSupportOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const outsideClickHandler = (): void => setIsShowMenu(false);

  const helpClickHandler = (link?: string): void => {
    if (!link) {
      setIsSupportOpen(true);
      return;
    }
    window.open(link, "_blank");
  };

  useClickOutside(ref, outsideClickHandler);
  return (
    <MainContainer position="fixed" right={!isMobile ? 3.7 : 1.7} zIndex={3} bottom={!isMobile ? 3 : 2}>
      <SupportModal isOpen={isSupportOpen} setIsOpen={(value) => setIsSupportOpen(value || false)} />
      <Flex height={100} width={100} justify="flex-end" align="flex-end">
        {isShowMenu && (
          <MenuContainer ref={ref}>
            <TopContent>
              {HELP_MENU.map(({ text, icon, link }, idx) => (
                <Flex cursor="pointer" direction="row" gap={8} onClick={() => helpClickHandler(link)} key={idx}>
                  <Image src={`/assets/images/helpCircle/${icon}.svg`} width={15} height={15} alt={`${icon}-asset`} />
                  <Typography family="Inter" color="#100C1A" cursor="pointer" weight={500} size={12} lHeight={15}>
                    {text}
                  </Typography>
                </Flex>
              ))}
            </TopContent>
            <LinkContainer>
              {SOCIAL_NETWORKS.map(({ icon, link }, idx) => (
                <Link key={idx} onClick={() => window.open(link, "_blank")}>
                  <Image src={`/assets/images/socials/${icon}.svg`} width={24} height={24} alt={`${icon}-asset`} />
                </Link>
              ))}
            </LinkContainer>
            <Flex justify="center" align="center" gap={4}>
              <Typography weight={500} size={8} lHeight={12} color={"#100C1A"}>
                Powered by
              </Typography>
              <MainContainer margin="0 0 1px 0">
                <Image src={"/assets/images/helpCircle/miniLogo.svg"} width={25} height={11} alt={"mini-payo"} />
              </MainContainer>
            </Flex>
          </MenuContainer>
        )}
        <Container onClick={() => (isMobile ? openResp() : setIsShowMenu(true))}>
          <Image src={"/assets/images/helpCircle/question.svg"} width={16} height={25} alt={"payo-question"} />
        </Container>
      </Flex>
    </MainContainer>
  );
};
