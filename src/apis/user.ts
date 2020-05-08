type User = {};

export const updateUserApi = (user: User, updates: User) => {
  return fetch('https://api.github.com/users/AbdelhalimAhmed')
    .then((data) => data.json())
    .then((res) => res);
};

export const getHolidays = () => {
  return fetch(
    'https://www.googleapis.com/calendar/v3/calendars/en.eg%23holiday@group.v.calendar.google.com/events?key=AIzaSyCzqJ6xFK6CgYKpH30cPEszbf_4x216tFk'
  )
    .then((data) => data.json())
    .then((res) => res);
};
