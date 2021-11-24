import {sendRequest} from '../../../lib/spotify';
import {getSession} from 'next-auth/react';

//import { send } from "../../helpers/playlists";

export default handler;

async function handler(req, res) {
  const {
    token: {accessToken},
  } = await getSession({req});

  switch (req.method) {
    case "GET":
      return getPlaylistById(accessToken);
    case "PUT":
      return updatePlaylist(accessToken);
    case "DELETE":
      return deletePlaylist(accessToken);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  async function getPlaylistById(token) {
    const response = await sendRequest(`playlists/${req.query.id}`, token);
    const data = await response.json();
    return res.status(200).json(data);
  }

  function updatePlaylist() {
    try {
      //usersRepo.update(req.query.id, req.body);
      return res.status(200).json({});
    } catch (error) {
      return res.status(400).json({ message: error });
    }
  }

  function deletePlaylist() {
    //usersRepo.delete(req.query.id);
    return res.status(200).json({});
  }
}
