import { applyMiddleware, createStore } from "redux";
import axios from "axios";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import allReducers from "./allReducers";
import { composeWithDevTools } from "redux-devtools-extension";

const logger = createLogger({ collapsed: true });

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware.withExtraArgument({ axios }), logger)
);

const store = createStore(allReducers, middleware);

export default store;
