const initialState = {
  ideas: [{
    header: 'header',
    title: 'title',
    body: 'body',
  }],
};

export const ideaReducer = (state = initialState, action) => {
  switch (action) {
    default:
      return state;
  }
};
