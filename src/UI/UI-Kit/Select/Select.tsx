import React, { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import { CSSTransition } from "react-transition-group";
import styles from "./styles.module.css";

import type { OptionProps, SelectProps } from "./Select.interfaces";
import { SelectArrow } from "Components/Assets/SelectArrow";

export const Option: React.FC<OptionProps> = ({ value, children, extraSymbol, ...props }) => (
  <li data-select-value={value}>
    {extraSymbol}
    {children}
  </li>
);

const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  children,
  customClassName,
  customWrapperClassName,
  title,
  disabled = false,
  isCenter = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectWrapperNode = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (disabled) return;
      const target = e.target as HTMLElement;
      if (target.hasAttribute("data-select-value")) {
        (children as { props: { value: string } }[]).forEach((el) => {
          if (el.props.value === target.getAttribute("data-select-value")) {
            onChange(target.getAttribute("data-select-value") as string);
          }
        });
        setIsOpen(!isOpen);
      }
      if (selectWrapperNode.current?.contains(target as Node)) {
        setIsOpen(!isOpen);
      }
      if (!selectWrapperNode.current?.contains(target as Node)) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [isOpen, disabled]);

  return (
    <div className={customWrapperClassName}>
      {title && <p className={styles.title}>{title}</p>}
      <div
        className={classNames(
          styles.wrapper,
          disabled && styles.disabled,
          customClassName,
          styles.icon[(disabled ? styles.disabled : "", isOpen ? styles.rotated : "") as any],
        )}
        ref={selectWrapperNode}
      >
        <label
          className={classNames(styles.label, {
            [styles.isCenter]: isCenter,
          })}
        >
          {value}
        </label>
        <SelectArrow />
        <CSSTransition
          in={isOpen}
          timeout={200}
          unmountOnExit
          classNames={{
            enter: styles["alert-enter"],
            enterActive: styles["alert-enter-active"],
            exit: styles["alert-exit"],
            exitActive: styles["alert-exit-active"],
          }}
        >
          <ul className={styles.options}>{children}</ul>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Select;
