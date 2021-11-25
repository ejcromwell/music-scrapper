import { useState, useEffect } from 'react';
import {getTracks} from '../../lib/tracks';

import WebsiteSelection from './WebsiteSelection.jsx'
import WebResults from '../WebResults/WebResults.jsx';


function Hero() {

  const [tracks, setTracks] = useState([]);
  const [error, setError] = useState(false);

  async function handleFormData (inputs) {
    const res = await getTracks(inputs);
    if (res.status === 200) {
      setError(false);
      setTracks(res.data);
      return;
    }
    setError(true);
  }

  useEffect(() => {
    const trackListJSON = localStorage.getItem('trackList');
    if (trackListJSON && trackListJSON !== "") {
      setTracks(JSON.parse(trackListJSON));
    }
  }, []);

  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl mt-12">
          <WebsiteSelection formData={handleFormData}/>
          {error &&
            <div className="mt-10 w-full max-w-xs text-red-300">
              error with URL
            </div>
          }
        </div>
      </div>
      <div className="mt-12">
        {tracks.length > 0 && <WebResults results={tracks} />}
      </div>
      <div className="container">
        <div className="w-full">
          <button
            className="w-96 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            onClick={( () => localStorage.removeItem('trackList'))}
          >
            clear track list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
