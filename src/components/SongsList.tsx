import React, { useState } from 'react';
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSongs = songs
    .filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

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

        {/* 🔍 Search Bar */}
        <div className="mt-4">
          <input
            type="text"
            placeholder="Search by title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-sm text-white bg-gray-800 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* 🎵 Filtered Song List */}
      <div className="pb-4">
        {filteredSongs.map((song) => (
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
