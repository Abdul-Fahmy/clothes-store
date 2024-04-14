import { compose, configureStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));

export const store = configureStore(rootReducer, undefined, composedEnhancers);
