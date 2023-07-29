import moment from 'moment';

export const generate_date = date => {
  const formattedDate = date;
  const momentDate = moment(formattedDate, 'MM/DD/YYYY');
  const formattedMomentDate = momentDate.format('YYYY-MM-DD');
  return formattedMomentDate;
};
