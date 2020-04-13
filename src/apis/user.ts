type User = {};

export const updateUserApi = (user: User, updates: User) => {
  return fetch('https://api.github.com/users/AbdelhalimAhmed')
    .then((data) => data.json())
    .then((res) => res);
};
