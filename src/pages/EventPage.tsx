import React from 'react';
import EventList from '../components/EventList';

const EventPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Event List</h1>
      <EventList />
    </div>
  );
};

export default EventPage;