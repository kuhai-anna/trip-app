import PropTypes from 'prop-types';
import { getDayOfWeek } from 'timer/getDayOfWeek';

export const WeatherListItem = ({ date, tempmax, tempmin, icon }) => {
  const dayOfWeek = getDayOfWeek(date);

  return (
    <li>
      <p>{dayOfWeek}</p>
      <p>{icon}</p>
      <p>
        {tempmax}&deg;/{tempmin}&deg;
      </p>
    </li>
  );
};

WeatherListItem.propTypes = {
  date: PropTypes.string.isRequired,
  tempmax: PropTypes.number.isRequired,
  tempmin: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
};
