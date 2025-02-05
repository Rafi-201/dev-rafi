const Projects = () => {
  const projects = [
    {
      title: 'Tennant',
      description: 'Built and optimized backend for a high-traffic tenant management platform supporting real-time data processing.',
      technologies: 'Node.js, Azure SQL, SQL Server, Azure Functions, Blob Storage, Service Bus Queues, IoT Event Hub, API Management, Key Vault, Logic Apps, Monitor & Application Insights',
    },
    {
      title: 'COLORMAN',
      description: 'Creator of a 2D mobile game (Unity 2D, C#, Android, iOS).',
      date: '(07/2020)',
    },
    {
      title: 'URL Shortener Web App',
      description: 'Took an active role in the implementation of a distributed TinyURL service, overseeing unique short URL generation, efficient mapping retrieval, and user account-based access. Ensured robust system reliability and data integrity through proficient distributed system design.',
      technologies: 'Node.js, Express, PostgreSQL, Hashing Algorithms',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> {/* Added lg:grid-cols-3 */}
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md transition duration-300 hover:scale-105">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              {project.technologies && ( // Conditionally render technologies
                <div className="text-gray-600 mb-2">
                  <strong>Technologies:</strong> {project.technologies}
                </div>
              )}
              {project.date && ( // Conditionally render date
                <div className="text-gray-600">{project.date}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;