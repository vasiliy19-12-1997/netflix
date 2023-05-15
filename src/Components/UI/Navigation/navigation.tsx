import React from "react";
import { tabs } from "../../../data";
import s from "./navigation.module.scss";

interface InavigationProps {
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}
const NavigationButtom = (props: InavigationProps) => {
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

export default NavigationButtom;
