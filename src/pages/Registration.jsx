import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Registration = () => {
  const { loginByGoogle } = useContext(AuthContext);

  //   login by google
  const handleGoogleLogin = () => {
    loginByGoogle()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <div className="lg:w-[70%] mx-auto">
      <form className="card-body">
        <div className="form-control">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-primary">
            Registration
          </button>
        </div>
        <div>
          <button className="btn btn-secondary w-full">Google Login</button>
        </div>
      </form>

      <div className="text-center">
        <Link to={"/login"}>
          {" "}
          Already have an account{" "}
          <button className="btn btn-link">Login</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Registration;
