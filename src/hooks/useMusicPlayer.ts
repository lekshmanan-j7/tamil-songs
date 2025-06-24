import { useState, useCallback, useEffect } from 'react';
import { Song, PlayerState } from '../types/music';
import { useAudioPlayer } from './useAudioPlayer';

export const useMusicPlayer = (songs: Song[]) => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    volume: 75,
    shuffle: false,
    repeat: 'none'
  });

  const {
    audioRef,
    isLoading,
    error,
    initializeAudio,
    play,
    pause,
    setCurrentTime,
    setVolume: setAudioVolume,
    getCurrentTime,
    getDuration,
    cleanup
  } = useAudioPlayer();

  // Update current time from audio element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setPlayerState(prev => ({
        ...prev,
        currentTime: getCurrentTime()
      }));
    };

    const handleEnded = () => {
      // Song ended, handle repeat/next logic
      if (playerState.repeat === 'one') {
        audio.currentTime = 0;
        play();
      } else if (playerState.repeat === 'all' || songs.length > 1) {
        playNext();
      } else {
        setPlayerState(prev => ({
          ...prev,
          isPlaying: false
        }));
      }
    };

    const handleLoadedMetadata = () => {
      // Update song duration if it differs from our mock data
      const actualDuration = getDuration();
      if (playerState.currentSong && actualDuration > 0) {
        setPlayerState(prev => ({
          ...prev,
          currentSong: prev.currentSong ? {
            ...prev.currentSong,
            duration: Math.floor(actualDuration)
          } : null
        }));
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [audioRef.current, playerState.repeat, playerState.currentSong, getCurrentTime, getDuration, play]);

  const selectSong = useCallback(async (song: Song) => {
    // Initialize audio with the selected song
    const audio = initializeAudio(song.audioUrl);
    
    setPlayerState(prev => ({
      ...prev,
      currentSong: song,
      currentTime: 0,
      isPlaying: false
    }));

    // Wait for audio to load, then play
    audio.addEventListener('loadeddata', async () => {
      const success = await play();
      if (success) {
        setPlayerState(prev => ({
          ...prev,
          isPlaying: true
        }));
      }
    }, { once: true });
  }, [initializeAudio, play]);

  const togglePlayPause = useCallback(async () => {
    if (!playerState.currentSong) return;

    if (playerState.isPlaying) {
      pause();
      setPlayerState(prev => ({
        ...prev,
        isPlaying: false
      }));
    } else {
      const success = await play();
      if (success) {
        setPlayerState(prev => ({
          ...prev,
          isPlaying: true
        }));
      }
    }
  }, [playerState.isPlaying, playerState.currentSong, play, pause]);

  const playNext = useCallback(() => {
    if (!playerState.currentSong) return;
    
    const currentIndex = songs.findIndex(song => song.id === playerState.currentSong!.id);
    let nextIndex;
    
    if (playerState.shuffle) {
      nextIndex = Math.floor(Math.random() * songs.length);
    } else {
      nextIndex = (currentIndex + 1) % songs.length;
    }
    
    selectSong(songs[nextIndex]);
  }, [playerState.currentSong, playerState.shuffle, songs, selectSong]);

  const playPrevious = useCallback(() => {
    if (!playerState.currentSong) return;
    
    const currentIndex = songs.findIndex(song => song.id === playerState.currentSong!.id);
    let prevIndex;
    
    if (playerState.shuffle) {
      prevIndex = Math.floor(Math.random() * songs.length);
    } else {
      prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    }
    
    selectSong(songs[prevIndex]);
  }, [playerState.currentSong, playerState.shuffle, songs, selectSong]);

  const seekTo = useCallback((time: number) => {
    setCurrentTime(time);
    setPlayerState(prev => ({
      ...prev,
      currentTime: time
    }));
  }, [setCurrentTime]);

  const setVolume = useCallback((volume: number) => {
    setAudioVolume(volume);
    setPlayerState(prev => ({
      ...prev,
      volume
    }));
  }, [setAudioVolume]);

  const toggleShuffle = useCallback(() => {
    setPlayerState(prev => ({
      ...prev,
      shuffle: !prev.shuffle
    }));
  }, []);

  const toggleRepeat = useCallback(() => {
    setPlayerState(prev => {
      const nextRepeat = prev.repeat === 'none' ? 'all' : prev.repeat === 'all' ? 'one' : 'none';
      return {
        ...prev,
        repeat: nextRepeat
      };
    });
  }, []);

  // Set initial volume
  useEffect(() => {
    setAudioVolume(playerState.volume);
  }, [setAudioVolume, playerState.volume]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanup();
    };
  }, [cleanup]);

  return {
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
  };
};