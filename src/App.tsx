import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Briefcase, Code } from 'lucide-react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';
import './App.css';

const App: React.FC = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen bg-gray-900 rounded-2xl border-2 border-amber-300">
                <nav className="bg-gray-800 text-white p-4 rounded-t-2xl">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold"></div>
                        <ul className="flex space-x-4">
                            <NavLink to="/" icon={<Home size={20} />}>About</NavLink>
                            <NavLink to="/projects" icon={<Briefcase size={20} />}>Projects</NavLink>
                            <NavLink to="/skills" icon={<Code size={20} />}>Skills</NavLink>
                        </ul>
                    </div>
                </nav>

                <main className="flex-grow rounded-2xl">
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/skills" element={<Skills />} />
                    </Routes>
                </main>

                <footer className="bg-gray-800 text-white p-4  rounded-b-2xl border-t-2 border-t-amber-300 text-center">
                    <p>&copy; 2024 Stephen Demaine. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
    icon: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, icon }) => (
    <li>
        <Link
            to={to}
            className="flex items-center hover:text-blue-400 transition-colors duration-200"
        >
            {icon}
            <span className="ml-1">{children}</span>
        </Link>
    </li>
);

export default App;