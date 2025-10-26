import type { IconType } from "react-icons";

export interface ContactItem {
  text: string;
  link?: string;
  icon: IconType; // Наверно сомнительно, но разве проект не такой же?
}

export interface Contacts {
  [key: string]: ContactItem;
}