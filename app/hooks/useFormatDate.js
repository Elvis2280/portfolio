import { useState, useEffect } from 'react';

const useFormatDate = (date) => {
  const [formatedDate, setFormatedDate] = useState(null);

  useEffect(() => {
    const time = new Date(date);
    const locale = navigator.language;
    const format = new Intl.DateTimeFormat(locale, 'en-US').format(time);
    setFormatedDate(format);
  }, []);

  return [formatedDate];
};

export default useFormatDate;
