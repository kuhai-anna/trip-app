import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';

export const selectTrips = state => state.trips;

export const selectVisibleTrips = createSelector(
  [selectTrips, selectFilter],
  (trips, filter) => {
    const normalizeFilter = filter?.toLowerCase();

    return trips?.filter(({ city }) =>
      city?.toLowerCase().includes(normalizeFilter)
    );
  }
);
