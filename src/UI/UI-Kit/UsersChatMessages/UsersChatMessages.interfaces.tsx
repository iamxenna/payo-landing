interface IItem {
  avatar: string;
  name: string;
  text: string;
}

interface UsersChatMessagesProps {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  width: string;
  height: string;
  margin?: string;
  items: IItem;
  tooltipPosition: "left" | "right";
}

export type { UsersChatMessagesProps, IItem };
