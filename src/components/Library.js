import LibrarySong from "./LibrarySong";

function Library({ songs }) {
  return (
    <div className="library">
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => {
          return <LibrarySong song={song}></LibrarySong>;
        })}
      </div>
    </div>
  );
}

export default Library;
