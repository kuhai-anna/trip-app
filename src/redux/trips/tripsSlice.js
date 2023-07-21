import { createSlice, nanoid } from '@reduxjs/toolkit';

const tripsSlice = createSlice({
  name: 'trips',
  initialState: {
    activeTripId: null,
    items: [],
  },
  reducers: {
    addTrips: {
      reducer(state, action) {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
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
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    },
    setActiveTripId(state, action) {
      state.activeTripId = action.payload;
    },
  },
});

export const { addTrips, deleteTrips, setActiveTripId } = tripsSlice.actions;
export const tripsReducer = tripsSlice.reducer;
