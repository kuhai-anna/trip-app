import { createSlice, nanoid } from '@reduxjs/toolkit';

const tripsState = [];

const tripsSlice = createSlice({
  name: 'trips',
  initialState: tripsState,
  reducers: {
    addTrips: {
      reducer(state, action) {
        return [...state, action.payload];
      },
      prepare(city, startDate, endDate) {
        return {
          payload: {
            id: nanoid(),
            city,
            startDate,
            endDate,
          },
        };
      },
    },
    deleteTrips(state, action) {
      return state.filter(trip => trip.id !== action.payload);
    },
  },
});

export const { addTrips, deleteTrips } = tripsSlice.actions;
export const tripsReducer = tripsSlice.reducer;
