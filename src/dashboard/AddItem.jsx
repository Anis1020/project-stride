import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddItem = () => {
  const handleAddItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const services = form.services.value;
    const description = form.description.value;

    const photo = form.photo.value;
    const data = { id, name, services, description, photo };
    console.log(data);

    fetch("http://localhost:3000/posts", {
      method: "POST",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newData) => {
        toast("Item Added successfully!");
        console.log(newData);
      });

    form.reset();
  };
  return (
    <div className="lg:w-[70%] mx-auto">
      <form onSubmit={handleAddItem} className="card-body">
        <div className="form-control">
          <input
            type="text"
            name="id"
            placeholder="id"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="services"
            name="services"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="description"
            name="description"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add Now</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddItem;
