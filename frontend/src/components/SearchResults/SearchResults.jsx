const SearchResults = ({ searchResults }) => {
  return (
    <div>
      <h2 className="text-center">Results</h2>
      <div className="grid grid-cols-4 gap-4">
        {searchResults.map((searchResult) => {
          return (
            <div key={searchResult.id}>
              <img src={searchResult.src.tiny} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
