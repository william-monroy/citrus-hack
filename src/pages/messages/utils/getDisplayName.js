const getDisplayName = (users, userLoggedIn) =>
  users?.filter(
    (userToFilter) => userToFilter !== userLoggedIn?.displayName
  )[1];

export default getDisplayName;
