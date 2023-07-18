import { useSelector } from 'react-redux';
import { selectWeatherToday } from 'redux/weather/selectors';
import { getDayOfWeek } from 'timer/getDayOfWeek';

export const WeatherToday = () => {
  const {
    items: { date, temp, icon },
  } = useSelector(selectWeatherToday);
  const dayOfWeek = getDayOfWeek(date);

  return (
    <div>
      <p>{dayOfWeek}</p>
      <p>Temerature: {temp}</p>
      <p>Weather: {icon}</p>
    </div>
  );
};
