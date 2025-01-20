import React from "react";

const Job = ({ jobTitle, company, startDate, endDate, tasks,id }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      {/* Encabezado de la experiencia */}
      <div className="flex flex-col md:flex-row items-start mb-4">
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-gray-800">{jobTitle}</h3>
          <p className="text-lg text-gray-600">{company}</p>
        </div>
        <div className="mt-2 md:mt-0 md:ml-6 text-gray-500">
          <p>{startDate} - {endDate || "Actualidad"}</p>
        </div>
      </div>

      {/* Lista de tareas */}
      <ul className="list-disc list-inside space-y-2">
        {tasks.map((task, index) => {
          // Verifica si el id de la tarea corresponde con el id del trabajo
          if (task.experienciasLaborales_id === id) {
            return (
              <li key={index} className="text-gray-700 text-lg">
                {task.descripcion}
              </li>
            );
          } else {
            return null;  // Si no coincide el id, no devuelve nada
          }
        })}
      </ul>
    </div>
  );
};

export default Job;