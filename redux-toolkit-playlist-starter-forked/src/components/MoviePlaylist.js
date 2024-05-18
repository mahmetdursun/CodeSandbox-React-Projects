import { useDispatch, useSelector } from "react-redux";
import { createRandomMovie } from "../data";

function MoviePlaylist() {
  // Yapılacaklar:
  // Filmlerin listesini al
  const { data } = useSelector((state) => state.movie);
  const moviePlaylist = data;
  const dispatch = useDispatch();

  const handleMovieAdd = (movie) => {
    // Yapılacaklar:
    // Listeye film ekle
    const movieText = { name: movie, id: crypto.randomUUID() };
    dispatch(addToMovieItem(movieText));
  };
  const handleMovieRemove = (movie) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
    dispatch(removeMovieItem(movie));
  };

  const renderedMovies = moviePlaylist.map((movie) => {
    return (
      <li key={movie}>
        {movie}
        <button onClick={() => handleMovieRemove(movie)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Film Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => handleMovieAdd(createRandomMovie())}
            className="button"
          >
            + Listeye Film Ekle
          </button>
        </div>
      </div>
      <ul>{renderedMovies}</ul>
    </div>
  );
}

export default MoviePlaylist;
