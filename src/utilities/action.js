const buildActions = (actionNames) => ({
  request: (data) => ({
    type: actionNames.request,
    payload: data,
  }),
  failure: (err) => {
    return {
      type: actionNames.failure,
      error: true,
      payload: {
        message: err.message,
        stack: err.stack,
      },
    };
  },
  success: (data) => {
    return {
      type: actionNames.success,
      error: false,
      payload: data,
    };
  },
});

const createAsyncAction = (actionNames, asyncFn, data) => {
  const actions = buildActions(actionNames);

  const actionCreator = (dispatch, getState) => {
    dispatch(actions.request(data));
    const state = getState();
    return asyncFn(state, dispatch)
      .then((result) => {
        return dispatch(actions.success(result));
      })
      .catch((err) => {
        return dispatch(actions.failure(err));
      });
  };

  return actionCreator;
};

export { buildActions, createAsyncAction };
