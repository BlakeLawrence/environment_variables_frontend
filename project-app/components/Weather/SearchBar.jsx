import React from "react";

const SearchBar = ({ fetchWeather, handleChange, city }) => {
  return (
    <div className="w-90 sm:w-1/2 md:w-2/5 lg:w-72 xl:w-80 ml-4 mr-4 mb-2 mt-2 sm:mb-4">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
      >
        Search
      </label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          value={city}
          onChange={handleChange}
          type="search"
          id="default-search"
          className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type in city..."
          required=""
        />
        <button
          onClick={fetchWeather}
          type="submit"
          className="text-white absolute right-2.5 bottom-2.5 bg-700 hover:bg-800 focus:ring-4 focus:outline-none focus:ring-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-600 dark:hover:bg-700 dark:focus:ring-800 bg-[#FF9505]"
        >
          Search
        </button>
      </div>
    </div>
  );
};
export default SearchBar;
