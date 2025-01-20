import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const SocialNetwork = ({ networks }) => {
  return (
    <div className="bg-white py-8 px-4">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Redes Sociales</h2>
        <div className="flex justify-center space-x-6">
          {networks.map((network, index) => (
            <a
              key={index}
              href={network.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition-colors duration-300"
            >
              {/* Selección de icono de red social */}
              {(network.nombre.toLowerCase() === "github") && <FaGithub size={30} />}
              {(network.nombre.toLowerCase() === "linkedin") && <FaLinkedin size={30} />}
              {(network.nombre.toLowerCase() === "twitter") && <FaTwitter size={30} />}
              {(network.nombre.toLowerCase() === "instagram") && <FaInstagram size={30} />}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const Footer = ({ socialNetworks }) => {

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto p-8">
        <SocialNetwork networks={socialNetworks} />
      </div>
      <div className="text-center py-4">
        <p>&copy; 2025 Tu Nombre. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
