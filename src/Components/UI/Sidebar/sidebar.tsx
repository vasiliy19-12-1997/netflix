import { FC } from "react";
import s from "./sidebar.module.scss";
import { Link } from "react-router-dom";
interface ISidebarProps {
  isSideBarShow: boolean;
  setIsSideBarShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = (props: ISidebarProps) => {
  const menu = ["Popular", "TV Shows", "Films", "My list"];

  return (
    <div className={s.sidebar} style={{ width: props.isSideBarShow ? 30 : 15 }}>
      <button onClick={() => props.setIsSideBarShow(true)}>
        <i
          className={`bx bx-x ${props.isSideBarShow ? "x" : "align-justify"}`}
        ></i>
      </button>
      <ul>
        {menu.map((title) => (
          <li>
            <Link to={""}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
