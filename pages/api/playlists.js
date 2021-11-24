import {sendRequest} from '../../lib/spotify';
import {getSession} from 'next-auth/react';

const PLAYLISTS_ENDPOINT = "me/playlists";

/**
 * Get all playlists using the Spotify API playlists endpoint and return API response.
 *
 * @param {*} req
 * @param {*} res
 * @returns API response
 */
const handler = async (req, res) => {
  const {
    token: {accessToken},
  } = await getSession({req});
  const response = await sendRequest(PLAYLISTS_ENDPOINT,accessToken);
  const {items} = await response.json();

  return res.status(200).json({items});
};

export default handler;
