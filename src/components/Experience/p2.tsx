import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react'; // Import icons

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Brain Station 23',
      location: 'Dhaka, Bangladesh',
      dates: '06/2023 - Current',
      points: [
        'Developed and maintained scalable backend systems using Node.js for real-time processing and asynchronous tasks.',
        'Optimized SQL queries for Azure SQL and SQL Server, improving performance by 35%.',
        'Worked with Azure Functions, Blob Storage, and other cloud services to enhance backend capabilities.',
        'Key achievements include improving query response times and delivering impactful cloud-based solutions.',
      ],
    },
    {
      title: 'Software Engineer, Intern',
      company: 'Brain Station 23',
      location: 'Dhaka, Bangladesh',
      dates: '03/2023 - 06/2023',
      points: [
        'Developed backend APIs for managing students, teachers, and classes (Node.js, Express, MongoDB, JWT Authentication).',
      ],
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold mb-8 text-center text-white drop-shadow-lg">
          Experience
        </h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-102 relative"
            >
              {/* Dates */}
              <div className="absolute top-3 right-3 text-sm text-indigo-600">
                <Calendar size={16} className="inline-block mr-1" />
                {exp.dates}
              </div>

              {/* Job Title and Company */}
              <h3 className="text-2xl font-semibold text-indigo-800 hover:text-indigo-600 mb-3">
                <Briefcase size={20} className="inline-block mr-2 text-indigo-600" />
                {exp.title}
              </h3>

              {/* Company and Location */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin size={16} className="mr-1 text-indigo-500" />
                {exp.company} | {exp.location}
              </div>

              {/* Job Responsibilities */}
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="hover:text-indigo-700 transition-all duration-300">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Click for More Section */}
              <div className="absolute bottom-4 left-4 text-xs text-indigo-500 opacity-0 transition-all duration-300 hover:opacity-100">
                <span className="inline-block py-1 px-3 bg-indigo-200 text-indigo-800 rounded-full flex items-center space-x-1 hover:bg-indigo-300">
                  <ArrowRight size={14} />
                  <span>Click for More</span>
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
