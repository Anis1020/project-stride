import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const EditItem = () => {
  const eData = useLoaderData();
  console.log(eData);
  const [id, setId] = useState(eData.id);
  const [name, setName] = useState(eData.name);
  const [service, setServices] = useState(eData.services);
  const [description, setDescription] = useState(eData.description);
  const [photo, setPhoto] = useState(eData.photo);
  const handleEditItem = (e) => {
    e.preventDefault();
    const form = e.target;
    const id = form.id.value;
    const name = form.name.value;
    const services = form.services.value;
    const description = form.description.value;

    const photo = form.photo.value;
    const data = { id, name, services, description, photo };
    console.log(data);

    fetch(`http://localhost:3000/posts/${eData.id}`, {
      method: "PATCH",
      header: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newData) => {
        toast("Item Edit successfully!");

        console.log(newData);
      });

    form.reset();
  };
  return (
    <div className="lg:w-[70%] mx-auto">
      <form onSubmit={handleEditItem} className="card-body">
        <div className="form-control">
          <input
            type="text"
            name="id"
            placeholder="id"
            className="input input-bordered"
            required
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="name"
            name="name"
            className="input input-bordered"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="services"
            name="services"
            className="input input-bordered"
            required
            value={service}
            onChange={(e) => setServices(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="description"
            name="description"
            className="input input-bordered"
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            placeholder="photo"
            name="photo"
            className="input input-bordered"
            required
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Edit Now</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default EditItem;
