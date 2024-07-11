import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul>
          <li><a href="#" className="block py-2">Dashboard</a></li>
          <li><a href="#" className="block py-2">Clients</a></li>
          <li><a href="#" className="block py-2">Campaigns</a></li>
          <li><a href="#" className="block py-2">Reports</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;

