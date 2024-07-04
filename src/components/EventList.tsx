import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../state/events/eventThunks';
import { RootState, AppDispatch } from '../state/store';
import { Event } from '../types/Event';

const EventList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const events = useSelector((state: RootState) => state.events.events);
  const loading = useSelector((state: RootState) => state.events.loading);
  const error = useSelector((state: RootState) => state.events.error);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {events.map((event: Event) => (
        <div key={event.id} className="bg-white p-6 border rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>
          <p className="mb-2 text-gray-700">{event.description}</p>
          <p className="mb-2 text-gray-500">{new Date(event.dateTime).toLocaleString()}</p>
          <p className="mb-2 text-gray-700">{event.location}</p>
          <p className="text-gray-700">{event.category}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
