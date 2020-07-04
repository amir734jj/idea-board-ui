import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { rootReducer } from "../reducers";

const composeEnhancers = composeWithDevTools({});

const store = (preLoadedStore) =>
  createStore(
    rootReducer,
    preLoadedStore,
    composeEnhancers(applyMiddleware(thunk))
  );

export default store;
