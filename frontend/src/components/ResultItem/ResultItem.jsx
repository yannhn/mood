import { nanoid } from "nanoid";
import { useState } from "react";

const ResultItem = ({ searchResult, boards, setBoards }) => {
  const [boardInput, setBoardInput] = useState("");
  const [isChecked, setIsChecked] = useState({});
  const [boardImage, setBoardImage] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    setBoards((current) => {
      return { ...current, [boardInput]: [] };
    });
    setBoardInput("");
  };

  const getImageFromClick = (id) => {
    console.log(id);
    return id;
  };

  const handleCheckboxChange = (board, imageId) => (event) => {
    // console.log("BRRR", board);
    const newChange = getImageFromClick(imageId);
    console.log("NEW:", newChange);

    // checkbox sollte gecheckt werden
    // dann muss ich für die gecheckte box das entsprechende Objekt in das item pushen
  };

  return (
    <div
      className="card shadow-xl"
      key={searchResult.id}
      data-id={searchResult.id}
    >
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

      <label
        // htmlFor="my-modal-6"
        htmlFor={`my-modal-${searchResult.id}`}
        className="btn"
        onClick={() => getImageFromClick(searchResult.id)}
      >
        Add to Board
      </label>
      <input
        type="checkbox"
        // id="my-modal-6"
        id={`my-modal-${searchResult.id}`}
        className="modal-toggle"
      />
      <div
        className="modal modal-bottom sm:modal-middle"
        data-id={searchResult.id}
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg">Your boards</h3>
          <form
            className="flex-col justify-center items-center mb-4"
            onSubmit={handleSubmit}
          >
            <label htmlFor="addBoards"></label>
            <div className="input-group flex justify-center">
              <input
                type="text"
                className="input input-bordered"
                placeholder="enter board..."
                name="name"
                value={boardInput}
                onChange={(event) => setBoardInput(event.target.value)}
              />
              <button className="btn btn-square h-6 w-6 text-lg" type="submit">
                +
              </button>
            </div>
          </form>
          <div className="flex justify-center items-center mb-4">
            <ul>
              {Object.keys(boards).map((item) => (
                // <li key={nanoid()}>{item}</li>
                <div key={nanoid()}>
                  <label
                    // htmlFor="board"
                    htmlFor={`${item}_${searchResult.id}`}
                  >
                    {item}
                  </label>
                  <input
                    // id={searchResult.id}
                    id={`${item}_${searchResult.id}`}
                    type="checkbox"
                    name={item}
                    value={item}
                    // checked={isChecked[item] || false}
                    checked={isChecked[`${item}_${searchResult.id}`] || false}
                    onChange={handleCheckboxChange(item, searchResult)}
                  ></input>
                </div>
              ))}
            </ul>
          </div>
          <div className="modal-action">
            <label
              // htmlFor="my-modal-6"
              htmlFor={`my-modal-${searchResult.id}`}
              className="btn"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
