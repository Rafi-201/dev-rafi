import { Briefcase, MapPin, Calendar, ArrowRight } from 'lucide-react'; // Import icons

const Experience = () => {
  const experiences = [
      {
        title: "Software Engineer",
        company: "Brain Station 23",
        location: "Dhaka, Bangladesh",
        dates: "07/2023 - Present",
        points: [
            "Designed, developed, and maintained complex software solutions using technologies such as Node and Golang.",
            "Led the design and implementation of new features, working closely with product managers and cross-functional teams to ensure alignment with business goals and user needs.",
            "Performed thorough code reviews, providing feedback to peers and ensuring high-quality standards are maintained across the codebase.",
            "Optimized application performance, scalability, and reliability by identifying bottlenecks and implementing solutions to improve system efficiency.",
            "Mentored junior developers, providing guidance on best practices, coding standards, and career development.",
            "Collaborated in an Agile development environment, contributing to sprint planning, sprint reviews, and retrospectives to improve team performance.",
            "Enhanced system architecture by applying design patterns and best practices, improving maintainability and scalability of the codebase.",
            "Contributed to the continuous improvement of development processes, including automation, CI/CD pipelines, and code testing strategies.",
            "Utilized cloud technologies (e.g., AWS, Azure) to develop and deploy applications, ensuring high availability and fault tolerance.",
            "Led troubleshooting and debugging efforts for complex production issues, minimizing downtime and impact on users.",
            "Developed comprehensive technical documentation, including API references, system architecture diagrams, and user-facing documentation."
        ]
    },
  
    {
        title: "Associate Software Engineer",
        company: "Brain Station 23",
        location: "Dhaka, Bangladesh",
        dates: "03/2023 - 06/2023",
        points: [
          "Developed and maintained scalable and efficient software applications using technologies such as Node, Golang.",
          "Collaborated with cross-functional teams to design, implement, and deploy new features, ensuring alignment with business requirements.",
          "Debugged and resolved software defects, improving system performance and user experience.",
          "Participated in Agile development processes, including daily stand-ups, sprint planning, and retrospectives, to deliver high-quality software on time.",
          "Wrote clean, maintainable, and well-documented code following industry best practices and coding standards.",
          "Conducted unit testing and integration testing to ensure software reliability and functionality.",
          "Utilized version control systems like Git to manage codebase and collaborate effectively with team members.",
          "Assisted in optimizing database queries and application performance to enhance system efficiency.",
          "Contributed to technical documentation, including design specifications, API documentation, and user manuals.",
          "Collaborated with senior developers and stakeholders to understand requirements and translate them into technical solutions.",
          "Stayed updated with emerging technologies and tools, applying them to improve development processes and outcomes."
        ]
    }
  ];

  return (
    <section className="py-12 bg-white">
         <h2 className="text-4xl font-bold mb-8">Experience</h2>
      <div className="container mx-auto px-4">

     

        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-xm hover:shadow-xm transition-shadow duration-300 transform hover:scale-102 relative border border-gray-300"
            >
              {/* Dates */}
              <div className="absolute top-3 right-3 text-sm text-gray-600">
                <Calendar size={16} className="inline-block mr-1 text-gray-600" />
                {exp.dates}
              </div>

              {/* Job Title and Company */}
              <h3 className="text-2xl font-semibold text-black hover:text-gray-800 mb-3">
                <Briefcase size={20} className="inline-block mr-2 text-gray-600" />
                {exp.title}
              </h3>

              {/* Company and Location */}
              <div className="flex items-center text-sm text-gray-600 mb-4">
                <MapPin size={16} className="mr-1 text-gray-600" />
                {exp.company} | {exp.location}
              </div>

              {/* Job Responsibilities */}
              <ul className="list-disc pl-5 text-gray-800 text-sm space-y-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="hover:text-gray-700 transition-all duration-300">
                    {point}
                  </li>
                ))}
              </ul>

              {/* Click for More Section */}
              <div className="absolute bottom-4 left-4 text-xs text-gray-600 opacity-0 transition-all duration-300 hover:opacity-100">
                <span className="inline-block py-1 px-3 bg-gray-200 text-gray-700 rounded-full flex items-center space-x-1 hover:bg-gray-300">
                  <ArrowRight size={14} className="text-gray-600" />
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
