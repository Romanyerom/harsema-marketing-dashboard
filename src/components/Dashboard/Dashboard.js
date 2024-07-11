import React from 'react';

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Dashboard Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Metric 1</div>
        <div className="bg-white p-4 shadow rounded">Metric 2</div>
        <div className="bg-white p-4 shadow rounded">Metric 3</div>
      </div>
    </div>
  );
}

export default Dashboard;

