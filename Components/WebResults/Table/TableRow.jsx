function TableRow({row, index}) {
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
        status
      </td>
    </tr>
  );
}

export default TableRow;
