import React, { useState, useEffect, useRef } from 'react';
import { Music, Heart, X } from 'lucide-react';
import { Song } from '../types/music';
import { SongItem } from './SongItem';
import toast from 'react-hot-toast';

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
  onSongSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFavourites, setShowFavourites] = useState(false);

  // ✅ Persist favourites using localStorage
  const [favouriteSongs, setFavouriteSongs] = useState<Song[]>(() => {
    try {
      const stored = localStorage.getItem('favouriteSongs');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // ✅ Save to localStorage on change
  useEffect(() => {
    localStorage.setItem('favouriteSongs', JSON.stringify(favouriteSongs));
  }, [favouriteSongs]);

  // ✅ Toast on first load if songs exist
  const hasShownToast = useRef(false);
  useEffect(() => {
    if (songs.length > 0 && !hasShownToast.current) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-sm w-full bg-white/10 backdrop-blur-md text-white shadow-xl rounded-lg px-6 py-4 pointer-events-auto border border-white/20 transition-all duration-300`}
        >
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🎶</span>
              <div>
                <p className="text-sm font-semibold">New Songs Added!</p>
                <p className="text-xs text-white/80">
                  Enjoy the latest beats now.
                </p>
              </div>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-white/70 hover:text-white text-sm font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      ));
      hasShownToast.current = true;
    }
  }, [songs]);

  // ✅ Toggle favourite song
  const toggleFavourite = (song: Song) => {
    setFavouriteSongs((prev) =>
      prev.some((s) => s.id === song.id)
        ? prev.filter((s) => s.id !== song.id)
        : [...prev, song]
    );
  };

  const filteredSongs = songs
    .filter((song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="relative h-full flex">
      {/* 🎵 Main Playlist */}
      <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm z-10 p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">My Playlist</h2>
                <p className="text-sm text-gray-400">{songs.length} songs</p>
              </div>
            </div>

            {/* ❤️ Toggle Favourites */}
            <button
              onClick={() => setShowFavourites((prev) => !prev)}
              className="text-white hover:text-pink-400 transition"
              title="Toggle Favourites"
            >
              <Heart className="w-6 h-6" fill={showFavourites ? 'red' : 'none'} />
            </button>
          </div>

          {/* 🔍 Search */}
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

        {/* 🎵 Filtered Songs */}
        <div className="pb-4">
          {filteredSongs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              isActive={currentSong?.id === song.id}
              isPlaying={isPlaying && currentSong?.id === song.id}
              onSelect={onSongSelect}
              isFavourite={favouriteSongs.some((s) => s.id === song.id)}
              onFavouriteToggle={toggleFavourite}
            />
          ))}
        </div>
      </div>

      {/* ❤️ Favourites Sidebar */}
  {showFavourites && (
  <div  style={{ height: '80vh' }} className="fixed top-0 right-0 z-50 w-80  bg-gray-900 border-l border-gray-700 shadow-2xl flex flex-col">
    {/* 🔒 Sticky Header */}
    <div className="p-4 border-b border-gray-700 bg-gray-900/95 backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">My Favourites</h3>
        <button
          onClick={() => setShowFavourites(false)}
          className="text-gray-400 hover:text-white"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>

    {/* 🎵 Scrollable Song List (with bottom padding for music player) */}
    <div
      className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-thin scrollbar-thumb-purple-600 scrollbar-track-gray-800"
      style={{ paddingBottom: '80px' }} // 💡 leave room for music player
    >
      {favouriteSongs.length === 0 ? (
        <p className="text-sm text-gray-400">No favourites yet.</p>
      ) : (
        favouriteSongs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            isActive={currentSong?.id === song.id}
            isPlaying={isPlaying && currentSong?.id === song.id}
            onSelect={onSongSelect}
            isFavourite={true}
            onFavouriteToggle={toggleFavourite}
          />
        ))
      )}
    </div>
  </div>
)}

    </div>
  );
};
