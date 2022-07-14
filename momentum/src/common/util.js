const getTimeOfDay = (date) => {
  const hours = date.getHours();
  return Math.floor(hours / 6);
}

export default getTimeOfDay;
