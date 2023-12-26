import styled from "styled-components";

const MenuContainer = styled.div`
  position: absolute;
  right: 1.9rem;
  bottom: 2rem;
  width: 235px;
  height: 236px;
  background: linear-gradient(0deg, #ffffff, #ffffff), rgba(255, 255, 255, 0.04);
  box-shadow: inset 0px 0px 68px rgba(255, 255, 255, 0.05), inset 0px 2px 4px rgba(255, 255, 255, 0.24);
  backdrop-filter: blur(24px);
  border-radius: 35px;
  z-index: 0;
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 18px 26px 36px 26px;
`;

const Link = styled.div`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const Container = styled.div`
  width: 68px;
  height: 68px;
  border-radius: 99999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #303b68;
  box-shadow: inset 0px 0px 40px rgba(255, 255, 255, 0.39), inset 0px 4px 4px rgba(255, 255, 255, 0.44);
  backdrop-filter: blur(10px);
`;

const TopContent = styled.div`
  padding: 32px 33px 24px 33px;
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid #2c2936;
`;

export { MenuContainer, Container, TopContent, Link, LinkContainer };
