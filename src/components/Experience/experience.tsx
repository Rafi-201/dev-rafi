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
    <section className="py-12 bg-gray-100"> {/* Added background and padding */}
      <div className="container mx-auto px-4"> {/* Container for centering */}
        <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2> {/* Title */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> {/* Grid for responsiveness */}
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md transition duration-300 hover:scale-105"> {/* Card styling */}
              <h3 className="text-xl font-semibold mb-2">{exp.title}</h3>
              <div className="text-gray-600 mb-4">
                {exp.company} | {exp.location}
              </div>
              <div className="text-gray-600 mb-4">{exp.dates}</div>
              <ul className="list-disc pl-6 text-gray-700">
                {exp.points.map((point, i) => (
                  <li key={i} className="mb-2">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;