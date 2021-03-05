import axios from 'axios';

export const GET_ITEMS = 'GET_ITEMS';
export const DELETE_ITEM = 'DELETE_ITEM';
export const ADD_ITEM = 'ADD_ITEM';
export const ITEMS_LOADING = 'ITEMS_LOADING';


// AC
 // "proxi": "http://localhost:5000",
//  const instance = axios.create({
//   baseURL: "http://localhost:5000",
//   headers: {
//     'Content-Type': 'application/json',
    
//   }
//    withCredentials: false,
//  headers: {
//    "Content-type": "application/json",
//     'Access-Control-Allow-Origin' : '*',
//    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//    }
//});

export const getItems = () => dispatch => {
  dispatch(setItemsLoading())
  axios
  .get('/api/items')
  .then(res => dispatch({
    type: GET_ITEMS,
    payload: res.data
  }))
  .catch(err => {
    console.log(err)
  })

};

export const addItem = (newItem) => dispatch => {
  axios
  .post('/api/items', newItem, {
         headers: {
           'Content-Type': 'application/json',
          }
       })
  .then(res => dispatch({
    type: ADD_ITEM, 
    payload: res.data
  }))

};

export const deleteItem = (id) => dispatch => {
  axios
  .delete(`/api/items/${id}`)
  .then(res => {
    if (res.data) {
    return  dispatch({
        type: DELETE_ITEM, payload: id
      })
    }
  })
}

// export const deleteItem = (id) => ({
//   type: DELETE_ITEM, payload: id
// });

export const setItemsLoading = () => ({
  type: ITEMS_LOADING
})


