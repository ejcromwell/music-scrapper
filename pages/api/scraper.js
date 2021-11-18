import {extractListingsFromHTML} from '../../lib/scraper';

export default async function handler(req, res) {
  const url = req.query.url; // URL to get data from
  const location = req.query.location; // acts as site filter option

  try {
    // get the page data
    const response = await fetch(url);
    // return if any errors
    if (response.status !== 200) {
      res.status(response.status);
      return;
    }
    // pull data from the page response
    const data = await response.text();
    // use Cheerio lib to parse HTML data
    const tracks = extractListingsFromHTML(data, location);
    // return back array of titles and artists
    res.status(response.status).json(tracks);
  } catch (error) {
    res.status(200).json({ message: error.message });
  }
}
