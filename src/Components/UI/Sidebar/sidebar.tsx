import { FC } from "react";
import s from "./sidebar.module.scss";
import { Link } from "react-router-dom";
import { menu } from "../../../data";
interface ISidebarProps {
  isSideBarShow: boolean;
  setIsSideBarShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: ISidebarProps) => {
  return (
    <div
      className={s.sidebar}
      style={{ width: props.isSideBarShow ? "15%" : "10%" }}
    >
      <button onClick={() => props.setIsSideBarShow(!props.isSideBarShow)}>
        <i
          className={`bx bx-x ${props.isSideBarShow ? "x" : "align-justify"}`}
        ></i>
      </button>
      <ul className={props.isSideBarShow ? s.show : ""}>
        {menu.map((title) => (
          <li key={title}>
            <Link to={""}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
