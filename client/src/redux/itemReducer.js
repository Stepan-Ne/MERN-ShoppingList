import {GET_ITEMS, DELETE_ITEM, ADD_ITEM, ITEMS_LOADING} from './actions';


const initState = {
  items: [],
  loading: false
};

const itemReducer = (state = initState, action) => {

  switch(action.type) {
case GET_ITEMS: 
 return {
   ...state,
   items: action.payload,
   loading: false
 };
 case DELETE_ITEM: 
 return {
   ...state,
   items: [...state.items.filter(i => i._id !== action.payload)]
 };
 case ADD_ITEM: 
 return {
   ...state,
   items: [ action.payload, ...state.items ]
 };
 case ITEMS_LOADING:
   return {
     ...state,
     loading: true
   }
  default:
    return state;
  }

};


export default itemReducer;