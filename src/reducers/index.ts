import { combineReducers } from "redux";
import questionsReducer from "./questions.reducer";

const rootReducers = combineReducers({
    questionsData: questionsReducer,
});

export default rootReducers;