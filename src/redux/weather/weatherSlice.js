import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchWeeklyWeather, fetchWeatherToday } from './operations';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.message = action.payload;
};

const weeklyWeatherSlice = createSlice({
  name: 'weeklyWeather',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchWeeklyWeather.pending, hendlePending)
      .addCase(fetchWeeklyWeather.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload.days.map(
          ({ datetime, icon, tempmax, tempmin }) => {
            return {
              id: nanoid(),
              date: datetime,
              icon,
              tempmax,
              tempmin,
            };
          }
        );
      })
      .addCase(fetchWeeklyWeather.rejected, hendleRejected);
  },
});

const weatherTodaySlice = createSlice({
  name: 'weatherToday',
  initialState: {
    items: {},
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      // fetch today`s weather
      .addCase(fetchWeatherToday.pending, hendlePending)
      .addCase(fetchWeatherToday.fulfilled, (state, action) => {
        const { datetime, temp, icon } = action.payload.days[0];
        state.isLoading = false;
        state.error = null;
        state.items = {
          date: datetime,
          temp,
          icon,
        };
      })
      .addCase(fetchWeatherToday.rejected, hendleRejected);
  },
});

export const weeklyWeatherReducer = weeklyWeatherSlice.reducer;
export const weatherTodayReducer = weatherTodaySlice.reducer;
