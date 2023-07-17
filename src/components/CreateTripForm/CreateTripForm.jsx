import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/flatpickr.css';
import { IconContext } from 'react-icons';
import { AiOutlineCalendar } from 'react-icons/ai';
import { addTrips } from 'redux/trips/tripsSlice';
import { schema } from 'utils/schema';

const cities = [
  { value: 'London', label: 'London' },
  { value: 'New York', label: 'New York' },
  { value: 'Toronto', label: 'Toronto' },
];

const initialValues = {
  city: '',
  startDate: '',
  endDate: '',
};

// Parameters object for dates
const options = {
  enableTime: true,
  time_24hr: true,
  minDate: 'today',
  maxDate: new Date().fp_incr(15),
  minuteIncrement: 1,
};

export const CreateTripForm = () => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ city, startDate, endDate }, { resetForm }) => {
    dispatch(addTrips(city, startDate, endDate));
    resetForm();
  };

  const onFormClear = formik => {
    formik.resetForm();
  };

  return (
    <>
      <h3>Create trip</h3>
      <Formik
        initialValues={initialValues}
        onSubmit={onFormSubmit}
        validationSchema={schema}
      >
        {formik => (
          <Form>
            <label htmlFor="city">
              <span>* </span>City
            </label>
            <div>
              <Field as="select" name="city">
                <option value="" disabled>
                  Please select a city
                </option>
                {cities.map(city => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </Field>
            </div>
            <ErrorMessage name="city" component="div" />

            <label htmlFor="startDate">
              <span>* </span>Start date
            </label>
            <div>
              <Field id="startDate" name="startDate">
                {({ field, form }) => (
                  <Flatpickr
                    name="startDate"
                    options={options}
                    value={field.value}
                    onChange={date => {
                      form.setFieldValue('startDate', date[0].getTime());
                    }}
                    placeholder="Select date"
                  />
                )}
              </Field>
              <IconContext.Provider
                value={{
                  size: '14px',
                }}
              >
                <AiOutlineCalendar />
              </IconContext.Provider>
            </div>
            <ErrorMessage name="startDate" component="div" />

            <label htmlFor="endDate">
              <span>* </span>End date
            </label>
            <div>
              <Field id="endDate" name="endDate">
                {({ field, form }) => (
                  <Flatpickr
                    name="endDate"
                    options={options}
                    value={field.value}
                    onChange={date => {
                      form.setFieldValue('endDate', date[0].getTime());
                    }}
                    placeholder="Select date"
                  />
                )}
              </Field>
              <IconContext.Provider
                value={{
                  size: '14px',
                }}
              >
                <AiOutlineCalendar />
              </IconContext.Provider>
            </div>
            <ErrorMessage name="endDate" component="div" />

            <ul>
              <li>
                <button type="button" onClick={() => onFormClear(formik)}>
                  Cancel
                </button>
              </li>
              <li>
                <button type="submit">Save</button>
              </li>
            </ul>
          </Form>
        )}
      </Formik>
    </>
  );
};
