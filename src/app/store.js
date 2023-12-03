import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counterSlice";
import clientReducer from "../feature/clientSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    clients: clientReducer,
  },
});
