import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import productSaga from "./redux/sagas";
import rootReducer from "./redux/rootReducer"

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer: rootReducer,
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(productSaga)
export default store;

