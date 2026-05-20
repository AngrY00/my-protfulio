import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ activeSection }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-6 md:px-12 pointer-events-none"
        >
            {/* Logo */}
            <div
                onClick={() => navigate('/')}
                className="text-xl font-bold tracking-tight text-orange-100/90 pointer-events-auto cursor-pointer font-['Inter'] relative z-50"
            >
                ABDULLAH .
            </div>

            {/* Links - Desktop */}
            <ul className="hidden md:flex gap-8 pointer-events-auto items-center">
                {navItems.map((item) => {
                    const lowerItem = item.toLowerCase();
                    let isActive = false;
                    const path = location.pathname;

                    if (path === '/' && lowerItem === 'home') isActive = true;
                    if (path === '/skills' && lowerItem === 'skills') isActive = true;
                    if (path === '/about' && lowerItem === 'about') isActive = true;
                    if (path === '/projects' && lowerItem === 'projects') isActive = true;
                    if (path === '/contact' && lowerItem === 'contact') isActive = true;

                    // Specific highlight for Home sections if needed, but page-level is cleaner now.

                    return (
                        <li key={item}>
                            <Link
                                to={lowerItem === 'home' ? '/' : `/${lowerItem}`}
                                className={`
                                    text-sm font-medium transition-all duration-300 uppercase tracking-widest cursor-pointer
                                    ${isActive
                                        ? 'border border-orange-200/50 rounded-full px-5 py-2 text-orange-100 bg-orange-900/10 shadow-[0_0_15px_rgba(255,165,0,0.1)]'
                                        : 'text-orange-100/60 hover:text-orange-100'
                                    }
                                `}
                            >
                                {item}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Mobile Menu Icon */}
            <div
                className="md:hidden text-orange-100/80 pointer-events-auto cursor-pointer relative z-50"
                onClick={toggleMenu}
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-md z-40 flex flex-col items-center justify-center md:hidden pointer-events-auto"
                    >
                        <ul className="flex flex-col gap-8 text-center">
                            {navItems.map((item) => {
                                const lowerItem = item.toLowerCase();
                                let isActive = false;
                                const path = location.pathname;

                                if (path === '/' && lowerItem === 'home') isActive = true;
                                if (path === '/skills' && lowerItem === 'skills') isActive = true;
                                if (path === '/about' && lowerItem === 'about') isActive = true;
                                if (path === '/projects' && lowerItem === 'projects') isActive = true;
                                if (path === '/contact' && lowerItem === 'contact') isActive = true;

                                return (
                                    <li key={item}>
                                        <Link
                                            to={lowerItem === 'home' ? '/' : `/${lowerItem}`}
                                            onClick={closeMenu}
                                            className={`
                                                text-2xl font-medium transition-all duration-300 uppercase tracking-widest cursor-pointer block
                                                ${isActive
                                                    ? 'text-orange-400'
                                                    : 'text-orange-100/60 hover:text-orange-100'
                                                }
                                            `}
                                        >
                                            {item}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
