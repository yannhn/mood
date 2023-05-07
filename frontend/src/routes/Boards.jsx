import BoardsContainer from "../components/BoardsContainer/BoardsContainer";

const Boards = ({ boards }) => {
  return (
    <>
      <h2 className="text-center text-6xl mt-8">Your boards</h2>
      <BoardsContainer boards={boards} />
    </>
  );
};

export default Boards;
