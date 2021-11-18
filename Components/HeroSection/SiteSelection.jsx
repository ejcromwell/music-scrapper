import DownArrow from '../../SVG/DownArrow.jsx'

function SiteSelection() {
  return (
    <>
      <label htmlFor="currency" className="block text-base font-medium text-gray-300">
        Website Type
      </label>
      <div className="mt-1.5 relative">
        <select
          id="currency"
          name="currency"
          className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
        >
          <option defaultValue="true">BBC Six Music</option>
          <option>NTS</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          <DownArrow />
        </div>
      </div>
    </>
  );
}

export default SiteSelection;




