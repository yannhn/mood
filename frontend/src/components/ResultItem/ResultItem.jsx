import { nanoid } from "nanoid";
import { useState } from "react";

const ResultItem = ({ searchResult, boards, setBoards }) => {
  const [boardInput, setBoardInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoardInput("");
    // console.log("EEE", event.target.value);
    // setBoards((current) => {...current, boardInput });
    setBoards((current) => {
      return { ...current, [boardInput]: ["TEST"] };
    });
    // setChoice(choice => { return {...choice, key:val}})
  };

  // console.log("boards", boards);
  // console.log(searchResult.id);

  const getImageFromClick = (id) => {
    console.log(id);
  };
  // get clicked item

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
      {/* // get specific id */}
      <label
        htmlFor="my-modal-6"
        className="btn"
        onClick={() => getImageFromClick(searchResult.id)}
      >
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
                  <label htmlFor="board">{item}</label>
                  <input
                    id="board"
                    type="checkbox"
                    value={item}
                    name={item}
                    placeholder={item}
                  ></input>
                </div>
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
