const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
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
  );
};

export default DashboardHome;
