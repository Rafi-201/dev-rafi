import { Link, Github, Code, Award } from 'lucide-react'; // Import necessary icons

const Projects = () => {
  const projects = [
    {
      title: 'Tennant',
      description: 'Optimized backend for a tenant management platform with real-time data processing, supporting 10,000+ concurrent users.',
      technologies: 'Node.js, Azure SQL, SQL Server, Azure Functions, Blob Storage, Service Bus, IoT Event Hub, Key Vault',
      role: 'Backend Developer',
      date: '2022 - Present',
      link: 'https://iris.tennantco.com/',
      achievements: [
        'Optimized database queries for 40% performance improvement.',
        'Implemented real-time data processing for high traffic.',
        'Integrated Azure services for scalability.',
      ],
    },
    {
      title: 'DarkLife',
      description: 'Developed a 2D mobile game with Unity and C#, optimized for both Android and iOS.',
      technologies: 'Unity 2D, C#, Android, iOS',
      role: 'Game Developer',
      date: '07/2020',
      link: 'https://null577.itch.io/life',
      achievements: [
        'Implemented in-app purchases and ads.',
        'Optimized performance for low-end devices.',
      ],
    },
    {
      title: 'URL Shortener Web App',
      description: 'Built a scalable URL shortener service with Node.js and PostgreSQL, handling millions of requests daily.',
      technologies: 'Node.js, Express, PostgreSQL, Hashing Algorithms',
      role: 'Full Stack Developer',
      date: '2021 - 2022',
      link: 'https://example.com',
      achievements: [
        'Improved URL retrieval time by 30% with efficient hashing.',
        'Implemented user authentication and access control.',
        'Designed a scalable architecture for 1M+ daily requests.',
      ],
    },
  ];

  return (
    <section className="py-12 bg-white">
               <h2 className="text-4xl font-bold mb-8">Projects</h2>

      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center text-black mb-8">Projects</h2> */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-200"
            >
              {/* Project Header: Title, Date, Role */}
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-black">{project.title}</h3>
                  <span className="text-xs text-gray-500">{project.date}</span>
                </div>
                <div className="text-xs text-gray-600">{project.role}</div>
              </div>

              {/* Project Description */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Code className="text-gray-600" size={16} />
                  <strong className="text-sm text-black">Description:</strong>
                </div>
                <p className="text-sm text-gray-700 mt-1">{project.description}</p>
              </div>

              {/* Technologies Section */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Link className="text-gray-600" size={16} />
                  <strong className="text-sm text-black">Technologies:</strong>
                </div>
                <p className="text-xs text-gray-600 mt-1">{project.technologies}</p>
              </div>

              {/* Achievements Section */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  <Award className="text-gray-600" size={16} />
                  <strong className="text-sm text-black">Key Achievements:</strong>
                </div>
                <ul className="list-disc list-inside text-xs text-gray-600 mt-1">
                  {project.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>

              {/* View Project Button */}
              <div className="mt-4 text-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-white text-xs px-5 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;