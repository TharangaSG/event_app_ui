import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          <img src={logo} alt="Logo" className="h-8 inline" />
          Event Platform
        </Link>
        <nav>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/events" className="mr-4">Events</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;


