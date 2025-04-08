
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
import { LogIn } from 'lucide-react';

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout }) => {
  return (
    <header className="border-b bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-atlas-blue to-atlas-green bg-clip-text text-transparent">
              Atlas<span className="text-black dark:text-white">IO</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
              Dashboard
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
              Map
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
              Case Studies
            </a>
            <a href="#" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-white transition-colors">
              About
            </a>
          </nav>
          
          <div>
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
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
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
    </header>
  );
};

export default Header;
