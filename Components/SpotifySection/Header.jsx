import axios from 'axios';
import { useState, useEffect } from 'react';
import {useSession} from 'next-auth/react';

import SignInButton from './SignInButton.jsx';
import SignOutButton from './SignOutButton.jsx';
import ChoosePlaylist from '../../Components/ChoosePlaylist'
import UploadTracksButton from './UploadTracksButton'

function Header() {

  const {data: session} = useSession();
  const [playlists, setPlaylists] = useState([]);

  const getMyPlaylists = async () => {
    const res = await fetch('/api/playlists');
    const {items} = await res.json();
    setPlaylists(items);
  };

  function uploadReady(playlist, trackList) {
    return playlist !== '' && trackList !== '' ? true : false;
  }

  function handleUploadTracks(item) {
    console.log({item});
    const uploadTrackList = async () => {
      const id = localStorage.getItem('playlistId');
      const url = `/api/playlists/${id}`;
      axios.get(url).then( (result) => {
        console.log({result});
      })
      //const res = await fetch(`/api/playlists/${id}`);
      //const { items } = await res.json();
      //console.log({items});
      //setPlaylists(items);
    };
    uploadTrackList();
  }

  useEffect(() => {
    const playlistCheck = localStorage.getItem('playlistId');
    const trackListCheck = localStorage.getItem('trackList');
    uploadReady(playlistCheck, trackListCheck);
  }, []);


  return (
    <div className="w-full">
      <div className="w-full flex">
        <div className="w-full md:w-7/12">
          <h3 className="text-3xl font-extrabold text-white sm:text-4xl sm:tracking-tight lg:text-5xl">
            {session ? "" : "Connect"} Your Spotify Account
          </h3>
          <p className="text-gray-400 mt-8">
            {session && "Your Spotify account is connected."}
            <br />
            {session && session?.token?.email}
            {!session &&
              "You need to connect your Spotify account in order to add songs to a playlist."}
          </p>
        </div>
        <div className="w-full md:w-5/12">
          {session ? <SignOutButton /> : <SignInButton />}
        </div>
      </div>
      <div className="w-full">
        {session && (
          <div className="w-full flex mt-12">
            {playlists && <ChoosePlaylist playlists={playlists} />}
            <button
              onClick={() => getMyPlaylists()}
              className="ml-12 h-10 align-end py-2 px-4 bg-gray-700 text-gray-100 hover:bg-gray-600 rounded"
            >
              Refresh my playlists
            </button>
          </div>
        )}
      </div>
      {uploadReady && <UploadTracksButton uploadTracks={handleUploadTracks} />}
    </div>
  );
}

export default Header;
