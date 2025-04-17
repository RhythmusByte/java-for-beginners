import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useRedirect from '../hooks/useRedirect.jsx';

const HomePage = () => {

  const redirect = useRedirect();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-20 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4 transition-colors duration-300 animate-fadeIn">
              <span className="text-indigo-600 dark:text-indigo-400">Java</span> for Beginners
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base md:text-xl text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:max-w-3xl transition-colors duration-300 animate-slideUp">
              Start your programming journey with simple, beginner-friendly Java projects.
              Build real applications while learning fundamental concepts.
            </p>
            <div className="mt-8 flex justify-center space-x-4 animate-fadeIn">
              <button onClick={() => redirect('/projects')} className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                Explore Projects
              </button>
              <button onClick={() => redirect('/about')} className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-300 dark:bg-gray-800 dark:hover:bg-gray-700 md:text-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
            Why Learn With Our Projects?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Beginner Friendly",
                description: "Simple projects designed specifically for newcomers to Java programming.",
                delay: "0"
              },
              {
                title: "Practical Examples",
                description: "Learn by building real applications like calculators, games, and more.",
                delay: "150"
              },
              {
                title: "Well Documented",
                description: "Clear comments and explanations to help you understand every line of code.",
                delay: "300"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 transform animate-fadeIn"
                style={{ animationDelay: `${feature.delay}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*
        <section className="py-12 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 transition-colors duration-300">
              Featured Project
            </h2>
          
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl animate-slideUp">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gray-100 dark:bg-gray-700 p-6 flex items-center justify-center">
                  <div className="bg-white dark:bg-gray-900 rounded-md p-4 shadow-inner w-full max-w-md mx-auto">
                    <pre className="text-sm text-gray-800 dark:text-gray-300 overflow-x-auto">
                      <code>{`public class SimpleCalculator {
  public static void main(String[] args) {
    Scanner scanner = new Scanner(System.in);
    System.out.println("Simple Calculator");
    System.out.print("Enter first number: ");
    double num1 = scanner.nextDouble();
    // More code...
  }
}`}</code>
                    </pre>
                  </div>
                </div>
                <div className="md:w-1/2 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                    Simple Calculator
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  Build a basic calculator that handles addition, subtraction, multiplication, and division. Learn about user input, conditional statements, and basic arithmetic operations.
                  </p>
                  <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors duration-300">
                    View Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
       */}
           
      <section className="py-12 bg-indigo-600 dark:bg-indigo-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 animate-fadeIn">
            Ready to start coding?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto animate-fadeIn">
            Explore our collection of beginner-friendly Java projects and take the first step in your programming journey.
          </p>
          <button onClick={() => redirect('/projects')} className="px-6 py-3 bg-white text-indigo-600 font-medium rounded-md hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105 shadow-md animate-bounce">
            Get Started Now
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

export default HomePage;
