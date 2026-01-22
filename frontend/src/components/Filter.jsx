import { useState } from "react";

const Filter = () => {
  const occupations = [
    "All Occupations",
    "Wiraswasta",
    "Pengusaha",
    "Pegawai Swasta",
  ];

  const [selectedOccupation, setSelectedOccupation] =
    useState("All Occupations");
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-xl shadow p-6">
      <h3 className="text-lg font-semibold mb-6">Filters</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">
            Occupation
          </label>

          <div className="dropdown w-full">
            <button
              className="
    w-full flex items-center justify-between
    h-11 px-4 rounded-lg
    bg-white border border-gray-300
    hover:bg-gray-50 transition cursor-pointer
  "
            >
              <span className="font-normal">{selectedOccupation}</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <ul
              className="
                dropdown-content z-50 menu p-2 mt-2
                shadow bg-white rounded-lg w-full
                border border-gray-200
              "
            >
              {occupations.map((item) => {
                const isDisabled =
                  item === "All Occupations" &&
                  selectedOccupation === "All Occupations";

                return (
                  <li key={item}>
                    <button
                      type="button"
                      disabled={isDisabled}
                      onClick={(e) => {
                        setSelectedOccupation(item);
                        e.currentTarget.blur();
                      }}
                      className={`
            w-full text-left rounded-md px-3 py-2
            transition cursor-pointer
            ${
              isDisabled
                ? "text-gray-400 cursor-not-allowed bg-gray-50"
                : "hover:bg-[#A471E1] hover:text-[#F0F0F0]"
            }
          `}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-gray-600">Search</label>

          <div className="relative">
            <svg
              className="
        absolute left-3 top-1/2 -translate-y-1/2
        h-4 w-4 text-gray-500 z-10
        pointer-events-none
      "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>

            <input
              type="text"
              placeholder="Search customer..."
              className="
    input w-full h-11 pl-10 rounded-lg
    bg-white border border-gray-300
    focus:outline-none focus:ring-0
  "
            />
          </div>
        </div>

        <button
          className="
            h-11 rounded-lg bg-[#FF7F00]/89 text-white
            text-sm font-semibold hover:bg-[#FF7F00] transition cursor-pointer
          "
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default Filter;
