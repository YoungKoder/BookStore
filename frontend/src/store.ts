import {createStore} from "redux";
import { printingEditionsReducer } from "./reducers/printingEditionsReducer";

const store = createStore(printingEditionsReducer);

export default store;