import React from "react";

const Studies = ({ title, institution, startDate, endDate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      {/* Encabezado de los estudios */}
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="text-lg text-gray-600">{institution}</p>
        </div>
        <div className="mt-2 md:mt-0 md:ml-6 text-gray-500">
          <p>{startDate} - {endDate || "Actualidad"}</p>
        </div>
      </div>
    </div>
  );
};

export default Studies;