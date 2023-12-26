import { tablet } from "Constants/Devices";
import styled from "styled-components";
import { ITeamMember } from "./MeetOurTeam.interfaces";

const MemberContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  position: relative;
  overflow-x: scroll;
  padding: var(--paddings);
  cursor: pointer;
`;

const MemberCard = styled.div<ITeamMember>`
  min-width: 334px;
  height: 432px;

  background: rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(30px);

  border-radius: 20px;

  @media screen and (max-width: ${tablet}px) {
    min-width: 217.1px;
    height: 281.25px;
  }
`;

const Avatar = styled.div<ITeamMember & { part: string }>`
  width: 100%;
  height: 334px;
  background-image: ${({ part, icon }) => `url(/assets/images/team/${part}/${icon}.png)`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: ${tablet}px) {
    height: 217.1px;
  }
`;

const Description = styled.div`
  padding: 19px 28px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: ${tablet}px) {
    padding: 12px 18px;
    gap: 5px;
  }
`;

export { MemberCard, MemberContainer, Description, Avatar };
