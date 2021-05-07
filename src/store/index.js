import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import auth from "./auth/authReducer";
import app from "./app/reducer";

const rootReducer = combineReducers({
  auth,
  app,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
