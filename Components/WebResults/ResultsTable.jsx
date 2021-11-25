import { useState } from 'react';

import TableHeader from './Table/TableHeader.jsx';
import TableRow from './Table/TableRow.jsx';
import ChooseOptions from './ChooseOptions.jsx';

// Options for updating the track list status value.
const options = [
  { id: 1, name: "Added" },
  { id: 2, name: "Duplicate" },
  { id: 3, name: "Not Found" },
];


function ResultsTable({results}) {

  const [option, setOption] = useState(0);
  const [tracks, setTracks] = useState(results);
  const [checkedValues, setCheckedValues] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    // name of the option value selected from the update dropdown select.
    const optionName = options.find((element) => element.id === Number(option));

    let trackList = tracks; // Copy track list array ready to modify with new status values

    // Update status value matched against all the
    // list items that were checked in the form.
    checkedValues.map( (item) => {
      if(item === trackList[item -1].id) {
        trackList[item - 1].status = optionName.name;
      }
    })

    localStorage.setItem("trackList", JSON.stringify(trackList));
    // reset checkbox input values so none are checked after form submission
    setCheckedValues([]);

    setTracks(trackList);
  }

  function handleOptionsChange(value) {
    setOption(value);
  }

  function handleInputChange(id) {
    let selected = checkedValues;

    // Get the value of the input that changed.
    let find = selected.indexOf(id);

    // look for matching values and remove or add accordingly.
    find > -1 ? selected.splice(find, 1) : selected.push(id);

    setCheckedValues( selected );
  }

  return (
    <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <form onSubmit={handleSubmit}>
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <TableHeader />
            <tbody className="bg-white">
              {tracks &&
                tracks.map((row, index) => (
                  <TableRow
                    key={index}
                    row={row}
                    handleChange={handleInputChange}
                    isChecked={checkedValues.includes(row.id) ? true : false}
                  />
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-12 flex justify-end">
          <ChooseOptions optionsChange={handleOptionsChange} optionValues={options} />
          <button
            type="submit"
            className="w-96 flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResultsTable;
