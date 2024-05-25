import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <h1>Not Found Page</h1>
      <Link to={"/"}>
        {" "}
        <button className="btn btn-accent">Back to Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
