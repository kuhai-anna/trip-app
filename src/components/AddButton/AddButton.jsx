import PropTypes from 'prop-types';

export const AddButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      Add trip
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
