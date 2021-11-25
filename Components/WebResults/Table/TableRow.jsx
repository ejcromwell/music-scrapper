import { useEffect, useState } from "react";


/**
 * Validate Tailwind class needed for bg colour depending on status value.
 *
 * @param {String} status Status value
 * @returns String
 */
function bgColour(status) {
  if (status === "Added") return " bg-green-200";
  if (status === "Duplicate") return " bg-yellow-200";
  if (status === "Not Found") return " bg-red-200";
}


/**
 * Validate Tailwind class needed for text colour depending on status value.
 *
 * @param {String} status Status value
 * @returns String
 */
function textColourValue(status) {
  if (status === "Added") return " text-green-900";
  if (status === "Duplicate") return " text-yellow-900";
  if (status === "Not Found") return " text-red-900";
}


function TableRow({row, handleChange, isChecked}) {

  const [checkedValue, setCheckedValue] = useState(isChecked);

  const ariaStatus = bgColour(row.status);
  const textColour = textColourValue(row.status);


  useEffect(() => {
    setCheckedValue(isChecked); // Initially set the input checked status
  }, [isChecked]);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">
          <input
            key={row.id}
            id={`track-checkbox-${row.id}`}
            name={`track-checkbox-${row.id}`}
            type="checkbox"
            checked={checkedValue}
            onChange={ () => {
              handleChange(row.id);
              setCheckedValue(!checkedValue);
            } }
          />
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 text-gray-800">{row.id}</div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">{row.title}</div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {row.artist}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        <span
          className={`relative inline-block px-3 py-1 font-semibold leading-tight ${textColour}`}
        >
          <span
            aria-hidden
            className={`absolute inset-0 opacity-50 rounded-full ${ariaStatus}`}
          ></span>
          <span className="relative text-xs">{row.status}</span>
        </span>
      </td>
    </tr>
  );
}

export default TableRow;
