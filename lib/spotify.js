const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const BASE_URL = 'https://api.spotify.com/v1/'

/**
 * Helper function to get the access token from Spotify API when provided with the Refresh Token.
 *
 * @param {String} refresh_token Refresh token value
 * @returns API response
 */
const getAccessToken = async (refresh_token) => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  });

  return response.json();
};

/**
 * General helper function to call the Spotify API.
 *
 * @param {String} endpoint API endpoint string
 * @param {String} refresh_token Refresh Token string needed for API access
 * @returns API response
 */
export const sendRequest = async (endpoint, refresh_token) => {
  const { access_token } = await getAccessToken(refresh_token);
  return fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};
