import React from 'react';
import { BellIcon, SearchIcon, UserIcon } from 'lucide-react';
import { useLocation } from 'react-router-dom';
const Header: React.FC = () => {
  const location = useLocation();
  // Get page title based on current route
  const getPageTitle = () => {
    switch (location.pathname) {
      case '/':
        return 'Dashboard';
      case '/mental-health':
        return 'Mental Health & Wellness';
      case '/etf-education':
        return 'ETF Education';
      case '/financial-literacy':
        return 'Financial Literacy';
      case '/community':
        return 'Community Forum';
      case '/challenges':
        return 'Challenges';
      case '/crisis-support':
        return 'Crisis Support';
      default:
        return 'Serenity Pocket';
    }
  };
  return <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <h1 className="text-xl font-semibold text-primary-dark">
        {getPageTitle()}
      </h1>
      <div className="flex items-center space-x-6">
        <div className="relative hidden md:block">
          <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" />
          <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="relative p-2 rounded-full hover:bg-gray-100">
          <BellIcon className="h-6 w-6 text-gray-500" />
          <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 rounded-full bg-tertiary flex items-center justify-center">
            <UserIcon className="h-5 w-5 text-white" />
          </div>
          <span className="hidden md:inline text-sm font-medium">John Doe</span>
        </div>
      </div>
    </header>;
};
export default Header;