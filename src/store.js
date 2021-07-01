import {createStore, applyMiddleware } from "redux";
import thunkMiddleware  from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducer";

const logger = createLogger();

const middleware = applyMiddleware(thunkMiddleware, logger)

const store = createStore(rootReducer, middleware);

export default store;