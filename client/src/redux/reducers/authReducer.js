const initialState = {
  /* 
        Not Sure if Signed In = null
        Not Signed In = false
        Signed In = ture
    */
  signedIn: null,
  /* 
        not (sure if) signed in = null
        signed in = django user object
    */
  user: null,
  /*
        not (sure if) signed in = null
        signed in = jwt string
    */
  token: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
