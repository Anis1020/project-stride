const AddItem = () => {
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
          <button className="btn btn-primary">Registration</button>
        </div>
        <div>
          <button className="btn btn-secondary w-full">Google Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddItem;
