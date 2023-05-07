import { useState } from "react";
import ResultItem from "../ResultItem/ResultItem";
import AddBoard from "../AddBoardPopup/AddBoardPopup";

const SearchResults = ({ searchResults }) => {
  const [openPopup, setOpenPopup] = useState(false);

  const togglePopup = (id) => {
    setOpenPopup(!openPopup);
  };

  return (
    <div className="p-8 ">
      <div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
          {searchResults.map((searchResult) => {
            return (
              <ResultItem
                key={searchResult.id}
                id={searchResult.id}
                searchResult={searchResult}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
