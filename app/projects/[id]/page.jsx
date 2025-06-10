'use client';
import { workData } from '@/assets/assets'
import Navbar from '@/app/components/Navbar'
import { useState, use } from 'react'

export default function ProjectPage({ params }) {
  const [isDarkMode, setIsDarkmode] = useState(false);  
  
  // Utiliser React.use() pour accéder aux paramètres
  const id = use(params).id;
  const project = workData.find(p => p.id === id);

  if (!project) {
    return <div>Projet non trouvé</div>
  }

  return (
    <>
        <Navbar isDarkMode={isDarkMode} setIsDarkmode={setIsDarkmode} />
        <div className="min-h-screen p-8 max-w-7xl mx-auto font-Ovo">
        
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 pt-36 ${isDarkMode ? 'dark' : ''}`}>
                {/* Colonne de gauche */}
                <div className="md:col-span-1">

                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                        {/* <h2 className="text-xl font-semibold mb-4">À propos du projet</h2> */}
                        <h1 className="text-xl  text-center font-Ovo">{project.title}</h1>

                        <div className="space-y-4">
                            <div>
                                <h3 className="font-bold text-gray-800 dark:text-gray-300">Service</h3>
                                <p>{project.description}</p>
                            </div>

                            <div>
                                <h3 className="font-bold text-gray-700 dark:text-gray-300">Durée de Développement</h3>
                                <p>novembre 2024 à janvier 2025</p>  {/*pour le moment en statique} */}
                                {/* <p>{project.periode}</p> */} {/*la clé n'existe pas encore pour le moment} */}
                            </div>
                        
                        </div>
                        
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
                        <h3 className="font-bold text-gray-700 dark:text-gray-300">Référence</h3>
                        <p>Les 24H du mans</p>  {/*pour le moment en statique} */}
                        {/* <p>{project.client}</p> */} {/*la clé n'existe pas encore pour le moment} */}
                        </div>
                    </div>
                </div>

                {/* Colonne de droite */}
                <div className="md:col-span-2 space-y-1">
                    <div>
                        {/* <h3 className="font-bold text-gray-700 dark:text-gray-300">Description du projet</h3> */}
                        <p className="text-md text-gray-700 dark:text-gray-300">{project.fullDescription}</p>
                    </div>

                    <div className="md:col-span-1">
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
                            <h3 className="font-bold mb-4">Technologies utilisées:</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className=" text-[#5271ff] bg-white dark:bg-gray-700 px-3 py-1 rounded-full">
                                        {tech}
                                    </span>
                                ))}  {/*la clé n'existe pas encore pour le moment} */}
                                {/* <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full"> react </span>
                                <span className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full"> Javascript </span> */}
                            </div>
                        </div>
                    </div>

                    <div className="md:col-span-2 space-y-1">
                        
                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-6">
                            <h3 className="font-bold mb-4">Captures d'écran</h3>
                            <div  className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <img src={project.bgImage} alt={project.title} className="w-full rounded-lg mb-8" />
                            </div>
                        </div>
                    </div>

                </div>
                    
            </div>

        

        </div>
    </>
  )
}