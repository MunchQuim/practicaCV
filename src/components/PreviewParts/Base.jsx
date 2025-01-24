import React from 'react';

const Base = ({ photo, name, lastName, aboutMe }) => {
    return (
        <header className="flex flex-col md:flex-row items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-10 shadow-2xl text-white">
            {/* Sección de la foto */}
            {console.log()}
            <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg overflow-hidden border-4 border-white shadow-lg">
                    <img
                        src={'/' + photo} // Usando la prop 'photo' para la URL de la imagen
                        alt="Foto de perfil"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Sección de información */}
            <div className="flex-1 mt-8 md:mt-0 md:ml-12 text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
                    {name} {/* Usando la prop 'name' */}
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-pink-200 mt-2">
                    {lastName} {/* Usando la prop 'lastName' */}
                </h2>
                <p className="mt-6 text-lg md:text-xl leading-relaxed">
                    {aboutMe} {/* Usando la prop 'aboutMe' */}
                </p>
            </div>
        </header>
    );
};

export default Base;