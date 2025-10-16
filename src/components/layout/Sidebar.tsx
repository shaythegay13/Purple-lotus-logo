import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboardIcon, HeartPulseIcon, TrendingUpIcon, GraduationCapIcon, UsersIcon, AwardIcon, LifeBuoyIcon, MenuIcon, XIcon } from 'lucide-react';
const Sidebar: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [{
    path: '/',
    label: 'Dashboard',
    icon: <LayoutDashboardIcon size={20} />
  }, {
    path: '/mental-health',
    label: 'Mental Health',
    icon: <HeartPulseIcon size={20} />
  }, {
    path: '/etf-education',
    label: 'ETF Education',
    icon: <TrendingUpIcon size={20} />
  }, {
    path: '/financial-literacy',
    label: 'Financial Literacy',
    icon: <GraduationCapIcon size={20} />
  }, {
    path: '/community',
    label: 'Community',
    icon: <UsersIcon size={20} />
  }, {
    path: '/challenges',
    label: 'Challenges',
    icon: <AwardIcon size={20} />
  }, {
    path: '/crisis-support',
    label: 'Crisis Support',
    icon: <LifeBuoyIcon size={20} />
  }];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return <>
      {/* Mobile Menu Toggle */}
      <button className="fixed top-4 left-4 z-50 md:hidden bg-white p-2 rounded-md shadow-md" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
      </button>
      {/* Sidebar */}
      <aside className={`
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 fixed md:sticky top-0 left-0 h-full w-64 bg-white 
        border-r border-gray-200 z-40 transition-transform duration-300 ease-in-out
      `}>
        <div className="p-4 flex items-center justify-center border-b border-gray-200 cursor-pointer" onClick={toggleMobileMenu}>
          <img src="/logo.png" alt="Serenity Pocket Logo" className="h-10" />
          <h1 className="ml-2 text-lg font-bold text-tertiary">
            Serenity Pocket
          </h1>
        </div>
        <nav className="mt-6 px-4">
          <ul className="space-y-1">
            {navItems.map(item => <li key={item.path}>
                <Link to={item.path} className={`
                    flex items-center px-4 py-3 rounded-lg transition-colors
                    ${location.pathname === item.path ? 'bg-primary text-white' : 'text-gray-600 hover:bg-gray-100'}
                  `} onClick={() => setIsMobileMenuOpen(false)}>
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>)}
          </ul>
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="bg-tertiary-light/20 rounded-lg p-4 text-center">
            <p className="text-sm text-tertiary-dark font-medium">Need help?</p>
            <Link to="/crisis-support" className="text-xs text-tertiary hover:underline" onClick={() => setIsMobileMenuOpen(false)}>
              Access crisis resources
            </Link>
          </div>
        </div>
      </aside>
      {/* Overlay for mobile */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={toggleMobileMenu}></div>}
    </>;
};
export default Sidebar;