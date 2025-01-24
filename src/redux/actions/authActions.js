export const loginSuccess = (userData) => ({
  type: 'LOGIN_SUCCESS',
  payload: userData
});

export const loginFailure = (error) => ({
  type: 'LOGIN_FAILURE',
  payload: error
});

export const logout = () => ({
  type: 'LOGOUT'
});

// Thunk action creators
export const login = (credentials) => {
  return (dispatch) => {
    // Mock API call
    if (credentials.email === 'demo@example.com' && credentials.password === 'password') {
      dispatch(loginSuccess({ email: credentials.email, username: 'Demo User' }));
    } else {
      dispatch(loginFailure('Invalid credentials'));
    }
  };
};

export const signup = (userData) => {
  return (dispatch) => {
    // Mock API call
    if (userData.email === 'demo@example.com') {
      dispatch(loginFailure('User already exists'));
    } else {
      dispatch(loginSuccess({ email: userData.email, username: userData.username }));
    }
  };
};
