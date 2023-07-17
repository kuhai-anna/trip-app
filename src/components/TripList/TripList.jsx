import { useSelector } from 'react-redux';
import { useState } from 'react';
import { AddButton } from 'components/AddButton/AddButton';
import { Modal } from 'components/Modal/Modal';
import { CreateTripForm } from 'components/CreateTripForm/CreateTripForm';
import { selectVisibleTrips } from 'redux/trips/selectors';
import { TripCard } from './TripCard/TripCard';

export const TripList = () => {
  const trips = useSelector(selectVisibleTrips);
  const [showModal, setShowModal] = useState(false);

  // Sort trips by start trip date
  const sortTripsByStart = trips.sort(
    (firstDay, nextDay) => firstDay.startDate - nextDay.startDate
  );

  // Open and close modal
  const toggleModal = () => {
    setShowModal(showModal => !showModal);

    showModal
      ? (document.body.style.overflow = 'auto') &&
        (document.body.style.height = 'initial')
      : (document.body.style.overflow = 'hidden') &&
        (document.body.style.height = '100vh');
  };

  return (
    <>
      <ul>
        {sortTripsByStart.map(({ id, city, startDate, endDate }) => (
          <TripCard
            key={id}
            id={id}
            city={city}
            startDate={startDate}
            endDate={endDate}
          />
        ))}
      </ul>
      <AddButton onClick={toggleModal} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <CreateTripForm />
        </Modal>
      )}
    </>
  );
};
