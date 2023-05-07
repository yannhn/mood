import { useState } from "react";
import AddBoardPopup from "../AddBoardPopup/AddBoardPopup";
import ResultItem from "../ResultItem/ResultItem";

const SearchResults = ({ searchResults }) => {
  const [openPopup, setOpenPopup] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const togglePopup = (id) => {
    // console.log(searchResults);
    // setIsClicked(isClicked.push(beers.filter((item) => item.id === id)));
    // console.log(searchResults.find((item) => item.id === id));
    // setOpenPopup(!openPopup);
    console.log(id);
  };

  return (
    <div className="p-8 ">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 ">
        {searchResults.map((searchResult) => {
          return (
            <ResultItem
              searchResult={searchResult}
              togglePopup={togglePopup}
              key={searchResult.id}
            />
          );
        })}
        {/* {openPopup && <AddBoardPopup togglePopup={togglePopup} />} */}
      </div>
    </div>
  );
};

export default SearchResults;
