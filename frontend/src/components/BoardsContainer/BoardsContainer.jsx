import { nanoid } from "nanoid";

const BoardsContainer = ({ boards }) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-8">
      {boards.map((board) => {
        return (
          <div className="card shadow-xl image-full" key={nanoid()}>
            {/* <figure>
              <img
                src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure> */}
            <div className="card-body">
              <h2 className="card-title">{board}</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See board</button>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default BoardsContainer;
