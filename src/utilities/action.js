const buildActions = (actionNames) => ({
  request: (data) => ({
    type: actionNames.request,
    payload: data,
  }),
  failure: (err) => ({
    type: actionNames.failure,
    error: true,
    payload: {
      ...err.response?.data,
      message: err.message,
      stack: err.stack,
    },
  }),
  success: (data) => ({
    type: actionNames.success,
    error: false,
    payload: data,
  }),
});

const createAsyncAction = (actionNames, asyncFn, data) => {
  const actions = buildActions(actionNames);

  return (dispatch, getState) => {
    dispatch(actions.request(data));
    const state = getState();
    return asyncFn(state, dispatch)
      .then((result) => dispatch(actions.success(result)))
      .catch((err) => dispatch(actions.failure(err)));
  };
};

export { buildActions, createAsyncAction };
