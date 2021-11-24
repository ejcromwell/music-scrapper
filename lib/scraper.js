import cheerio from "cheerio"

/**
 * Takes the Cheerio DOM style object and traverses through it
 * looking for the target elements specified and trying
 * to extract out just plain text for each item.
 *
 * @param {Object} $ Cheerio package DOM style object
 * @returns Array
 *
 * @see https://github.com/cheeriojs/cheerio
 *
 */
function bbcFilter($) {

  const output = [];

  const targets = {
    container: 'ul.sc-c-scrollable-list__list',
    title: '.sc-c-basic-tile__title',
    artist: '.sc-c-basic-tile__artist',
  };

  const rows = $("body").find(targets.container).children();

  rows.each((i, el) => {
    let title = $(el).find(targets.title).first().text().trim();
    let artist = $(el).find(targets.artist).first().text().trim();

    output.push({ id: i + 1, title, artist, status: '', checked: false });
  });

  return output;
}

/**
 * Calls either the specific filter function for each site dependant
 * on the filter specified.
 *
 * @param {String} location The identifier for each filter option
 * @param {Object} $ Cheerio DOM style object
 * @returns Array
 *
 * @see https://github.com/cheeriojs/cheerio
 *
 */
function extractor(location, $) {
  switch (location) {
    case 'bbc':
      return bbcFilter($);
      break;
    case 'nts':
      // TODO: create filter for NTS site
      break;

    default:
      return [];
      break;
  }
}

/**
 * Takes the data string for a webpage, filters through it and extracts
 * out the desired content into an Array of objects.
 *
 * @param {String} html HTML for the webpage.
 * @param {String} location Filter option.
 * @returns Array
 */
export function extractListingsFromHTML(html, location) {

  const $ = cheerio.load(html);
  const tracks = extractor(location, $);

  return tracks;
}
