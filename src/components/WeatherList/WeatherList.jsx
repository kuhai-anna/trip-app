import { useSelector } from 'react-redux';
import { WeatherListItem } from './WeatherListItem/WeatherListItem';
import { selectWeeklyWeather } from 'redux/weather/selectors';

export const WeatherList = () => {
  const { items } = useSelector(selectWeeklyWeather);

  return (
    <ul>
      {items.map(({ id, date, tempmax, tempmin, icon }) => (
        <WeatherListItem
          key={id}
          date={date}
          tempmax={tempmax}
          tempmin={tempmin}
          icon={icon}
        />
      ))}
    </ul>
  );
};
