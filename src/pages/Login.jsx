import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Login = () => {
  const { loginByGoogle, loginByEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    const userInfo = { email, password };
    console.log(userInfo);

    loginByEmail(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => console.log(error));
    navigate(location?.state ? location.pathname : "/");
    form.reset();
  };
  //   login by google
  const handleGoogleLogin = () => {
    loginByGoogle()
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <div className="lg:w-[70%] mx-auto">
      <form onSubmit={handleRegistration} className="card-body">
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
        <button onClick={handleGoogleLogin} className="btn w-full btn-accent">
          Google Login
        </button>
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

export default Login;
