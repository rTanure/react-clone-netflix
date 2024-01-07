import { combineReducers } from "@reduxjs/toolkit";

import cardReducer from "./Card/slice"

const rootReducer = combineReducers({
  cardReducer
})

export default rootReducer