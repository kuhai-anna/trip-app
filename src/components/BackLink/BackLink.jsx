import PropTypes from 'prop-types';
import { AiOutlineDoubleLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

export const BackLink = ({ to, children }) => {
  return (
    <NavLink to={to}>
      <AiOutlineDoubleLeft size="16" />
      {children}
    </NavLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.any.isRequired,
  children: PropTypes.any,
};
