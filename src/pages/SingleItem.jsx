import { Link } from "react-router-dom";

const SingleItem = () => {
  return (
    <div className="lg:w-[70%] mx-auto">
      <form className="card-body">
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
            name="email"
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
            name="password"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div className=" card-body -mt-10">
        <button className="btn w-full btn-accent">Google Login</button>
      </div>

      <div className="text-center">
        <Link to={"/register"}>
          New to this site{" "}
          <button className="btn btn-link">Registration</button>
        </Link>
      </div>
    </div>
  );
};

export default SingleItem;
