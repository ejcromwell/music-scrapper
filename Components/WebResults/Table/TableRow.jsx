function TableRow({row, index}) {

  let ariaStatus, textColour;

  if (row.status === "Added") {
    ariaStatus = " bg-green-200";
    textColour = " text-green-900 ";
  }

  if (row.status === "Duplicate") {
    ariaStatus = " bg-orange-200";
    textColour = " text-orange-900";
  }

  if (row.status === "Not Found") {
    ariaStatus = " bg-red-200";
    textColour = " text-red-900";
  }

  return (
    <tr key={index}>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">
          // Check
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="flex items-center">
          <div>
            <div className="text-sm leading-5 text-gray-800">
              {row.id}
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
        <div className="text-sm leading-5 text-blue-900">
          {row.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        {row.artist}
      </td>
      <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
        <span className={`relative inline-block px-3 py-1 font-semibold leading-tight ${textColour}`}>
          <span aria-hidden className={`absolute inset-0 opacity-50 rounded-full ${ariaStatus}`}></span>
          <span className="relative text-xs">{status}</span>
        </span>
      </td>
    </tr>
  );
}

export default TableRow;
