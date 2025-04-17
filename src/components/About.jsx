import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-20 pb-12 md:pt-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-fadeIn">
              About <span className="text-indigo-600 dark:text-indigo-400">Java for Beginners</span>
            </h1>
            <div className="w-24 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto my-6 rounded animate-widthGrow"></div>
            <p className="mt-3 max-w-md mx-auto text-base md:text-xl text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl transition-colors duration-300 animate-slideUp">
              A community-driven collection of beginner-friendly Java projects to help you learn programming.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 animate-slideFromLeft">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                We believe that learning to code should be accessible to everyone. Java for Beginners was created to provide a supportive environment where newcomers can explore Java programming through practical, hands-on projects.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
                Each project is carefully designed to introduce fundamental programming concepts in a gradual, intuitive way. Our step-by-step guides and well-documented code help beginners build confidence while creating real, working applications.
              </p>
            </div>
            <div className="md:w-2/5 mt-10 md:mt-0 animate-slideFromRight">
              <div className="bg-indigo-50 dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400 mb-4 transition-colors duration-300">
                  What We Offer
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Beginner-friendly Java projects
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Step-by-step implementation guides
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Well-commented source code
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Concept explanations in plain language
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    Community support for learning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300 animate-fadeIn">
            For Beginners, By Developers
          </h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300 animate-slideUp">
            <div className="p-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                Java for Beginners was created specifically for those who are taking their first steps in programming. Whether you're a student, career-changer, or hobbyist, our projects provide a practical way to learn Java basics while building something tangible.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-300">
                Each project focuses on teaching specific programming concepts:
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Variables & Data Types
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Learn how to store and manipulate different kinds of data in your programs.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Control Flow
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Master if/else statements, loops, and switch cases to control program execution.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Object Oriented Programming
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Understand classes, objects, inheritance, and other OOP concepts.
                  </p>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-md transition-colors duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    User Input & Output
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                    Create interactive programs that respond to user actions.
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 transition-colors duration-300">
                We believe in learning by doing. Instead of overwhelming you with theory, our approach encourages you to build working programs from day one, gradually introducing new concepts as you need them.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-indigo-600 dark:bg-indigo-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-6">
              Contributions Welcome
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Java for Beginners is a community project. We welcome contributions from developers of all skill levels.
            </p>
            
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-3xl mx-auto text-left transition-colors duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                Ways to Contribute
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      Add New Projects
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      Create new beginner-friendly Java projects with clear documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      Improve Existing Projects
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      Enhance code quality, add features, or improve documentation.
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900 dark:text-white transition-colors duration-300">
                      Report Issues
                    </h4>
                    <p className="mt-1 text-gray-600 dark:text-gray-300 transition-colors duration-300">
                      Help identify bugs or suggest improvements for the website or projects.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <button className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
                  How to Contribute
                </button>
              </div>
            </div>
          </div>
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
        
        @keyframes slideFromLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideFromRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes widthGrow {
          from { width: 0; }
          to { width: 6rem; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .animate-slideFromLeft {
          animation: slideFromLeft 0.8s ease-out forwards;
        }
        
        .animate-slideFromRight {
          animation: slideFromRight 0.8s ease-out forwards;
        }
        
        .animate-widthGrow {
          animation: widthGrow 1.2s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
