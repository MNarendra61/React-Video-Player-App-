import React, { useState } from "react";
import Player from "./Components/Player";
import Playlist from "./Components/Playlist";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  const [playlist, setPlaylist] = useState([
    {
      id: 1,
      title: "Big Buck Bunny",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      id: 2,
      title: "Elephants Dream",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    },
    // Add more videos to the playlist as needed
  ]);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handleVideoSelect = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center mt-5">
        <div className="container mx-auto">
          <div className="w-full md:w-3/5 lg:w-2/5">
            <Player video={playlist[currentVideoIndex]} />
            <Playlist
              playlist={playlist}
              currentVideoIndex={currentVideoIndex}
              onVideoSelect={handleVideoSelect}
              setPlaylist={setPlaylist}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
