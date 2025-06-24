import React from 'react';
import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Shuffle, 
  Repeat,
  Repeat1,
  Loader2
} from 'lucide-react';
import { Song } from '../types/music';
import { formatTime } from '../utils/timeFormat';

interface PlayerControlsProps {
  currentSong: Song | null;
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  currentTime: number;
  volume: number;
  shuffle: boolean;
  repeat: 'none' | 'one' | 'all';
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onSeek: (time: number) => void;
  onVolumeChange: (volume: number) => void;
  onShuffleToggle: () => void;
  onRepeatToggle: () => void;
}

export const PlayerControls: React.FC<PlayerControlsProps> = ({
  currentSong,
  isPlaying,
  isLoading,
  error,
  currentTime,
  volume,
  shuffle,
  repeat,
  onPlayPause,
  onPrevious,
  onNext,
  onSeek,
  onVolumeChange,
  onShuffleToggle,
  onRepeatToggle
}) => {
  if (!currentSong) {
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent backdrop-blur-sm border-t border-gray-800 p-4">
        <div className="flex items-center justify-center h-16">
          <p className="text-gray-400">Select a song to start playing</p>
        </div>
      </div>
    );
  }

  const progressPercentage = (currentTime / currentSong.duration) * 100;

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const clickPercentage = clickX / width;
    const newTime = clickPercentage * currentSong.duration;
    onSeek(newTime);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-900/95 to-transparent backdrop-blur-sm border-t border-gray-800">
      {/* Error Message */}
      {error && (
        <div className="px-4 py-2 bg-red-900/50 border-b border-red-800">
          <p className="text-red-300 text-sm text-center">{error}</p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="px-4 pt-2">
        <div 
          className="relative w-full h-1 bg-gray-700 rounded-full cursor-pointer group"
          onClick={handleProgressClick}
        >
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
          <div 
            className="absolute top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
            style={{ left: `${progressPercentage}%`, marginLeft: '-6px' }}
          />
        </div>
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(currentSong.duration)}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex items-center justify-between p-4">
        {/* Song Info */}
        <div className="flex items-center flex-1 min-w-0 mr-4">
          <img
            src={currentSong.cover}
            alt={currentSong.title}
            className="w-12 h-12 rounded-lg object-cover flex-shrink-0"
          />
          <div className="ml-3 min-w-0">
            <h3 className="font-medium text-white truncate">{currentSong.title}</h3>
            <p className="text-sm text-gray-400 truncate">{currentSong.artist}</p>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onShuffleToggle}
            className={`p-2 rounded-full transition-all duration-200 ${
              shuffle ? 'text-purple-400 bg-purple-400/20' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            <Shuffle className="w-4 h-4" />
          </button>
          
          <button
            onClick={onPrevious}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            disabled={isLoading}
          >
            <SkipBack className="w-5 h-5" />
          </button>
          
          <button
            onClick={onPlayPause}
            disabled={isLoading}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-200 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : isPlaying ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6 ml-0.5" />
            )}
          </button>
          
          <button
            onClick={onNext}
            className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            disabled={isLoading}
          >
            <SkipForward className="w-5 h-5" />
          </button>
          
          <button
            onClick={onRepeatToggle}
            className={`p-2 rounded-full transition-all duration-200 ${
              repeat !== 'none' ? 'text-purple-400 bg-purple-400/20' : 'text-gray-400 hover:text-white hover:bg-gray-800'
            }`}
          >
            {repeat === 'one' ? (
              <Repeat1 className="w-4 h-4" />
            ) : (
              <Repeat className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Volume Control (Hidden on mobile) */}
        <div className="hidden sm:flex items-center space-x-2 ml-4">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => onVolumeChange(Number(e.target.value))}
            className="w-20 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
          />
        </div>
      </div>
    </div>
  );
};