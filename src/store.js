import { createStore } from 'redux';
import houseReducer from './reducers/houseReducer';


const store = createStore(houseReducer);

export default store;


