import { Briefcase, Code, GraduationCap, Award } from 'lucide-react';

export default function About(){
    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-4xl mx-auto">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                        Stephen Demaine
                    </h1>
                    <p className="text-xl text-gray-400">Senior Software Engineer</p>
                    <div className="mt-4 text-gray-300">
                        <a href="tel:+16036626268" className="mr-4 hover:text-blue-400 transition-colors">
                            (603) 662-6268
                        </a>
                        <a href="mailto:stephendemaine@gmail.com" className="hover:text-blue-400 transition-colors">
                            stephendemaine@gmail.com
                        </a>
                    </div>
                </header>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex">
                        <Briefcase className="mr-2 text-purple-500" /> Professional Summary
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Innovative Senior Software Engineer with 13 years of experience, including 8 years in a senior role,
                        specializing in developing robust, scalable software solutions. Proven track record of architecting
                        and implementing complex systems that drive business efficiency and provide business leaders and
                        end-users with the tools necessary to excel in their roles. Expertise in full-stack development,
                        API integrations, and optimizing performance for global users.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <Code className="mr-2 text-purple-500" /> Technical Skills
                    </h2>
                    <div className="flex flex-wrap gap-2">
                        {[
                            "C#", "TypeScript/JavaScript", "Golang", "PowerApps", "Power Automate", "Power BI",
                            "SharePoint", "PowerFx", "React", "Angular", "Wails", "Leaflet", "SQL", "SQL Server",
                            "SQLite", "Agile (Scrum, Kanban)", "Software Development Lifecycle (SDLC)", "Git/GitHub"
                        ].map((skill, index) => (
                            <span key={index} className="bg-gray-800 text-blue-300 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <Briefcase className="mr-2 text-purple-500" /> Professional Experience
                    </h2>
                    <div className="space-y-8">
                        <ExperienceItem
                            title="Senior Software Engineer"
                            company="Hartree Partners (acquired Sprague)"
                            period="October 2023 – Present"
                            achievements={[
                                "Created a high-performance mapping program using Golang, Wails, and React with Leaflet",
                                "Implemented local caching with SQLite, reducing latency for global users by up to 90%",
                                "Integrated real-time vessel tracking API, providing up-to-date information for over 10,000 maritime assets",
                                "Maintain the VaR (value at risk) system and ensure daily performance",
                                "Created SQL stored procedures to aggregate the VaR for customized portfolios"
                            ]}
                        />
                        <ExperienceItem
                            title="Senior Software Engineer"
                            company="Sprague Energy"
                            period="September 2012 – October 2023"
                            achievements={[
                                "Architected and developed a comprehensive Fleet Management and Maintenance system",
                                "Integrated multiple vendor systems, aggregating transactional data for over 1,000,000 annual transactions",
                                "Developed an automated reporting tool that increased back-office efficiency by over 80%",
                                "Optimized tank monitoring system, increasing reliability in a major way",
                                "Mentored 2 junior developers, both of whom were promoted within 2 years"
                            ]}
                        />
                        <ExperienceItem
                            title="Software Engineer / Business Analyst"
                            company="Fletcher Allen"
                            period="Oct. 2011 - Sept. 2012"
                            achievements={[
                                "Implemented the Mercurial version control system on the development team",
                                "Supported the internal eCRM system"
                            ]}
                        />
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <GraduationCap className="mr-2 text-purple-500" /> Education
                    </h2>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <h3 className="text-xl font-semibold text-blue-300">Bachelor of Science in Computer Science</h3>
                        <p className="text-gray-400">Granite State College | 2011</p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-4 flex items-center">
                        <Award className="mr-2 text-purple-500" /> Professional Development
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        Actively expanding expertise in industry trends and leveraging new opportunities.
                        Committed to continuous learning and staying at the forefront of emerging technologies
                        in software development, including proper use of AI tooling.
                    </p>
                </section>
            </div>
        </div>
    );
}

type ExperienceItemProps = {
    title: string;
    company: string;
    period: string;
    achievements: string[];
};

const ExperienceItem = ({ title, company, period, achievements }: ExperienceItemProps) => (
    <div className="bg-gray-800 p-6 rounded-lg">
        <h3 className="text-xl font-semibold text-blue-300">{title}</h3>
        <p className="text-gray-400 mb-2">{company} | {period}</p>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
            {achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
            ))}
        </ul>
    </div>
)