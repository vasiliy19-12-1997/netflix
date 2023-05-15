import React from "react";
import s from "./search.module.scss";
export type ISearchProps = {};

const Search: React.FC<ISearchProps> = ({}) => {
  return (
    <div className={s.search}>
      <div>
        <i className="bx bx-search-alt"></i>
        <input type="text" placeholder="I`m searching for..." />
      </div>
      <i className="bx bx-customize"></i>
    </div>
  );
};

export { Search };
