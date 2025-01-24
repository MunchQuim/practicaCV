import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Base from './components/PreviewParts/Base.jsx'
import Job from './components/PreviewParts/Job.jsx'
import Studies from './components/PreviewParts/Studies.jsx'
import Knowledge from './components/PreviewParts/Knowledge.jsx'
import Languages from './components/PreviewParts/Languages.jsx'
import Extras from './components/PreviewParts/Extra.jsx'
import Footer from './components/PreviewParts/SocialNetwork.jsx'

function App() {
  // cambiar estos datos por lo recibido del cv
  const [data, setData] = useState(null);
  const [showJobs, setShowJobs] = useState(false);
  const [showStudies, setShowStudies] = useState(false);
  const [showKnowledge, setShowKnowledge] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://leon-scientific-biology-vot.trycloudflare.com/api2.php");
        
        const result = await res.json();  // Espera a que se resuelva la promesa y convierte la respuesta en JSON
        /* console.log(result.experienciasLaborales); */
        setData(result);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };

    fetchData();  // Llama a la función asíncrona
  }, []);

  if (!data) {
    return <div>Cargando...</div>;  // Muestra un mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className='min-h-screen flex flex-col'>

      <Base
        photo={data.base[0].fotoUrl}
        name={data.base[0].nombre}
        lastName={data.base[0].apellidos}
        aboutMe={data.base[0].sobreMi}
      />
      <div className='flex-grow '>
        {/* Sección de trabajos */}
        <div>
          <button
            className="w-full text-lg font-bold py-2 px-4 border-b-2 text-left"
            onClick={() => setShowJobs(!showJobs)}
          >
            {showJobs ? 'Ocultar Experiencias Laborales' : 'Ver Experiencias Laborales'}
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${showJobs ? 'h-full' : 'max-h-0'}`}
          >
            {data.experienciasLaborales.map((element, index) => (
              <Job
                key={index}  // Es importante usar una key única para cada componente en listas
                jobTitle={element.puesto}
                company={element.lugar}
                startDate={element.fechaInicio}
                endDate={element.fechaFinal}
                id={element.id}
                tasks={data.tareasLaborales}
              />
            ))}
          </div>
        </div>

        {/* Sección de estudios */}
        <div>
          <button
            className="w-full text-lg font-bold py-2 px-4 border-b-2 text-left"
            onClick={() => setShowStudies(!showStudies)}
          >
            {showStudies ? 'Ocultar Formaciones Académicas' : 'Ver Formaciones Académicas'}
          </button>

          <div
            className={`transition-all duration-300 overflow-hidden ${showStudies ? 'h-full' : 'max-h-0'}`}
          >
            {data.formacionesAcademicas.map((study, index) => (
              <Studies
                key={index}
                title={study.titulo}
                institution={study.academia}
                startDate={study.fechaInicio}
                endDate={study.fechaFinal}
              />
            ))}
          </div>
        </div>

        {/* Sección de conocimientos e idiomas */}
        <div className='w-full flex'>
          {/* Sección de conocimientos */}
          <div className='w-1/2'>
            <button
              className="w-full text-lg font-bold py-2 px-4 border-b-2 text-left"
              onClick={() => setShowKnowledge(!showKnowledge)}
            >
              {showKnowledge ? 'Ocultar Conocimientos Técnicos' : 'Ver Conocimientos Técnicos'}
            </button>

            <div /* div marcado */
              className={`transition-all duration-300 overflow-hidden ${showKnowledge ? 'h-full' : 'max-h-0'}`}
            >
              <Knowledge skills={data.habilidadesTecnicas} />
            </div>
          </div>

          {/* Sección de idiomas */}
          <div className='w-1/2'>
            <button
              className="w-full text-lg font-bold py-2 px-4 border-b-2 text-left"
              onClick={() => setShowLanguages(!showLanguages)}
            >
              {showLanguages ? 'Ocultar idiomas' : 'Ver idiomas'}
            </button>

            <div /* div marcado */
              className={`transition-all duration-300 overflow-hidden ${showLanguages ? 'h-full' : 'max-h-0'}`}
            >
              <Languages languages={data.idiomas} />
            </div>
          </div>
        </div>


        <Extras curiosities={data.extras} />

      </div>
      <Footer socialNetworks={data.redes} />
    </div>
  );
};


export default App
