import MovieDetail from "../../components/MovieDetail/MovieDetail";
import ReviewCardList from "../../components/ReviewCardList/ReviewCardList";
import FilmDetailStyled from "./FilmDetailStyled";

const FilmDetail = (): JSX.Element => {
  return (
    <FilmDetailStyled>
      <MovieDetail />
      <ReviewCardList />
    </FilmDetailStyled>
  );
};

export default FilmDetail;
