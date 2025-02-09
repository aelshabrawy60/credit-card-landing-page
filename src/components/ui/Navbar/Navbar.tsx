import React, { useState } from 'react';
import Button from '../button/Button';
import { Menu, X } from 'lucide-react';

const navigations = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    },
    {
        name: 'Services',
        link: '/services'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
];

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className='flex justify-between items-center max-w-7xl w-full left-1/2 -translate-x-1/2 top-[18px] px-4 md:px-6 lg:px-8 absolute'>
                {/* Logo */}
                <div className='w-[150px] flex justify-start'>
                    <a href="/" className="hover:scale-105 transition-transform duration-200">
                        EXTRABANK.
                    </a>
                </div>

                {/* Desktop Navigation */}
                <div className='hidden md:block'>
                    <ul className='flex gap-10'>
                        {navigations.map((nav, index) => (
                            <li key={index} className="relative group">
                                <a 
                                    href={nav.link} 
                                    className="hover:text-gray-600 transition-colors duration-200"
                                >
                                    {nav.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Desktop Button */}
                <div className='hidden md:flex w-[150px] justify-end'>
                    <Button 
                        label="contact" 
                        onClick={() => {}} 
                        type={false}
                    />
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <div className="transition-transform duration-300 transform">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div 
                className={`md:hidden fixed top-[70px] left-0 right-0 shadow-lg transition-all bg-background z-30 duration-300 ease-in-out ${
                    isOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-4 pointer-events-none'
                }`}
            >
                <ul className='flex flex-col gap-4 p-4'>
                    {navigations.map((nav, index) => (
                        <li 
                            key={index}
                            className="transform transition-transform duration-200 hover:translate-x-2"
                        >
                            <a 
                                href={nav.link} 
                                className="block hover:text-gray-600 transition-colors duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                {nav.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className='p-4'>
                    <Button 
                        label="contact" 
                        onClick={() => {}} 
                        type={false}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;