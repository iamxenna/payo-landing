import { tablet } from "Constants/Devices";
import { useStore } from "Core/store";
import Image from "next/image";
import { useRouter } from "next/router";
import styled from "styled-components";
import { Button } from "UI/UI-Kit/Button/Button";
import { Container } from "UI/UI-Kit/Styled/Container";
import { Flex } from "UI/UI-Kit/Styled/Flex";
import { Typography } from "UI/UI-Kit/Styled/Typography";

const TitleText = styled.h1`
  font-weight: 800;
  font-size: 128px;
  line-height: 192px;
  letter-spacing: 0.035em;
  color: var(--purple-light);
  text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.18);
  margin-bottom: 33px;

  @media screen and (max-width: ${tablet}px) {
    font-size: 70px;
    text-align: center;
    margin-bottom: 13px;
  }
`;

const Light = styled.div`
  position: absolute;
`;

function NotFound() {
  const router = useRouter();
  const {
    store: {
      Device: { isDesktop },
    },
  } = useStore((store) => ({
    Device: store.Device,
  }));
  return (
    <Flex
      direction={isDesktop ? "row" : "column"}
      justify="center"
      height={100}
      margin={isDesktop ? "7rem 0 auto 0" : "3rem 0"}
      align="center"
      gap={isDesktop ? 112 : 30}
    >
      <Light>
        <Image src={"/assets/images/hovers/ourMissionHoverCenter.png"} width={512} height={512} quality={100} />
      </Light>
      <Image src={"/assets/images/404.svg"} width={530} height={512} quality={100} />
      <Flex
        direction="column"
        width={!isDesktop && 100}
        padding={!isDesktop && "0 1rem"}
        align={isDesktop ? "flex-start" : "center"}
      >
        <TitleText>Whoops</TitleText>
        <Typography weight={700} size={24} lHeight={36} tAlign={!isDesktop && "center"} color={"var(--white)"}>
          It is a 404 Error! Please check the URL.
        </Typography>
        <Container margin={isDesktop ? "112px 0 0 0" : "50px 0 0 0"}>
          <Button variant="secondary" height={"55px"} width={"347px"} onClick={() => router.push("/")}>
            Back to home
          </Button>
        </Container>
      </Flex>
    </Flex>
  );
}

export default NotFound;
