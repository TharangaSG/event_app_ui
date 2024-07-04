import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Event } from '../../types/Event';

export const fetchEvents = createAsyncThunk<Event[], void>(
  'events/fetchEvents',
  async () => {
    const response = await axios.get<Event[]>('http://localhost:8080/events/all_events');
    return response.data;
  }
);
