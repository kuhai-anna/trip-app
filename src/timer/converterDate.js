// Edit time display to '00' format
export const addLeadingZero = value => {
  return String(value).padStart(2, '0');
};

export const converterDate = timestamp => {
  const newDate = new Date(timestamp);
  const day = addLeadingZero(newDate.getDate());
  const month = addLeadingZero(newDate.getMonth() + 1);
  const year = addLeadingZero(newDate.getFullYear());

  return {
    day,
    month,
    year,
  };
};
