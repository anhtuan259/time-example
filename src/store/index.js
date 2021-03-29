import { createStore } from 'redux'
import reducers from '../reducers'

const initialState = {
    days: 11,
    hours: 31,
    minutes: 27,
    seconds: 11,
    activeSession: "minutes"
};
export const store = createStore(reducers, initialState);