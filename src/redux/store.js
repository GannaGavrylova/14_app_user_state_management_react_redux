import { createStore } from "redux";
import rootRedux from "./reducers";

const store = createStore(rootRedux);

export default store;
