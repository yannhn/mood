import { Link } from "react-router-dom";

const Index = () => {
  return (
    <section className="flex justify-center h-screen bg-neutral">
      <div className="card w-96 shadow-xl border m-auto bg-white">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Welcome!</h2>
          <div className="card-actions justify-end">
            <ul className="flex-col justify-around">
              <li className="m-2">
                <Link to={"/search"} className="btn btn-m btn-outline ">
                  Start your search
                </Link>
              </li>
              <li className="m-2">
                <Link to={"/search"} className="btn btn-m btn-outline">
                  Login
                </Link>
              </li>
              <li className="m-2">
                <Link to={"/search"} className="btn btn-m btn-outline">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
