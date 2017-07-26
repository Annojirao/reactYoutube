import {combineReducer} from 'redux';
import bookReducer from './reducer_book'

const rootReducer = combineReducer({
	book:bookReducer
});


export default rootReducer;