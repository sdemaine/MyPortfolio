import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface MenuItem {
    name: string;
    link: string;
    dropdownItems?: { name: string; link: string }[];
}

const NavMenu: React.FC = () => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const menuItems: MenuItem[] = [
        { name: 'Home', link: '#' },
        { name: 'About', link: '#' },
        {
            name: 'Projects',
            link: '#',
            dropdownItems: [
                { name: 'Web Apps', link: '#web-apps' },
                { name: 'Desktop Apps', link: '#desktop-apps' },
                { name: 'Mobile Apps', link: '#mobile-apps' },
            ]
        },
        {
            name: 'Skills',
            link: '#',
            dropdownItems: [
                { name: 'C#', link: '#csharp' },
                { name: 'Angular', link: '#angular' },
                { name: 'SQL', link: '#sql' },
                { name: 'React', link: '#react' },
                { name: 'TypeScript', link: '#typescript' },
            ]
        },
        { name: 'Contact', link: '#' },
    ];

    const toggleDropdown = (itemName: string) => {
        setActiveDropdown(activeDropdown === itemName ? null : itemName);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-md p-4 z-50">
            <ul className="flex justify-center items-center space-x-12">
                {menuItems.map((item) => (
                    <li key={item.name} className="relative group">
                        <a
                            href={item.link}
                            className="text-gray-400 text-2xl font-normal uppercase transition-all duration-500 ease-in-out flex items-center"
                            onClick={(e) => {
                                if (item.dropdownItems) {
                                    e.preventDefault();
                                    toggleDropdown(item.name);
                                }
                            }}
                        >
              <span className="relative">
                <span className="relative z-10">{item.name}</span>
                <span
                    className="absolute inset-0 w-0 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 overflow-hidden transition-all duration-500 ease-in-out group-hover:w-full"
                    aria-hidden="true"
                >
                  {item.name}
                </span>
              </span>
                            {item.dropdownItems && (
                                <ChevronDown
                                    size={20}
                                    className={`ml-1 transition-transform duration-300 ${
                                        activeDropdown === item.name ? 'rotate-180' : ''
                                    }`}
                                />
                            )}
                        </a>
                        {item.dropdownItems && (
                            <ul
                                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-300 ${
                                    activeDropdown === item.name
                                        ? 'opacity-100 visible translate-y-0'
                                        : 'opacity-0 invisible -translate-y-2'
                                }`}
                            >
                                {item.dropdownItems.map((dropdownItem) => (
                                    <li key={dropdownItem.name}>
                                        <a
                                            href={dropdownItem.link}
                                            className="block px-4 py-2 text-sm text-left text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-300"
                                        >
                                            {dropdownItem.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavMenu;