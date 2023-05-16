import { nanoid } from "nanoid";

const BoardsContainer = ({ boards }) => {
  return (
    <section className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-8">
      {Object.keys(boards).map((board) => {
        return (
          <div className="card shadow-xl image-full" key={nanoid()}>
            <figure>
              <img
                src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                alt="Shoes"
              />
            </figure>
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
