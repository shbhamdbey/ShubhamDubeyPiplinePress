import React from 'react';
import { Calendar, GraduationCap, Briefcase, MapPin } from 'lucide-react';

export default function About() {
  const timelineEvents = [
    {
      year: '1996',
      title: 'The Beginning',
      location: 'Indore, India',
      description: 'Born in Indore, India, marking the start of a promising journey.',
      icon: Calendar,
      image: '/images/born.jpg' // Replace with your actual birth picture path
    },
    {
      year: '2014',
      title: 'School Graduation',
      location: 'New Digamber Public School',
      description: 'Passed school with a strong foundation in Physics, Chemistry, and Maths.',
      icon: GraduationCap,
      image: '/images/school.jpg' // Replace with your school graduation picture path
    },
    {
      year: '2018',
      title: 'Bachelor of Engineering',
      location: 'Information Technology',
      description: 'Completed Bachelor of Engineering in Information Technology, building technical skills.',
      icon: GraduationCap,
      image: '/images/bachelor.jpg' // Replace with your bachelor picture path
    },
    {
      year: '2021',
      title: 'Master of Science',
      location: 'Computer Science',
      description: 'Earned a Master of Science in Computer Science with majors in Data Science and Machine Learning.',
      icon: GraduationCap,
      image: '/images/masters.jpg' // Replace with your master picture path
    },
    {
      year: '2021 - Present',
      title: 'Data Engineer',
      location: 'Covetrus',
      description: 'Working as a Data Engineer at Covetrus, specializing in Kafka, Snowflake, and DBT.',
      icon: Briefcase,
      image: '/images/job.jpg' // Replace with your work picture path
    }
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center vintage-border bg-[#e8e6e1] p-8">
          <h1 className="headline text-5xl font-bold mb-6">The Data of Progress</h1>
          <div className="article-text text-lg leading-relaxed mb-8">
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-3">
            By day, I wrangle billions of unruly data rows into submission across 135+ pipelines at companies like Covetrus and Pfizer. When not sweet-talking DBT into transforming chaos into order, I'm convincing Snowflake and Kafka to play nicely together to slash costs while keeping data integrity intact. I've mastered the art of data modeling that turns yesterday's numbers into tomorrow's strategy. Armed with Python, Java, and an arsenal of cloud platforms, I transform digital puzzles into business solutions that actually move the needle—no magic wand required, just serious technical chops and the occasional caffeine-fueled coding marathon.
            </p>
          </div>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <MapPin className="text-black" size={20} />
            <span className="text-sm uppercase tracking-widest">Currently Based in New Jersey</span>
          </div>
          {/* Resume Download Button */}
          <div className="mt-4">
            <a 
              href="/ShubhamDubeyDE3.pdf" 
              download 
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[15px] md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-black"></div>

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Timeline Point */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#e8e6e1] border-2 border-black rounded-full flex items-center justify-center">
                  <event.icon size={16} />
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="vintage-border bg-[#e8e6e1] p-6">
                    <div className="font-['Old_Standard_TT']">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="headline text-xl font-bold">{event.title}</h3>
                        <span className="text-sm uppercase tracking-wider">{event.year}</span>
                      </div>
                      <p className="text-sm uppercase tracking-wider text-gray-600 mb-3">{event.location}</p>
                      <p className="text-gray-800">{event.description}</p>
                      {/* Picture Section */}
                      {event.image && (
                        <div className="mt-4">
                          <img 
                            src={event.image} 
                            alt={`${event.title} image`} 
                            className="w-full h-auto rounded shadow-md"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="vintage-border bg-[#e8e6e1] p-8">
          <h2 className="headline text-3xl font-bold mb-6 text-center">Technical Expertise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Languages</h3>
              <ul className="space-y-2 font-['Old_Standard_TT']">
                <li>Python</li>
                <li>Java</li>
                <li>R</li>
                <li>C++</li>
                <li>JavaScript/TypeScript</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Frameworks</h3>
              <ul className="space-y-2 font-['Old_Standard_TT']">
                <li>Apache Kafka</li>
                <li>Apache Spark</li>
                <li>Apache Airflow</li>
                <li>Apache Hadoop</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4 uppercase tracking-wider text-sm">Tools</h3>
              <ul className="space-y-2 font-['Old_Standard_TT']">
                <li>DBT</li>
                <li>Snowflake</li>
                <li>Azure Data Factory</li>
                <li>AWS Lambda</li>
                <li>Terraform</li>
                <li>Docker</li>
                <li>CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
