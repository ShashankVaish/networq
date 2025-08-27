import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Search, Plus, Bell, User } from 'lucide-react';

interface NavigationProps {
  variant?: 'light' | 'dark';
}

const Navigation: React.FC<NavigationProps> = ({ variant = 'light' }) => {
  const bgColor = variant === 'light' ? 'bg-white border-b border-gray-200' : 'bg-gray-900 border-b border-gray-700';
  const textColor = variant === 'light' ? 'text-gray-900' : 'text-white';
  const hoverColor = variant === 'light' ? 'hover:text-orange-500' : 'hover:text-orange-400';

  return (
    <nav className={`w-full px-4 py-3 ${bgColor} sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className={`flex items-center space-x-2 ${textColor} ${hoverColor} transition-colors`}>
          <MessageSquare className="w-8 h-8 text-orange-500" />
          <span className="text-xl font-bold">networq</span>
        </Link>
        
        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-8">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search networq"
              className={`block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-gray-50 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                variant === 'dark' ? 'bg-gray-800 border-gray-600 text-white' : ''
              }`}
            />
          </div>
        </div>

        <div className="flex items-center space-x-3">
          {/* Create Post Button */}
          <button className="hidden md:flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition-colors">
            <Plus className="w-4 h-4" />
            <span className="text-sm font-medium">Create</span>
          </button>
          
          {/* Notifications */}
          <button className={`p-2 rounded-full ${hoverColor} transition-colors`}>
            <Bell className="w-5 h-5" />
          </button>
          
          <Link 
            to="/login" 
            className={`${textColor} ${hoverColor} transition-colors font-medium px-4 py-2 rounded-full hover:bg-gray-100 ${
              variant === 'dark' ? 'hover:bg-gray-800' : ''
            }`}
          >
            Log In
          </Link>
          <Link 
            to="/signup" 
            className="bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-2 rounded-full transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;