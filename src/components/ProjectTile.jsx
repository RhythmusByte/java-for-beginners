import React from 'react';

const ProjectTile = ({ project, onClick, index }) => {
  return (
    <div 
      className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={() => onClick(project.path)}
    >
      <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 dark:text-gray-400">
          <span className="text-lg font-medium">{project.title} Preview</span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
            {project.title}
          </h3>
          <span className={`px-2 py-1 rounded-full text-xs font-medium
            ${project.difficulty === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 
              project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' : 
              'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'} 
            transition-colors duration-300`}
          >
            {project.difficulty}
          </span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span 
              key={i} 
              className="px-2 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded text-xs transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
