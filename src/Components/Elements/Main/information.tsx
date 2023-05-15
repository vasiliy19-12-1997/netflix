import s from "./main.module.scss";
import { IData } from "./../../../types";
import MyButton from "./../../UI/MyButton/myButton";
interface IinformationProps {
  movie: IData;
}

const Information = (props: IinformationProps) => {
  let addToFavorrite = (movieName: string) => {
    let fav = localStorage.getItem("favMovies");
    if (fav) {
      fav = JSON.parse(fav);
      localStorage.setItem("favMovies", JSON.stringify(fav));
      console.log(`${movieName} успешно добавлен`);
    }
  };
  return (
    <div className={s.info}>
      <img src={props.movie.logo} alt="" width={200} style={{ opacity: 0.7 }} />
      <div className={s.additional}>
        <span>{props.movie.year}</span>
        <span>{props.movie.limitAge}</span>
        <span>{props.movie.rating}</span>
        <span>{props.movie.duration}</span>
      </div>
      <div className={s.description}>{props.movie.description}</div>
      <div className={s.buttons}>
        <MyButton onClick={() => console.log("video is open")}>
          <i className="bx bx play" style={{ color: "#c62e21" }}>
            <span>Play</span>
          </i>
        </MyButton>
        <MyButton onClick={() => addToFavorrite}>
          <i className="bx bx plus">
            <span>Play</span>
          </i>
        </MyButton>
      </div>
    </div>
  );
};

export default Information;
