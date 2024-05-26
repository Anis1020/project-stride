import { PieChart, Pie, Sector, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const DashboardHome = () => {
  "";
  return (
    <>
      <div className=" bg-gray-100 p-4 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Card 1</h2>
            <p className="text-gray-600">Some information about Card 1.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Card 2</h2>
            <p className="text-gray-600">Some information about Card 2.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Card 3</h2>
            <p className="text-gray-600">Some information about Card 3.</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105">
            <h2 className="text-xl font-semibold mb-2">Card 4</h2>
            <p className="text-gray-600">Some information about Card 4.</p>
          </div>
        </div>
      </div>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </>
  );
};

export default DashboardHome;
