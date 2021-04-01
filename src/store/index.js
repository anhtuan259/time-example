import { createStore } from 'redux'
import reducers from '../reducers'

const initialState = {
    days: 11,
    hours: 23,
    minutes: 1,
    seconds: 11,
    activeSession: "SECONDS"
};
export const store = createStore(reducers, initialState);