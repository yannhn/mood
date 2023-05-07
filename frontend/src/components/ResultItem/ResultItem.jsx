import { nanoid } from "nanoid";
import { useState } from "react";

const ResultItem = ({ searchResult, setBoards }) => {
  const [boardInput, setBoardInput] = useState("");
  const [boards, setBoards] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("FORM SUBMIT");
    setBoardInput("");
    setBoards((current) => [...current, boardInput]);
  };

  return (
    <div className="card shadow-xl">
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

      <label htmlFor="my-modal-6" className="btn">
        Add to Board
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
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
              {boards.map((item, index) => (
                <li key={nanoid()}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
