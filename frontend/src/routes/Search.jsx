import Search from "../components/Searchbar/Search";

const Index = ({ boards, setBoards }) => {
  return (
    <>
      <Search boards={boards} setBoards={setBoards} />
    </>
  );
};

export default Index;
