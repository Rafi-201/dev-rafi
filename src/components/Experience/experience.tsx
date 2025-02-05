const Experience = () => {
    const experiences = [
      {
        title: 'Software Engineer',
        company: 'Brain Station 23',
        location: 'Dhaka, Bangladesh',
        dates: '06/2023 - Current',
        points: [
          'Backend Development: Developed and maintained scalable backend systems using Node.js, focusing on real-time processing and asynchronous tasks.',
          'Database Optimization: Enhanced SQL query performance for Azure SQL and SQL Server, improving efficiency by 35%.',
          'Azure Cloud Services: Hands-on experience with Azure Functions, Blob Storage, Service Bus, IoT Event Hub, Key Vault.',
          'Key Achievements: Improved query response times by 35%, significantly enhancing system performance. Successfully delivered a high-profile cloud-based solution recognized for its business impact and operational efficiency.',
        ],
      },
      {
        title: 'Software Engineer, Intern',
        company: 'Brain Station 23',
        location: 'Dhaka, Bangladesh',
        dates: '03/2023 - 06/2023',
        points: [
          'School Management System: Developed backend APIs for managing students, teachers, and classes (Node.js, Express, MongoDB, JWT Authentication).',
        ],
      },
    ];
  
    return (
      <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-extrabold mb-10 text-center text-white drop-shadow-2xl">
            Experience
          </h2>
          <div className="flex flex-col gap-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:rotate-3 hover:shadow-lg hover:bg-indigo-50 relative"
              >
                <div className="absolute top-4 right-4">
                  <div className="text-indigo-600 font-medium text-sm">{exp.dates}</div>
                </div>
                <h3 className="text-3xl font-semibold mb-2 text-indigo-800 hover:text-indigo-500 transition-colors">
                  {exp.title}
                </h3>
                <div className="text-gray-700 mb-4">
                  {exp.company} | {exp.location}
                </div>
                <ul className="list-disc pl-6 text-gray-800 marker:text-indigo-500 space-y-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="transition duration-300 transform hover:scale-105 hover:text-indigo-700">
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="absolute bottom-4 left-4 text-sm text-indigo-500 opacity-0 transition-all duration-300 hover:opacity-100">
                  <span className="inline-block py-1 px-3 bg-indigo-200 text-indigo-800 rounded-full">
                    Click for More
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  