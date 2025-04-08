
import React from 'react';
import { User } from '../types';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from "react-router-dom";
import { LogIn, Menu } from 'lucide-react';

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  
  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Map', href: '/map' },
    { name: 'Forecast', href: '/forecast' },
    { name: 'Stories', href: '/stories' },
    { name: 'Insights', href: '/insights' },
    { name: 'Network', href: '/network' },
    { name: 'About', href: '/about' },
  ];
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="border-b bg-white dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent">
              Atlas<span className="text-black dark:text-white">IO</span>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link 
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {user?.role.name === "superadmin" && (
              <Link 
                to="/contribute"
                className={`text-sm font-medium transition-colors ${
                  isActive("/contribute")
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white"
                }`}
              >
                Contribute
              </Link>
            )}
          </nav>
          
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              className="md:hidden mr-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative w-10 h-10 rounded-full">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={user.avatar} />
                      <AvatarFallback className="bg-blue-500 text-white">{user.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>
                    <div>{user.name}</div>
                    <div className="text-xs text-gray-500">{user.email}</div>
                    <div className="mt-1 text-xs inline-block bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 rounded-full px-2 py-0.5">
                      {user.role.name}
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={onLogin}>
                <LogIn className="w-4 h-4 mr-2" /> Login
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user?.role.name === "superadmin" && (
              <Link
                to="/contribute"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/contribute")
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Contribute
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
