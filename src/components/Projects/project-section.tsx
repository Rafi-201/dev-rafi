
const Projects = () => {
  const projects = [
    {
      title: 'Tennant',
      description: 'Built and optimized backend for a high-traffic tenant management platform supporting real-time data processing.',
      technologies: 'Node.js, Azure SQL, SQL Server, Azure Functions, Blob Storage, Service Bus Queues, IoT Event Hub, API Management, Key Vault, Logic Apps, Monitor & Application Insights',
      role: 'Backend Developer',
      date: '2022 - Present',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/400x200', // Add project image URL
      achievements: [
        'Improved system performance by 40% through optimized database queries.',
        'Implemented real-time data processing for 10,000+ concurrent users.',
        'Integrated Azure services for seamless scalability.',
      ],
    },
    {
      title: 'COLORMAN',
      description: 'Creator of a 2D mobile game (Unity 2D, C#, Android, iOS).',
      technologies: 'Unity 2D, C#, Android, iOS',
      role: 'Game Developer',
      date: '07/2020',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/400x200', // Add project image URL
      achievements: [
        'Designed and developed a 2D mobile game with 50,000+ downloads.',
        'Implemented in-app purchases and ads for monetization.',
        'Optimized game performance for low-end devices.',
      ],
    },
    {
      title: 'URL Shortener Web App',
      description: 'Took an active role in the implementation of a distributed TinyURL service, overseeing unique short URL generation, efficient mapping retrieval, and user account-based access. Ensured robust system reliability and data integrity through proficient distributed system design.',
      technologies: 'Node.js, Express, PostgreSQL, Hashing Algorithms',
      role: 'Full Stack Developer',
      date: '2021 - 2022',
      link: 'https://example.com',
      image: 'https://via.placeholder.com/400x200', // Add project image URL
      achievements: [
        'Reduced URL retrieval time by 30% using efficient hashing algorithms.',
        'Implemented user authentication and access control.',
        'Designed a scalable architecture to handle 1M+ requests per day.',
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold mb-16 text-center text-gray-800">Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 h-full w-4 flex justify-center">
                <div className="h-4 w-4 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors duration-300"></div>
              </div>

              {/* Card Content */}
              <div className="ml-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 transform hover:-translate-y-2">
                {/* Project Title and Date */}
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-800">{project.title}</h3>
                  <span className="text-gray-600 text-sm">{project.date}</span>
                </div>

                {/* Project Description */}
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <strong className="text-gray-700">Technologies:</strong>
                  <p className="text-gray-600 mt-1">{project.technologies}</p>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <strong className="text-gray-700">Achievements:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="mb-1">{achievement}</li>
                    ))}
                  </ul>
                </div>

                {/* Visit Project Button */}
                <div className="text-center">
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-100 text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg active:bg-blue-800"
                        >
                        View Details
                    </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;