import dayjs from 'dayjs';

export const dateSort = data => {
  return data.sort((a, b) => {
    if (dayjs(a.date).isAfter(b.date)) {
      return -1;
    } else if (dayjs(a.date).isBefore(b.date)) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const dateFormat = date => {
  return dayjs(date).format('DD MMM YYYY').toUpperCase();
};
