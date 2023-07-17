import { useDispatch, useSelector } from 'react-redux';
import { IconContext } from 'react-icons';
import { BsSearch } from 'react-icons/bs';
import { selectFilter } from 'redux/filter/selectors';
import { changeFilter } from 'redux/filter/filterSlice';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilter);

  const onFilterContacts = e => {
    dispatch(changeFilter(e.currentTarget.value));
  };

  return (
    <div>
      <IconContext.Provider
        value={{
          size: '14px',
        }}
      >
        <BsSearch />
      </IconContext.Provider>
      <input
        type="text"
        placeholder="Search your trip"
        value={filterValue}
        onChange={onFilterContacts}
      />
    </div>
  );
};
