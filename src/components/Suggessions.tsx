import React from 'react';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import d1 from '../assets/d1.jpg';

const EventCard: React.FC<{ event: any }> = ({ event }) => {
  return (
    <div className="bg-white p-6 border rounded-lg shadow-lg">
      <img src={event.image} alt={event.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
      <p className="mb-2 text-gray-700">{event.description}</p>
      <p className="mb-2 text-gray-500">{event.date}</p>
    </div>
  );
};

const EventsSection: React.FC = () => {
  const events = [
    { id: 1, name: 'Musical Show VII', description: 'Event description goes here.', date: '23 days to go', image: m1 },
    { id: 2, name: 'Musical Show VII', description: 'Event description goes here.', date: '23 days to go', image: d1 },
    { id: 3, name: 'Musical Show VII', description: 'Event description goes here.', date: '23 days to go', image: m2 },
  ];

  return (
    <div className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
