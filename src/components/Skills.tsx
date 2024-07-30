import React from 'react';
import { Code, Database, Server, Globe, Hammer } from 'lucide-react';

interface Skill {
    name: string;
    category: 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'methodologies';
}

const Skills: React.FC = () => {
    const skills: Skill[] = [
        // Frontend
        { name: 'React', category: 'frontend' },
        { name: 'Angular', category: 'frontend' },
        { name: 'TypeScript', category: 'frontend' },
        { name: 'JavaScript', category: 'frontend' },
        { name: 'HTML5/CSS3', category: 'frontend' },
        { name: 'Responsive Design', category: 'frontend' },
        { name: 'Webpack', category: 'frontend' },
        { name: 'Redux', category: 'frontend' },

        // Backend
        { name: 'C#', category: 'backend' },
        { name: '.NET Core/.NET 5+', category: 'backend' },
        { name: 'ASP.NET MVC', category: 'backend' },
        { name: 'Web API', category: 'backend' },
        { name: 'Entity Framework', category: 'backend' },
        { name: 'Golang', category: 'backend' },
        { name: 'Node.js', category: 'backend' },
        { name: 'RESTful APIs', category: 'backend' },

        // Database
        { name: 'SQL Server', category: 'database' },
        { name: 'SQLite', category: 'database' },
        { name: 'PostgreSQL', category: 'database' },
        { name: 'MongoDB', category: 'database' },
        { name: 'ORM technologies', category: 'database' },
        { name: 'Database Design', category: 'database' },

        // Tools & Platforms
        { name: 'Git/GitHub', category: 'tools' },
        { name: 'Visual Studio', category: 'tools' },
        { name: 'VS Code', category: 'tools' },
        { name: 'PowerApps', category: 'tools' },
        { name: 'Power Automate', category: 'tools' },
        { name: 'Power BI', category: 'tools' },
        { name: 'SharePoint', category: 'tools' },
        // { name: 'Jira', category: 'tools' },

        // Methodologies & Concepts
        { name: 'Agile/Scrum', category: 'methodologies' },
        { name: 'SDLC', category: 'methodologies' },
        { name: 'Microservices Architecture', category: 'methodologies' },
        { name: 'Design Patterns', category: 'methodologies' },
        { name: 'SOLID Principles', category: 'methodologies' },
    ];

    const categories = [
        { name: 'Frontend', icon: <Globe className="w-6 h-6" />, key: 'frontend' },
        { name: 'Backend', icon: <Server className="w-6 h-6" />, key: 'backend' },
        { name: 'Database', icon: <Database className="w-6 h-6" />, key: 'database' },
        { name: 'Tools & Platforms', icon: <Hammer className="w-6 h-6" />, key: 'tools' },
        { name: 'Methodologies', icon: <Code className="w-6 h-6" />, key: 'methodologies' },
    ] as const;

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center text-blue-500">
                    Technical Skills
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div key={category.key} className="bg-gray-800 rounded-lg p-6 shadow-lg">
                            <h2 className="text-2xl font-semibold mb-4 flex items-center text-blue-400">
                                {category.icon}
                                <span className="ml-2">{category.name}</span>
                            </h2>
                            <ul className="space-y-2">
                                {skills
                                    .filter((skill) => skill.category === category.key)
                                    .map((skill) => (
                                        <li key={skill.name} className="text-gray-300 hover:text-blue-300 transition-colors duration-200">
                                            {skill.name}
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;