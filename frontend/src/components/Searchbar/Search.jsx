import { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";

const Search = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.pexels.com/v1/search?query=${search}`,
        {
          headers: {
            Authorization: import.meta.env.VITE_PEXELS_AUTH_KEY,
          },
        }
      );
      if (!response.ok) {
        throw Error("could not fetch the data!");
      }
      const data = await response.json();
      setSearchResults(data.photos);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  return (
    <div>
      <section className="hero min-h-min">
        {/* <div className="hero-overlay bg-opacity-60"></div> */}
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Find your next idea</h1>
            <form
              className="flex-col justify-center items-center"
              onSubmit={handleSubmit}
            >
              <label htmlFor="searchBar"></label>
              <div className="input-group flex justify-center">
                <input
                  type="text"
                  className="input input-bordered"
                  placeholder="enter search..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <button className="btn btn-square btn-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <label
                  className="btn btn-outline btn-primary btn-sm"
                  htmlFor="nature"
                >
                  Nature
                </label>
                <input
                  type="checkbox"
                  id="nature"
                  value="nature"
                  data-title="nature"
                  className="hidden"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <label
                  className="btn btn-outline btn-primary btn-sm"
                  htmlFor="car"
                >
                  Car
                </label>
                <input
                  type="checkbox"
                  id="car"
                  value="car"
                  data-title="car"
                  className="hidden"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <label
                  className="btn btn-outline btn-primary btn-sm"
                  htmlFor="people"
                >
                  People
                </label>
                <input
                  type="checkbox"
                  id="people"
                  value="people"
                  data-title="people"
                  className="hidden"
                  onChange={(event) => setSearch(event.target.value)}
                />
                <label
                  className="btn btn-outline btn-primary btn-sm"
                  htmlFor="dogs"
                >
                  Dogs
                </label>
                <input
                  type="checkbox"
                  id="dogs"
                  value="dogs"
                  data-title="dogs"
                  className="hidden"
                  onChange={(event) => setSearch(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </section>

      {error && <div>{error}</div>}

      <SearchResults searchResults={searchResults} />
    </div>
  );
};

export default Search;
