import React, { FC, useCallback, useReducer, useRef } from "react";
import styled from "styled-components";
import type { ModalProps, SupportState } from "./SupportModal.interfaces";
import styles from "./styles.module.css";
import { Input } from "UI/UI-Kit/Input/Input";
import Select, { Option } from "UI/UI-Kit/Select/Select";
import { useClickOutside } from "hooks/useClickOutside";
import { CloseBig } from "UI/Components/Assets/CloseBig";
import { HttpClient } from "libs/HttpClient";
import { Notification } from "libs/Notification";

const SubmitButton = styled.button`
  width: 100%;
  height: 59px;
  outline: none;
  border: none;
  margin-top: 10px;
  background: linear-gradient(89.86deg, #413068 -19.69%, #8f79bf 139.19%);
  box-shadow: 3px 4px 7px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  font-weight: 500;
  font-size: 16px;
  line-height: 138.52%;
  letter-spacing: 0.035em;
  color: #fff;
  cursor: pointer;
`;

const SupportModal: FC<Omit<ModalProps, "children">> = ({ isOpen, setIsOpen }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [questionData, setQuestionData] = useReducer(
    (oldState: SupportState, newState: Partial<SupportState>) => ({
      ...oldState,
      ...newState,
    }),
    {
      name: "",
      email: "",
      question: "Authorization",
      description: "",
    },
  );

  const questionType = ["Authorization", "Showcase", "Payment", "Profile", "Account", "Other"];

  const sendClickHandler = useCallback(async () => {
    try {
      await HttpClient.post("/contact", {
        name: questionData.name,
        email: questionData.email,
        subject: questionData.question,
        comment: questionData.description,
      });
      Notification.success("Your message was successfully sent");
    } catch (err) {
      Notification.error("There was a failure while sending, try again");
    }
  }, [questionData]);

  useClickOutside(modalRef, (ev) => {
    if (!modalRef.current?.contains(ev.target as Node)) {
      setIsOpen(false);
    }
  });

  return (
    <div className={styles.wrapper}>
      {isOpen && (
        <div className={styles.content} ref={modalRef}>
          <div className={styles.closeModal} onClick={() => setIsOpen(false)}>
            <CloseBig />
          </div>
          <div className={styles.container}>
            <h1 className={styles.supportHead}>Support</h1>
            <div className={styles.inputs}>
              <Input
                variant={"usual"}
                label={"Name"}
                type={"text"}
                value={questionData.name}
                onChange={({ target }) => setQuestionData({ name: target.value })}
                placeholder={"Type a name"}
              />
              <Input
                variant={"usual"}
                label={"Email"}
                type={"text"}
                value={questionData.email}
                onChange={({ target }) => setQuestionData({ email: target.value })}
                placeholder={"Type an email "}
              />
              <Select
                onChange={(value) => setQuestionData({ question: value as string })}
                value={questionData.question}
                title={"Subjects"}
              >
                {questionType.map((el, idx) => (
                  <Option key={idx} value={el}>
                    {el}
                  </Option>
                ))}
              </Select>
              <Input
                variant={"textarea"}
                label={"Description"}
                type={"text"}
                value={questionData.description}
                onChange={({ target }) => setQuestionData({ description: target.value })}
                placeholder={"Please describe your request. Max 500 symbols."}
              />
            </div>
            <SubmitButton onClick={sendClickHandler}>Send а request</SubmitButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default SupportModal;
