import { useEffect, useState } from 'react';

import TableHeader from './Table/TableHeader.jsx';
import TableRow from './Table/TableRow.jsx';


function ResultsTable({results}) {

  const [tracks, setTracks] = useState(results);

  useEffect(() => {
    const trackList = localStorage.getItem('trackList');
    if(trackList && trackList !== '') {
      setTracks(JSON.parse(localStorage.getItem("trackList")));
    }
  }, []);

  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <TableHeader />
          <tbody className="bg-white">
            {tracks && tracks.map( (row, index) => <TableRow key={index} row={row} index={index}/>)}
          </tbody>
        </table>
      </div>
    </div>
   );
}

export default ResultsTable;
