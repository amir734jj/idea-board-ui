const initialState = {
  ideas: [{
    header: 'header',
    title: 'title',
    body: 'body',
  }],
};

export const ideaReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
