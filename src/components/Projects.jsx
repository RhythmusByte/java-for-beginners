import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ProjectTile from './ProjectTile';
import projectsData from '../data/projectsData';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 4;
  
  const projects = projectsData;

  const filteredProjects = activeFilter 
    ? projects.filter(project => project.difficulty === activeFilter)
    : projects;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handleProjectClick = (path) => {
    navigate(path);
  };

  const handleFilterClick = (difficulty) => {
    setActiveFilter(activeFilter === difficulty ? null : difficulty);
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      document.getElementById('projects-section').scrollIntoView({ behavior: 'smooth' });
    }
  };

  const difficultyCount = {
    Beginner: projects.filter(p => p.difficulty === 'Beginner').length,
    Intermediate: projects.filter(p => p.difficulty === 'Intermediate').length,
    Advanced: projects.filter(p => p.difficulty === 'Advanced').length
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-20 pb-12 md:pt-32 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-fadeIn">
              Java <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base md:text-xl text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl transition-colors duration-300 animate-slideUp">
              Explore our collection of beginner-friendly Java projects. 
              Each project comes with step-by-step instructions and explanations.
            </p>
            
            <div className="mt-8 max-w-xl mx-auto animate-fadeIn">
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                <button 
                  onClick={() => handleFilterClick('Beginner')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === 'Beginner' 
                    ? 'bg-green-600 text-white dark:bg-green-700' 
                    : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800'
                  }`}
                >
                  Beginner ({difficultyCount.Beginner})
                </button>
                <button 
                  onClick={() => handleFilterClick('Intermediate')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === 'Intermediate' 
                    ? 'bg-yellow-600 text-white dark:bg-yellow-700' 
                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800'
                  }`}
                >
                  Intermediate ({difficultyCount.Intermediate})
                </button>
                <button 
                  onClick={() => handleFilterClick('Advanced')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${
                    activeFilter === 'Advanced' 
                    ? 'bg-red-600 text-white dark:bg-red-700' 
                    : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200 hover:bg-red-200 dark:hover:bg-red-800'
                  }`}
                >
                  Advanced ({difficultyCount.Advanced})
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects-section" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {activeFilter ? `${activeFilter} Projects` : 'Projects'}
          </h2>
          
          {filteredProjects.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {currentProjects.map((project, index) => (
                  <ProjectTile 
                    key={project.id}
                    project={project}
                    onClick={handleProjectClick}
                    index={index}
                  />
                ))}
              </div>
              
              <div className="mt-12 flex justify-center space-x-4">
                {currentPage > 1 && (
                  <button 
                    onClick={handlePrevPage}
                    className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                )}
                
                {currentPage < totalPages && (
                  <button 
                    onClick={handleNextPage}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300 flex items-center"
                  >
                    Next
                    <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                )}
              </div>
              
              <div className="mt-4 text-center text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white transition-colors duration-300">
                No projects found with this filter.
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 transition-colors duration-300">
                Try a different filter or browse all projects.
              </p>
              <button 
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300"
                onClick={() => setActiveFilter(null)}
              >
                Clear Filter
              </button>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-12 bg-indigo-600 dark:bg-indigo-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fadeIn">
            Want to contribute a project?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Have a great Java project idea for beginners? Share it with our community and help others learn.
          </p>
          <button className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-md animate-bounce">
            Submit a Project
          </button>
        </div>
      </section>

      <Footer />
     
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Projects;
