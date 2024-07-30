import React from 'react';
import { Globe, Truck, FileText, BarChart, LucideIcon } from 'lucide-react';

interface Project {
    title: string;
    icon: React.ReactElement<LucideIcon>;
    description: string;
    achievements: string[];
    technologies: string[];
}

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            title: "H3 (Hartree Harbour Hub)",
            icon: <Globe className="w-12 h-12 text-blue-500" />,
            description: "Global Mapping Application for maritime asset tracking.",
            achievements: [
                "Created a high-performance mapping program using Golang, Wails, and React with Leaflet",
                "Implemented local caching with SQLite, reducing latency for global users by up to 90%",
                "Integrated real-time vessel tracking API, providing up-to-date information for over 10,000 maritime assets"
            ],
            technologies: ["Golang", "Wails", "React", "Leaflet", "SQLite"]
        },
        {
            title: "FleetControl System",
            icon: <Truck className="w-12 h-12 text-green-500" />,
            description: "Comprehensive Fleet Management and Maintenance system.",
            achievements: [
                "Built a full-stack PowerApps/DataVerse solution for fleet management delivery ticket system",
                "Implemented OCR capabilities with continual training for increasing performance",
                "Integrated with existing legacy systems using .NET/C#",
                "Aggregated transactional data for over 1,000,000 annual transactions",
                "Implemented FTP integration with US Bank's Voyager system for automated CRUD operations"
            ],
            technologies: ["PowerApps", "DataVerse", ".NET", "C#", "OCR", "FTP"]
        },
        {
            title: "OneClickInvoice/MyDocuments Portal",
            icon: <FileText className="w-12 h-12 text-purple-500" />,
            description: "Web portal for seamless invoice and delivery ticket management.",
            achievements: [
                "Architected and developed a web portal for invoice and delivery ticket management",
                "Enabled automatic PDF generation and download of combined documents",
                "Saved the billing team 10+ hours of work each week",
                "Project was instrumental in winning a multi-million dollar contract with New York Transit Authority"
            ],
            technologies: ["Web Development", "PDF Generation", "Database Management"]
        },
        {
            title: "ReportCommander",
            icon: <BarChart className="w-12 h-12 text-yellow-500" />,
            description: "Automated reporting tool for increased back-office efficiency.",
            achievements: [
                "Developed an automated reporting tool that increased back-office efficiency by over 80%",
                "Enabled developers to generate reports with little effort",
                "Streamlined FTP uploading/downloading processes"
            ],
            technologies: ["Automation", "Reporting", "FTP"]
        }
    ];

    return (
        <div className="bg-gray-900 text-white min-h-screen p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                    Key Projects
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
};

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="p-6">
                <div className="flex items-center mb-4">
                    {project.icon}
                    <h2 className="text-2xl font-semibold ml-4">{project.title}</h2>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <h3 className="text-lg font-semibold mb-2 text-blue-400">Key Achievements:</h3>
                <ul className="list-disc list-inside mb-4 text-gray-300 space-y-2">
                    {project.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                    ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-gray-700 text-blue-300 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;