import { Section } from 'components/Section/Section';
import { WeatherList } from '../WeatherList/WeatherList';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { BackLink } from 'components/BackLink/BackLink';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectWeatherTodayError,
  selectWeatherTodayIsLoading,
  selectWeeklyWeatherError,
  selectWeeklyWeatherIsLoading,
} from 'redux/weather/selectors';
import {
  fetchWeatherToday,
  fetchWeeklyWeather,
} from 'redux/weather/operations';
import { Loader } from 'components/Loader/Loader';

export const WeatherForecast = () => {
  const { city, startDate, endDate } = useParams();
  const location = useLocation();
  const backLinLocationRef = useRef(location.state?.from ?? '/');

  const dispatch = useDispatch();
  const weeklyWeatherIsLoading = useSelector(selectWeeklyWeatherIsLoading);
  const weeklyWeatherError = useSelector(selectWeeklyWeatherError);
  const weatherTodayIsLoading = useSelector(selectWeatherTodayIsLoading);
  const weatherTodayError = useSelector(selectWeatherTodayError);

  useEffect(() => {
    // Interrupt http request
    const abortController = new AbortController();
    const signal = abortController.signal;

    dispatch(fetchWeeklyWeather({ city, startDate, endDate, signal }));
    dispatch(fetchWeatherToday({ city, signal }));

    return () => {
      abortController.abort();
    };
  }, [dispatch, city, startDate, endDate]);

  return (
    <>
      <Section title="Week">
        {weeklyWeatherIsLoading && !weeklyWeatherError && <Loader />}
        <WeatherList />
      </Section>
      <div>
        <BackLink to={backLinLocationRef.current} />
        {weatherTodayIsLoading && !weatherTodayError && <Loader />}
        <Sidebar />
      </div>
    </>
  );
};
