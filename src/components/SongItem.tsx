import React from 'react';
import { Play, Pause } from 'lucide-react';
import { Song } from '../types/music';
import { formatTime } from '../utils/timeFormat';

interface SongItemProps {
  song: Song;
  isActive: boolean;
  isPlaying: boolean;
  onSelect: (song: Song) => void;
}

export const SongItem: React.FC<SongItemProps> = ({
  song,
  isActive,
  isPlaying,
  onSelect
}) => {
  return (
    <div
      className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-800/50 ${
        isActive ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-l-4 border-purple-500' : ''
      }`}
      onClick={() => onSelect(song)}
    >
      <div className="relative flex-shrink-0 mr-4">
        <img
          src={song.cover}
          alt={song.title}
          className="w-12 h-12 rounded-lg object-cover"
        />
        {isActive && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </div>
        )}
      </div>
      
      <div className="flex-1 min-w-0">
        <h3 className={`font-medium truncate ${isActive ? 'text-purple-300' : 'text-white'}`}>
          {song.title}
        </h3>
        <p className="text-sm text-gray-400 truncate">{song.artist}</p>
      </div>
      
      <div className="text-sm text-gray-400 ml-4">
        {formatTime(song.duration)}
      </div>
    </div>
  );
};