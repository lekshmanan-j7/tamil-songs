import { useState, useRef, useEffect, useCallback } from 'react';

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const initializeAudio = useCallback((audioUrl: string) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setIsLoading(true);
    setError(null);

    const audio = new Audio();
    audio.preload = 'metadata';
    audio.crossOrigin = 'anonymous';
    
    audio.addEventListener('loadeddata', () => {
      setIsLoading(false);
    });

    audio.addEventListener('error', () => {
      setError('Failed to load audio file');
      setIsLoading(false);
    });

    audio.src = audioUrl;
    audioRef.current = audio;

    return audio;
  }, []);

  const play = useCallback(async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
        return true;
      } catch (error) {
        console.error('Error playing audio:', error);
        setError('Failed to play audio');
        return false;
      }
    }
    return false;
  }, []);

  const pause = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  }, []);

  const setCurrentTime = useCallback((time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  }, []);

  const setVolume = useCallback((volume: number) => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, []);

  const getCurrentTime = useCallback(() => {
    return audioRef.current?.currentTime || 0;
  }, []);

  const getDuration = useCallback(() => {
    return audioRef.current?.duration || 0;
  }, []);

  const cleanup = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }
  }, []);

  return {
    audioRef,
    isLoading,
    error,
    initializeAudio,
    play,
    pause,
    setCurrentTime,
    setVolume,
    getCurrentTime,
    getDuration,
    cleanup
  };
};