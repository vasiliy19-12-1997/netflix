import { FC, useState } from "react";
import Sidebar from "../../UI/Sidebar/sidebar";
import Information from "./information";
import { data } from "../../../data";
import s from "./main.module.scss";
import NavigationButtom from "../../UI/Navigation/navigation";
import Episodes from "../Episodes/episodes";
type Props = {};

const Main: FC = (props: Props) => {
  const [activeTab, setActiveTab] = useState(1);
  const [isSideBarShow, setIsSideBarShow] = useState(false);

  return (
    <div className={s.wrapper}>
      <Sidebar
        isSideBarShow={isSideBarShow}
        setIsSideBarShow={setIsSideBarShow}
      />
      <div
        className={s.main}
        style={{
          backgroundImage: `url(${data[0].mainImage})`,
          width: isSideBarShow ? "85%" : "90%",
        }}
      >
        {activeTab === 1 ? (
          <Information movie={data[0]} />
        ) : (
          activeTab === 2 && <Episodes />
        )}
        <NavigationButtom activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default Main;
