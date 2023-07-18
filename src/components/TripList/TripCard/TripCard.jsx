import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { IoMdClose } from 'react-icons/io';
import { IconButton } from 'components/IconButton/IconButton';
import { deleteTrips } from 'redux/trips/tripsSlice';
import { converterDate } from 'timer/converterDate';
import { timerStart } from 'timer/timer';

export const TripCard = ({ id, city, startDate, endDate }) => {
  const dispatch = useDispatch();
  const onDelete = () => dispatch(deleteTrips(id));

  const {
    day: startDay,
    month: startMonth,
    year: startYear,
  } = converterDate(startDate);
  const {
    day: endDay,
    month: endMonth,
    year: endYear,
  } = converterDate(endDate);

  const queryString = `${startYear}-${startMonth}-${startDay}/${endYear}-${endMonth}-${endDay}`;

  const onCardClick = id => {
    timerStart(id);
  };

  return (
    <li>
      <div>
        <IconContext.Provider
          value={{
            size: '20px',
          }}
        >
          <IconButton aria-label="Close button" onClick={onDelete}>
            <IoMdClose />
          </IconButton>
        </IconContext.Provider>
        <NavLink to={`weather/${city}/${queryString}`}>
          <div onClick={() => onCardClick(id)}>
            <p>{city}</p>
            <p>
              {startDay}.{startMonth}.{startYear} - {endDay}.{endMonth}.
              {endYear}
            </p>
          </div>
        </NavLink>
      </div>
    </li>
  );
};

TripCard.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  startDate: PropTypes.number.isRequired,
  endDate: PropTypes.number.isRequired,
};
