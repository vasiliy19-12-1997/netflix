import React from "react";

type Props = {};
import s from "./navigation.module.scss";
import MyButton from "./../MyButton/myButton";
import { tabs } from "../../../data";
interface InavigationProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
const Navigation = (props: InavigationProps) => {
  return (
    <nav className={s.nav}>
      {tabs.map((tab) => (
        <button
          className={props.activeTab === tab._id ? s.active : ""}
          key={tab._id}
          onClick={() => props.setActiveTab(tab._id)}
        >
          {tab.name}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
