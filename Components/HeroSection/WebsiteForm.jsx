import { useState } from "react";

import useTrackForm from "../../Hooks/useTrackForm";
import DownArrow from "../../SVG/DownArrow.jsx";

/**
 * Take input values and make sure they are both there and that they are not empty values.
 *
 * @param {Object} inputs Input values from form submission
 * @returns bool
 */
function validate(inputs) {
  if (!inputs || inputs === undefined) {
    return false;
  }

  if (inputs.url === "" || inputs.location === "") {
    return false;
  }

  if (Object.keys(inputs).length === 2) {
    return true;
  }

  return false;
}

function WebsiteForm({ formData }) {
  const [error, setError] = useState(false);

  /**
   * Sets error status and passes form input values to
   * parent component.
   *
   * @param {Object} inputs Form input values.
   * @returns void
   */
  async function returnFormSubmit(event, inputs) {

    const validation = validate(inputs);

    if (validation) {
      setError(false);
      formData(inputs);
      return;
    }

    setError(true);
  }

  const { inputs, handleInputChange, handleSubmit } = useTrackForm(returnFormSubmit);

  return (
    <div className="mt-8">
      <div className="flex flex-col items-stretch w-full h-full mb-6 relative">
        {error && (
          <div className="error text-xs text-red-300">
            Please fill in all fields
          </div>
        )}

        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label
            htmlFor="location"
            className="block text-base font-medium text-gray-300"
          >
            Website Type
          </label>
          <div className="mt-1.5 relative">
            <select
              onChange={handleInputChange}
              value={inputs.location || "bbc"}
              id="location"
              name="location"
              className="appearance-none block w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3 pr-10 py-2 text-base text-white focus:outline-none focus:ring-1 focus:ring-white focus:border-white sm:text-sm"
            >
              <option defaultValue="true" value="bbc">
                BBC Six Music
              </option>
              <option value="nts">NTS</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
              {/* <DownArrow /> */}
            </div>
          </div>
          <label
            htmlFor="url"
            className="mt-8 block text-base font-medium text-gray-300"
          >
            Website URL
          </label>
          <input
            onChange={handleInputChange}
            value={inputs.url || ""}
            className="py-3 px-4 bg-gray-200 text-gray-800 border-gray-300 border-2 outline-none placeholder-gray-500 focus:bg-gray-100"
            type="url"
            name="url"
            placeholder="URL"
          />
          <button
            type="submit"
            className="mt-12 py-3 px-4 bg-gray-700 text-gray-100 font-semibold uppercase hover:bg-gray-600"
          >
            Get Tracks
          </button>
        </form>
      </div>
    </div>
  );
}

export default WebsiteForm;
