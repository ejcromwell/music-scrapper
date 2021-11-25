import { useState } from "react";

//import DownArrow from "../SVG/DownArrow";


function ChooseOptions({optionsChange, optionValues}) {
  const [selectedOption, setSelectedOption] = useState(0);

  function handleChange(value) {
    setSelectedOption(value);
    optionsChange(value);
  }

  return (
    <div className="w-96">
      <div className="mt-1.5 relative">
        <select
          onChange={(e) => handleChange(e.target.value)}
          id="options"
          name="options"
          className="appearance-none block
          w-full bg-none bg-gray-700 border border-transparent rounded-md pl-3
          pr-10 py-2 text-base text-white focus:outline-none focus:ring-1
          focus:ring-white focus:border-white sm:text-sm"
        >
          <option key="0" value="0">
            Choose an Option
          </option>
          {optionValues.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 px-2 flex items-center">
          {/* <DownArrow /> */}
        </div>
      </div>
    </div>
  );
}

export default ChooseOptions;
