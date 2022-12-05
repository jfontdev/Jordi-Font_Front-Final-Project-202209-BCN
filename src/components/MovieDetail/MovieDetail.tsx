import MovieDetailStyled from "./MovieDetailStyled";

const MovieDetail = (): JSX.Element => {
  return (
    <MovieDetailStyled>
      <div className="movie-poster-container">
        <img
          src="../../../images/Piratas Del Caribe La Maldicion De La Perla Negra.webp"
          alt="Pirates of the caribbean movie poster"
          height="460"
          width="338"
          className="movie-poster"
        />
      </div>

      <div className="movie-details">
        <h1 className="movie-title">Piratas del Caribe</h1>
        <div className="movie-year-container">
          <h2 className="movie-year-heading">Año de estreno:</h2>
          <span className="movie-year">2003</span>
        </div>
        <h2 className="movie-description-heading">Sinopsis:</h2>
        <p className="movie-description">
          El herrero Will Turner se une al excéntrico pirata Jack Sparrow para
          salvar a su amor, la hija del gobernador, de los antiguos aliados
          piratas de Jack, que ahora son muertos vivientes.
        </p>
      </div>
    </MovieDetailStyled>
  );
};

export default MovieDetail;
