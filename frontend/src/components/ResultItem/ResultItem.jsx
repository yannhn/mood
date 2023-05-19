import { nanoid } from "nanoid";
import { useState } from "react";

const ResultItem = ({ searchResult, boards, setBoards }) => {
  const [boardInput, setBoardInput] = useState("");
  // const [checked, setChecked] = useState([]);
  const [checkedState, setCheckedState] = useState(
    new Array(Object.keys(boards).length).fill(false)
  );

  // console.log("CHECKED:", checkedState);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoards((current) => {
      return { ...current, [boardInput]: [] };
    });
    setBoardInput("");
  };

  const getImageFromClick = (id) => {
    // console.log(id);
    return id;
  };

  function handleCheckboxChange(board, imageId, event, position) {
    const newChange = getImageFromClick(imageId);

    const updatedCheckedState = checkedState.map((item, index) => {
      if (index === position) {
        return !item;
      } else {
        return item;
      }
    });

    setCheckedState(updatedCheckedState);

    console.log("TEST:", event.target.value, event.target.checked);
    console.log(checkedState);
    // if (event.target.checked) {
    //   setChecked([...checked, imageId]);
    // } else {
    //   setChecked(checked.filter((item) => item !== imageId));
    // }

    // if (event.target.checked) {
    //   setChecked([...checked, imageId]);
    // } else {
    //   setChecked(checked.filter((item) => item !== imageId));
    // }

    // if (event.target.checked) {
    //   setChecked([...checked, event.target.value]);
    // } else {
    //   setChecked(checked.filter((item) => item !== event.target.value));
    // }

    setBoards((current) => {
      const updatedBoards = { ...current };
      const imageArray = updatedBoards[board];

      if (!imageArray.includes(newChange)) {
        imageArray.push(newChange);
      }

      return updatedBoards;
    });
  }

  // console.log("BOARDS:", boards);

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
        htmlFor={`my-modal-${searchResult.id}`}
        className="btn"
        onClick={() => getImageFromClick(searchResult.id)}
      >
        Add to Board
      </label>
      <input
        type="checkbox"
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
              {Object.keys(boards).map((item, index) => (
                <div key={nanoid()}>
                  <label htmlFor={`${item}_${searchResult.id}`}>{item}</label>
                  <input
                    id={`${item}_${searchResult.id}`}
                    type="checkbox"
                    name={item}
                    value={item}
                    checked={checkedState[index]}
                    onChange={(event) =>
                      handleCheckboxChange(item, searchResult, event, index)
                    }
                  ></input>
                </div>
              ))}
            </ul>
          </div>
          <div className="modal-action">
            <label htmlFor={`my-modal-${searchResult.id}`} className="btn">
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultItem;
