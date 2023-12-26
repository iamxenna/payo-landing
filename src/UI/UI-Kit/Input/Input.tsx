import React, { FC } from "react";
import styled from "styled-components";
import { Flex } from "../Styled/Flex";
import { InputProps } from "./Input.interfaces";

const Label = styled.label`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #aaa5a5;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 127px;
  background: #f9f7f6;
  padding: 18px 22px;
  border: 1px solid var(--white);
  border-radius: 16px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #100c1a;
  resize: none;

  &:focus {
    outline: none;
  }
`;

const PayoInput = styled.input`
  width: 100%;
  height: 59px;
  background: #f9f7f6;
  padding: 0 24px;
  border: 1px solid var(--white);
  border-radius: 16px;

  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #100c1a;

  &:focus {
    outline: none;
  }
`;

export const Input: FC<InputProps> = ({ label, onChange, value, type, variant, placeholder }) => {
  switch (variant) {
    case "textarea":
      return (
        <Flex direction="column" gap={4} width={100}>
          <Label htmlFor="textarea">{label}</Label>
          <TextArea id={`textarea`} onChange={onChange} value={value} placeholder={placeholder} />
        </Flex>
      );
    default:
      return (
        <Flex direction="column" gap={4} width={100}>
          <Label htmlFor="textarea">{label}</Label>
          <PayoInput type={type} onChange={onChange} value={value} placeholder={placeholder} />
        </Flex>
      );
  }
};
