import { useState } from 'react';

import WebsiteSelection from './WebsiteSelection.jsx'
import WebResults from '../WebResults/WebResults.jsx';


function createEndpoint(inputs) {
  let url = "/api/scraper?";
  url += "location=" + encodeURIComponent(inputs.location);
  url += "&url=" + encodeURIComponent(inputs.url);

  return url;
}

/**
 * Get the tracks array from the scraper API endpoint
 *
 * @param {object} inputs Inputs values from the form
 * @returns object With status code and data
 */
async function getTracks(inputs) {

  const url = createEndpoint(inputs);

  try {
    const response = await fetch(url);
    if (response.status === 404) {
      return { status: 404, data: "" };
    }
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // grab track list from internal API
    const data = await response.json();
    // set data in localStorage for later access
    localStorage.setItem('trackList', JSON.stringify(data));
    return {status: 200, data: data};

  } catch (error) {
    // TODO: develop this error and validation so that it checks
    // for the input string instead of the dropdown and if
    // it doesn't pass validation, then you cannot submit the form.
    // Further improvement is add the CSS selector for track title
    // and track artist and the container element so that it can
    // target those. Will need validation to check they are
    // proper CSS selectors.
    console.log("error with getUrl: ", error);
    return { status: 500, data: '' };
  }

}

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
