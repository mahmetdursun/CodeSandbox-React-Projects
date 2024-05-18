import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";

export default function App() {
  const handleResetClick = () => {
    //
  };

  return (
    <div className="container">
      <button onClick={() => handleResetClick()} className="button">
        Listeleri Sil
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}
