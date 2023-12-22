import styles from "./styles.module.css";
import Song from "../Song/Song";

const Songs = ({ songs }) => {
  return (
    <>
      {songs.map((song) => {
        return (
          <div key={song.id}>
            <Song title={song.title} artist={song.artist} />
          </div>
        );
      })}
    </>
  );
};

export default Songs;
