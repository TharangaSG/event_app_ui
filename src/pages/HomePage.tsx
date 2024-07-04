import { Button } from '@/components/ui/button';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to the Event Platform</h1>
      <Button>Click me</Button>
    </div>
  );
};

export default HomePage;