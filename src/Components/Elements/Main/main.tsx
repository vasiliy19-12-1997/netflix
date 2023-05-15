import { FC, useState } from "react";
import Sidebar from "../../UI/Sidebar/sidebar";
import Information from "./information";
import { data } from "../../../data";
import Navigation from "../../UI/Navigation/navigation";
import s from "./main.module.scss";
type Props = {};

const Main: FC = (props: Props) => {
  const [activeTab, setActiveTab] = useState(0);
  const [isSideBarShow, setIsSideBarShow] = useState(false);

  return (
    <div className={s.wrapper}>
      <Sidebar
        isSideBarShow={isSideBarShow}
        setIsSideBarShow={setIsSideBarShow}
      />
      <div
        style={{
          backgroundImage: `url(${data[0].mainImage})`,
        }}
      >
        <Information movie={data[0]} />
        <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Main;
