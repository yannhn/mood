import ResultItem from "../ResultItem/ResultItem";

const SearchResults = ({ searchResults, boards, setBoards }) => {
  return (
    <div className="p-8 ">
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {searchResults.map((searchResult) => {
            return (
              <ResultItem
                key={searchResult.id}
                id={searchResult.id}
                searchResult={searchResult}
                boards={boards}
                setBoards={setBoards}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
