import CV from "../CV/CV"

function Info() {

    return (
      <>
     <div className="bg-white rounded-lg py-8 max-w-3xl w-full">
        <div className="flex items-center mb-4">
            <div className="bg-blue-500 text-white rounded-full p-2 mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            </div>
            <h2 className="text-2xl font-bold flex-1">Hello, I'm Rafi.</h2>
            <div className="ml-4">
                <CV />
            </div>            
        </div>
        <p className="mb-4">A results-driven software engineer with a passion for building and optimizing scalable backend systems.</p>
        <p className="mb-4">A backend expert specializing in high-performance microservices, API optimization, and cloud scalability. Proven ability to debug complex issues, fine-tune database queries, and enhance system efficiency. Passionate about building resilient architectures, supporting teams, and delivering impact at scale. Always pushing boundaries to solve hard problems with clean, efficient code.</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded">
            Book a call
        </button>
      </div>
      </>
    )
  }
  
  export default Info
  