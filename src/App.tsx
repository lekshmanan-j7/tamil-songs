import React from 'react';
import { SongsList } from './components/SongsList';
import { PlayerControls } from './components/PlayerControls';
import { useMusicPlayer } from './hooks/useMusicPlayer';
import { songs } from './data/songs';
import { Toaster } from 'react-hot-toast';

function App() {
  const filteredSongs = songs.sort((a, b) => a.title.localeCompare(b.title));
  const {
    playerState,
    isLoading,
    error,
    selectSong,
    togglePlayPause,
    playNext,
    playPrevious,
    seekTo,
    setVolume,
    toggleShuffle,
    toggleRepeat
  } = useMusicPlayer(filteredSongs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
       <Toaster position="top-center" />
      {/* Songs List - Takes 80% of screen height minus player controls */}
      <div className="h-screen pb-32 md:pb-28">
        <SongsList
          songs={filteredSongs}
          currentSong={playerState.currentSong}
          isPlaying={playerState.isPlaying}
          onSongSelect={selectSong}
        />
      </div>

      {/* Fixed Player Controls at Bottom */}
      <PlayerControls
        currentSong={playerState.currentSong}
        isPlaying={playerState.isPlaying}
        isLoading={isLoading}
        error={error}
        currentTime={playerState.currentTime}
        volume={playerState.volume}
        shuffle={playerState.shuffle}
        repeat={playerState.repeat}
        onPlayPause={togglePlayPause}
        onPrevious={playPrevious}
        onNext={playNext}
        onSeek={seekTo}
        onVolumeChange={setVolume}
        onShuffleToggle={toggleShuffle}
        onRepeatToggle={toggleRepeat}
      />
    </div>
  );
}

export default App;