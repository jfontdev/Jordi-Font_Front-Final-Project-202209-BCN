import MovieDetail from "../../components/MovieDetail/MovieDetail";
import FilmDetailStyled from "./FilmDetailStyled";

const FilmDetail = (): JSX.Element => {
  return (
    <FilmDetailStyled>
      <MovieDetail />
    </FilmDetailStyled>
  );
};

export default FilmDetail;
