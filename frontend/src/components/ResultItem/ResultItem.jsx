const ResultItem = ({ searchResult, togglePopup }) => {
  return (
    <div className="card shadow-xl" key={searchResult.id} id={searchResult.id}>
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
        <button className="btn btn-sm btn-outline" onClick={togglePopup}>
          Add to board
        </button>
      </div>
    </div>
  );
};

export default ResultItem;
