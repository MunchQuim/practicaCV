import React from "react";

const Knowledge = ({ skills }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Conocimientos Técnicos</h2>
      
      {/* Lista de habilidades */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-2 text-lg text-gray-700">
            <span className="text-blue-500">{/* Aquí puedes agregar un icono si lo deseas */}⚡</span>
            <span>{skill.nombre}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Knowledge;