const SearchResults = ({ searchResults }) => {
  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-8">
        {searchResults.map((searchResult) => {
          return (
            <div key={searchResult.id}>
              <img src={searchResult.src.tiny} />
              <span>
                This <a href={searchResult.url}>Photo</a> was taken by
                <a href={searchResult.photographer_url}>
                  {searchResult.photographer}
                </a>
                on Pexels.
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
