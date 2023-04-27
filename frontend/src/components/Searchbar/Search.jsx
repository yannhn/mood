const Search = () => {
  return (
    <section className="hero min-h-min">
      {/* <div className="hero-overlay bg-opacity-60"></div> */}
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Find your next idea</h1>
          <form className="flex-col">
            <label htmlFor="searchBar">Search</label>
            <input type="text" className="input input-bordered" />
            <button className="btn btn-primary">Get Started</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Search;
