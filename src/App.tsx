import React from 'react';
import { SongsList } from './components/SongsList';
import { PlayerControls } from './components/PlayerControls';
import { useMusicPlayer } from './hooks/useMusicPlayer';
import { songs } from './data/songs';

function App() {
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
  } = useMusicPlayer(songs);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Songs List - Takes 80% of screen height minus player controls */}
      <div className="h-screen pb-32 md:pb-28">
        <SongsList
          songs={songs}
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