import {createStore, combineReducers,applyMiddleware} from 'redux';
import Jobs from './reducers/appReducer';
import thunk from 'redux-thunk';


export default createStore(combineReducers({
    fetchJobs:Jobs
}),applyMiddleware(thunk));