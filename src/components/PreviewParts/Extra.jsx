import React from "react";

const Extras = ({ curiosities }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6"></h2>

      {/* Lista de curiosidades */}
      <ul className="space-y-4">
        {curiosities.map((curiosity, index) => (
          <li key={index} className="flex items-center text-lg text-gray-700">
            <span className="text-blue-500">⚡</span>
            <span className="ml-2">{curiosity.extra}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Extras;