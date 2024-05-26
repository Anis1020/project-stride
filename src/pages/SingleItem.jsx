import { Link } from "react-router-dom";

const SingleItem = ({ singleData, onDelete }) => {
  const { name, id, photo, services, description } = singleData;

  const handleDelete = () => {
    onDelete(id);
  };
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={photo} className="w-96 h-56 object-cover" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{services}</p>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
            <Link to={`/dashboard/editItem/${id}`}>
              <button
                // onClick={() => handleEditItem(id)}
                className="btn btn-secondary"
              >
                Edit
              </button>
            </Link>
            <button
              onClick={() => handleDelete(id)}
              className="btn btn-warning"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
