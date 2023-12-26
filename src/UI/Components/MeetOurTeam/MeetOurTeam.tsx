import React, { useMemo, useState, useRef } from "react";
import Image from "next/image";
import { useDraggable } from "react-use-draggable-scroll";
import { Scroll } from "UI/UI-Kit/Scroll/Scroll";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";
import { TEAM } from "./MeetOurTeam.constants";
import { ITeamMember } from "./MeetOurTeam.interfaces";
import { Avatar, Description, MemberCard, MemberContainer } from "./MeetOurTeam.styles";
import { Container } from "UI/UI-Kit/Styled/Container";
import { useStore } from "Core/store";
import { Absolute } from "../../UI-Kit/Styled/Absolute";

export const MeetOurTeam = () => {
  const [active, setActive] = useState<number>(0);
  const ref = useRef();

  const { events } = useDraggable(ref);

  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));

  const titles = {
    main: "Our team",
    advisors: "Advisors",
    consultants: "Consultants",
  };

  const members: ITeamMember[] = useMemo(() => {
    const keys = Object.keys(TEAM);
    return TEAM[keys[active]];
  }, [active]);

  return (
    <Container position="relative" zIndex={1} id={"team"}>
      <Absolute
        bgImage={"teamEllipseLeft"}
        isActive={true}
        width={"320px"}
        height={"800px"}
        zIndex={-1}
        opacity={"0.2"}
        background={"#122B99"}
        filter={"blur(125px)"}
        mixBlendMode={"hard-light"}
        left={"29rem"}
        top={"11rem"}
        transform={"rotate(-117.98deg)"}
      />
      <Absolute
        bgImage={"teamEllipseRight"}
        isActive={true}
        width={"320px"}
        height={"800px"}
        zIndex={-1}
        opacity={"0.2"}
        background={"#122B99"}
        filter={"blur(125px)"}
        mixBlendMode={"hard-light"}
        right={"26rem"}
        top={"5rem"}
        transform={"rotate(-77.18deg)"}
      />
      <Flex justify="center" gap={isDesktop ? 80 : 40}>
        <Flex direction="column" gap={isDesktop ? 24 : 8} align="flex-end">
          <Typography weight={600} size={isDesktop ? 48 : 36} lHeight={70} tAlign="right">
            Meet our team
          </Typography>
          <Typography size={isDesktop ? 20 : 18} lHeight={isDesktop ? 30 : 27} tAlign="right">
            We are pleased to present <br /> our close-knit and inspired team!
          </Typography>
        </Flex>
        <Scroll sHeight={171} active={active} max={3} sColor="var(--blue)" />
        <Flex direction="column" gap={28} justify={"center"}>
          {Object.keys(TEAM).map((el, idx) => (
            <Typography
              key={idx}
              weight={700}
              size={24}
              lHeight={31}
              color={active === idx ? "var(--blue)" : "var(--white)"}
              cursor={"pointer"}
              onClick={() => setActive(idx)}
            >
              {titles[el]}
            </Typography>
          ))}
        </Flex>
      </Flex>
      <MemberContainer ref={ref} {...events}>
        {members.map((el, idx) => (
          <MemberCard {...el} key={idx}>
            <Avatar part={Object.keys(TEAM)[active]} {...el} />
            <Description>
              <Flex align="center" gap={12}>
                <Typography weight={600} size={isDesktop ? 20 : 13} lHeight={isDesktop ? 30 : 20}>
                  {el.name}
                </Typography>
                {el.linkedIn && (
                  <Image
                    onClick={() => window.open(el.linkedIn, "_blank")}
                    style={{ cursor: "pointer" }}
                    src={"/assets/images/linkedIn.svg"}
                    width={24}
                    height={24}
                    quality={100}
                    alt={"payo-linkedin"}
                  />
                )}
              </Flex>
              <Typography lHeight={isDesktop ? 17 : 11} size={isDesktop ? 16 : 9} color={"#7E8493"}>
                {el.cfunction}
              </Typography>
            </Description>
          </MemberCard>
        ))}
      </MemberContainer>
    </Container>
  );
};
