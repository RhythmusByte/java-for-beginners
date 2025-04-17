import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { CodeBlock, CopyBlock, dracula } from 'react-code-blocks';

const SimpleCalculatorDetail = () => {
  const project = {
    id: "simple-calculator",
    title: "Simple Calculator",
    description: "A beginner-friendly command-line calculator application in Java that performs basic arithmetic operations.",
    difficulty: "Beginner",
    tags: ["Beginner", "CLI", "Math"],
    image: "/images/projects/calculator.jpg",
    repoUrl: "https://github.com/rhythmusbyte/java-for-beginners"
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Navbar />
      
      <section className="pt-20 md:pt-28 pb-6 bg-gradient-to-b from-indigo-800 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg animate-fadeIn">
                <img 
                  src={project.image || "/images/projects/default-project.jpg"} 
                  alt={project.title} 
                  className="w-full rounded-md object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 md:pl-8 text-white animate-slideUp">
              <div className="flex items-center mb-4">
                <Link 
                  to="/projects" 
                  className="text-indigo-200 hover:text-white flex items-center mr-2"
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Projects
                </Link>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              
              <p className="text-lg text-indigo-100 mb-6">{project.description}</p>
              
              <div className="flex flex-wrap items-center mb-6">
                <span className={`px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 bg-green-600 text-white`}>
                  {project.difficulty}
                </span>
                
                {project.tags.map((tag, index) => (
                  <span key={index} className="px-3 py-1 bg-indigo-700 text-indigo-100 rounded-full text-sm font-medium mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-white text-indigo-700 font-medium rounded-md hover:bg-indigo-50 transition-all duration-300 shadow-md flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Repository
                </a>
                
                <a 
                  href={project.repoUrl + "#stargazers"}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                  Star this Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-300">
            <div className="md:flex">

              <div className="md:w-1/4 bg-gray-50 dark:bg-gray-900 p-6 transition-colors duration-300">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">
                  Project Guide
                </h2>
                <nav className="space-y-2">
                  <a href="#overview" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Overview</a>
                  <a href="#requirements" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Requirements</a>
                  <a href="#setup" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Project Setup</a>
                  <a href="#implementation" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Implementation</a>
                  <a href="#testing" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Testing</a>
                  <a href="#enhancements" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Optional Enhancements</a>
                  <a href="#conclusion" className="block text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-300">Conclusion</a>
                </nav>
              </div>
              
              <div className="md:w-3/4 p-6 md:p-8">
                <div className="prose dark:prose-invert max-w-none transition-colors duration-300">
                  <section id="overview" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Project Overview</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      In this project, you'll build a simple calculator application that runs in the command line. 
                      This calculator will be able to perform basic arithmetic operations: addition, subtraction, 
                      multiplication, and division.
                    </p>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      This project is perfect for beginners as it introduces fundamental Java concepts such as:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li>Taking user input</li>
                      <li>Basic data types</li>
                      <li>Conditional statements</li>
                      <li>Basic arithmetic operations</li>
                      <li>Simple error handling</li>
                      <li>Program flow control</li>
                    </ul>
                  </section>
                  
                  <section id="requirements" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Requirements</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Before you begin, make sure you have:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li>Java Development Kit (JDK) 8 or higher installed</li>
                      <li>A text editor or an Integrated Development Environment (IDE) like IntelliJ IDEA, Eclipse, or VS Code</li>
                      <li>Basic understanding of Java syntax</li>
                    </ul>
                  </section>
                  
                  <section id="setup" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Project Setup</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      First, create a new Java project with the following structure:
                    </p>
                    <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto transition-colors duration-300">
                      <code className="text-sm text-gray-800 dark:text-gray-300 transition-colors duration-300">
{`SimpleCalculator/
  └── src/
      └── Calculator.java`}
                      </code>
                    </pre>
                  </section>
                  
                  <section id="implementation" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Implementation</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Let's start by creating our Calculator class. Open the Calculator.java file and add the following code:
                    </p>

                    <div className="mb-6">
                      <CopyBlock
                        text={`import java.util.Scanner;

public class Calculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double num1, num2, result;
        char operator;
        
        System.out.println("Simple Calculator");
        System.out.println("----------------");
        
        // Get first number
        System.out.print("Enter first number: ");
        num1 = scanner.nextDouble();
        
        // Get the operator
        System.out.print("Enter an operator (+, -, *, /): ");
        operator = scanner.next().charAt(0);
        
        // Get second number
        System.out.print("Enter second number: ");
        num2 = scanner.nextDouble();
        
        // Perform calculation based on operator
        switch(operator) {
            case '+':
                result = num1 + num2;
                System.out.println(num1 + " + " + num2 + " = " + result);
                break;
                
            case '-':
                result = num1 - num2;
                System.out.println(num1 + " - " + num2 + " = " + result);
                break;
                
            case '*':
                result = num1 * num2;
                System.out.println(num1 + " * " + num2 + " = " + result);
                break;
                
            case '/':
                if(num2 != 0) {
                    result = num1 / num2;
                    System.out.println(num1 + " / " + num2 + " = " + result);
                } else {
                    System.out.println("Error! Cannot divide by zero.");
                }
                break;
                
            default:
                System.out.println("Error! Invalid operator. Please use +, -, *, or /");
        }
        
        scanner.close();
    }
}`}
                        language="java"
                        showLineNumbers={true}
                        theme={dracula}
                      />
                    </div>
                    
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Let's walk through the code:
                    </p>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li className="mb-2">We import <code>java.util.Scanner</code> to read user input from the console.</li>
                      <li className="mb-2">We create variables to store the input numbers, the result, and the operator.</li>
                      <li className="mb-2">We prompt the user to enter two numbers and an operator.</li>
                      <li className="mb-2">Using a switch statement, we perform the appropriate calculation based on the operator.</li>
                      <li className="mb-2">We handle the special case of division by zero.</li>
                      <li className="mb-2">Finally, we close the scanner to free up resources.</li>
                    </ol>
                  </section>
                  
                  <section id="testing" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Testing</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      To test your calculator, compile and run your program. Here's how to do it from the command line:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto transition-colors duration-300">
                      <code className="text-sm text-gray-800 dark:text-gray-300 transition-colors duration-300">
                        $ javac Calculator.java<br />
                        $ java Calculator
                      </code>
                    </div>
                    
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Here's an example of expected output:
                    </p>
                    <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-md mb-6 overflow-x-auto transition-colors duration-300">
                      <code className="text-sm text-gray-800 dark:text-gray-300 transition-colors duration-300">
                        Simple Calculator<br />
                        ----------------<br />
                        Enter first number: 10<br />
                        Enter an operator (+, -, *, /): +<br />
                        Enter second number: 5<br />
                        10.0 + 5.0 = 15.0
                      </code>
                    </div>
                    
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Make sure to test all operations and error scenarios:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li>Addition: 10 + 5 = 15</li>
                      <li>Subtraction: 10 - 5 = 5</li>
                      <li>Multiplication: 10 * 5 = 50</li>
                      <li>Division: 10 / 5 = 2</li>
                      <li>Division by zero: 10 / 0 should show an error message</li>
                      <li>Invalid operator: 10 $ 5 should show an error message</li>
                    </ul>
                  </section>
                  
                  <section id="enhancements" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Optional Enhancements</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      If you want to take this project further, here are some enhancements you can make:
                    </p>
                    <ol className="list-decimal pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li className="mb-2">
                        <strong>Continuous Operation:</strong> Allow the user to perform multiple calculations without restarting the program.
                      </li>
                      <li className="mb-2">
                        <strong>More Operations:</strong> Add support for more operations such as modulus (%), exponentiation (^), etc.
                      </li>
                      <li className="mb-2">
                        <strong>Memory Function:</strong> Add the ability to store and recall previous results.
                      </li>
                      <li className="mb-2">
                        <strong>Input Validation:</strong> Add more robust input validation to handle non-numeric inputs gracefully.
                      </li>
                      <li className="mb-2">
                        <strong>Expression Parsing:</strong> Instead of entering numbers and operators separately, allow the user to enter a complete expression like "10 + 5".
                      </li>
                    </ol>
                  </section>
                  
                  <section id="conclusion" className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Conclusion</h2>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      Congratulations! You've successfully built a simple calculator in Java. This project has introduced you to several important concepts:
                    </p>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li>Reading user input with Scanner</li>
                      <li>Using conditional statements (switch-case)</li>
                      <li>Performing basic arithmetic operations</li>
                      <li>Handling special cases (like division by zero)</li>
                      <li>Basic error handling</li>
                    </ul>
                    <p className="mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      As you continue your Java journey, you'll build upon these fundamentals to create more complex and powerful applications.
                    </p>
                  </section>
                  
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-8 mt-12 transition-colors duration-300">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-300">Additional Resources</h3>
                    <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/operators.html" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-300" target="_blank" rel="noopener noreferrer">Java Operators</a></li>
                      <li><a href="https://docs.oracle.com/javase/tutorial/essential/io/scanning.html" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-300" target="_blank" rel="noopener noreferrer">Reading Input using Scanner</a></li>
                      <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/switch.html" className="text-indigo-600 dark:text-indigo-400 hover:underline transition-colors duration-300" target="_blank" rel="noopener noreferrer">Switch Statement in Java</a></li>
                    </ul>
                    
                    <div className="flex justify-between items-center mt-8">
                      <a 
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-all duration-300 shadow-md flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        View Repository
                      </a>
                    </div>
                  </div>
                </div>
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
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SimpleCalculatorDetail;
