const unixToDatetime = (unixData) => {
  const milliseconds = unixData * 1000;
  const dateData = new Date(milliseconds).toLocaleDateString('en-US', { timeZoneName: 'short' });
  const timeData = new Date(milliseconds).toLocaleTimeString('en-US', { timeZoneName: 'short' });
  const dateObject = new Date(milliseconds);
  return { date: dateData, time: timeData, datetime: dateObject };
};
export default unixToDatetime;
