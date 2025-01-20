import React from "react";

const Languages = ({ languages }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg mb-6 ">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">Idiomas</h2>

      {/* Lista de idiomas */}
      <ul className="space-y-4">
        {languages.map((language, index) => (
          <li key={index} className="flex justify-between items-center text-lg text-gray-700">
            <span>{language.idioma}</span>
            <span className="text-gray-500">{language.nivel}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Languages;