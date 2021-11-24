import { useState } from 'react';

import DownArrow from '../SVG/DownArrow';


function ChoosePlaylist({playlists}) {

  const [selectedOption, setSelectedOption] = useState();

  /**
   * Take playlist ID and store in localStorage and updated internal State.
   *
   * @param {String} id Spotify playlist ID value
   */
  function selectPlaylist(id) {
    localStorage.setItem('playlistId', id);
    setSelectedOption(id);
  }

  return (
    <div className="w-96">
      <label
        htmlFor="playlists"
        className="block text-base font-medium text-gray-300"
      >
        Select Playlist
      </label>
      <div className="mt-1.5 relative">
        <select
          onChange={(e) => selectPlaylist(e.target.value)}
          id="playlists"
          name="playlists"
          className="appearance-none block
          w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3
          pr-10 py-2 text-base text-white focus:outline-none focus:ring-1
          focus:ring-white focus:border-white sm:text-sm"
        >
          {playlists.map((playlist) => (
            <option
              key={playlist.id}
              value={playlist.id}
            >
              {playlist.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          {/* <DownArrow /> */}
        </div>
      </div>
    </div>
  );
}

export default ChoosePlaylist;
