import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import list from './list'
import details from './details'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle, max-len
const middleware = composeEnhancers(applyMiddleware(thunk));

const reducers = combineReducers({
    list,
    details
})

const store = createStore(reducers, middleware);

export default store;


