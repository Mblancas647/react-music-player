import LibrarySong from "./LibrarySong";

function Library({ songs, setCurrentSong, audioRef, isPlaying }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return (
            <LibrarySong
              songs={songs}
              song={song}
              setCurrentSong={setCurrentSong}
              id={song.id}
              key={song.id}
              audioRef={audioRef}
              isPlaying={isPlaying}
            ></LibrarySong>
          );
        })}
      </div>
    </div>
  );
}

export default Library;
