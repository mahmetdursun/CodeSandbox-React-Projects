import { createRandomSong } from "../data";

function SongPlaylist() {
  // Yapılacaklar:
  // Şarkıların listesini al
  const { data } = useSelector((state) => state.song);
  const songPlaylist = data;
  const dispatch = useDispatch();

  const handleSongAdd = (song) => {
    // Yapılacaklar:
    // Listeye şarkı ekle
    const songText = { name: song, id: crypto.randomUUID() };
    dispatch(addToSongItem(songText));
  };
  const handleSongRemove = (song) => {
    // Yapılacaklar:
    // Listeden şarkıyı kaldır
    dispatch(removeSongItem(song));
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button onClick={() => handleSongRemove(song)} className="button">
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle">Şarkı Listesi</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button"
          >
            + Listeye Şarkı Ekle
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
