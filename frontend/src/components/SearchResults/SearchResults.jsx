const SearchResults = ({ searchResults }) => {
  return (
    <div className="p-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
        {searchResults.map((searchResult) => {
          return (
            <div className="card  shadow-xl" key={searchResult.id}>
              <img src={searchResult.src.tiny} />
              <div className="card-body">
                <span>
                  This{" "}
                  <a className="link" href={searchResult.url}>
                    Photo
                  </a>{" "}
                  was taken by{" "}
                  <a className="link" href={searchResult.photographer_url}>
                    {searchResult.photographer}
                  </a>{" "}
                  on Pexels.
                </span>
              </div>
              <div className="card-actions justify-center mb-4">
                <button className="btn btn-sm btn-outline ">
                  Add to board
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
