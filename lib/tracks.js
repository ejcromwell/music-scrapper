function createEndpoint(inputs) {
  if (inputs.url === undefined || inputs.location === undefined) {
    return false;
  }

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
export const getTracks = async (inputs) => {

  const url = createEndpoint(inputs);

  if (url === false) {
    return { status: 500, data: "" };
  }

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
    console.log("error with getUrl: ", error);
    return { status: 500, data: '' };
  }

}
