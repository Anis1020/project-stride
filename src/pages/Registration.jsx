import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const Registration = () => {
  const { loginByGoogle, createUserByEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleRegistration = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const userInfo = { name, email, password, photo };
    console.log(userInfo);

    createUserByEmail(email, password)
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
            type="text"
            placeholder="name"
            className="input input-bordered"
            required
            name="name"
          />
        </div>
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
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="Photo url"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control  ">
          <p>
            <input type="checkbox" name="checkbox" className="" required />
            <span> Accept our term and condition</span>
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registration</button>
        </div>
      </form>
      <div className="card-body -mt-12">
        <button
          onClick={handleGoogleLogin}
          className="btn btn-secondary w-full"
        >
          Google Login
        </button>
      </div>

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
