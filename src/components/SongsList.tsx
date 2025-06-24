import React from 'react';
import { Music } from 'lucide-react';
import { Song } from '../types/music';
import { SongItem } from './SongItem';

interface SongsListProps {
  songs: Song[];
  currentSong: Song | null;
  isPlaying: boolean;
  onSongSelect: (song: Song) => void;
}

export const SongsList: React.FC<SongsListProps> = ({
  songs,
  currentSong,
  isPlaying,
  onSongSelect
}) => {
  return (
    <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
      <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
            <Music className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">My Playlist</h2>
            <p className="text-sm text-gray-400">{songs.length} songs</p>
          </div>
        </div>
      </div>
      
      <div className="pb-4">
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            isActive={currentSong?.id === song.id}
            isPlaying={isPlaying && currentSong?.id === song.id}
            onSelect={onSongSelect}
          />
        ))}
      </div>
    </div>
  );
};