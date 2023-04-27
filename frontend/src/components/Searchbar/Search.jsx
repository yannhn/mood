const Search = () => {
  return (
    <section className="flex justify-center">
      <form>
        <label htmlFor="searchBar">SearchBar</label>
        <input type="text" className="border-2 rounded border-black" />
        <button>Submit</button>
      </form>
    </section>
  );
};

export default Search;
