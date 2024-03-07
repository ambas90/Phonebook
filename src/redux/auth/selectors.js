const selectIsLoggedIn = state => {
  return state.auth.isLoggedIn;
};
const selectUser = state => state.auth.user;
const selectIsRefreshing = state => state.auth.isRefreshing;
const selectToken = state => state.auth.token;

export { selectIsLoggedIn, selectUser, selectIsRefreshing, selectToken };
