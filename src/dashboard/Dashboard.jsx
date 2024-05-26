import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-6 gap-3">
      <ul className="col-span-2 bg-blue-200 rounded space-y-5 text-center">
        <li>
          {" "}
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/dashboard/home"}>Dashboard Home</NavLink>
        </li>
        <li>
          {" "}
          <NavLink to={"/dashboard/addItem"}>Add a item</NavLink>
        </li>
      </ul>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
