import React from "react";

function Playlist({ playlist, onVideoSelect, setPlaylist }) {
  const handleVideoSelect = (index) => {
    onVideoSelect(index);
  };

  const handleVideoDelete = (id) => {
    setPlaylist(playlist.filter((video) => video.id !== id));
  };

  return (
    <>
      <div className="mt-5">
        <h2>Playlist</h2>
        <ul>
          {playlist.map((video, index) => (
            <li key={video.id} style={{ marginBottom: "10px" }}>
              <span
                onClick={() => handleVideoSelect(index)}
                style={{ marginRight: "10px" }}
              >
                {video.title}
              </span>
              <button onClick={() => handleVideoDelete(video.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Playlist;
