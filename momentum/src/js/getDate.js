const dateContainer = document.querySelector('.date');

const getDate = (date) => {
  const options = {weekday: 'long', month: 'long', day: 'numeric' , timeZone: 'UTC'};
  const currentDate = date.toLocaleDateString('en-US', options);
  dateContainer.textContent = currentDate;
}

export default getDate;
