import { FC } from "react";
import { Link } from "react-router-dom";
import s from "./header.module.scss";
import { Search } from "../../UI/Search/search";
import Profile from "./profile";
const Header: FC = () => {
  return (
    <div className={s.header}>
      <Link to={"./"}>
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix-logo"
          width={110}
          height={35}
        />
      </Link>
      <Search />
      <Profile />
    </div>
  );
};

export { Header };
