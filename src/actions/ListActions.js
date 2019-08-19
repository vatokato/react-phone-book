import { localDB } from '../utils/localDB'

export const addItem = (item) => {

  return (dispatch) => {
    //создаем новую запись
    localDB.saveItem(item,
      function (item) {
        dispatch({
          type: 'ADD_ITEM_SUCCESS',
          payload: item
        })
      },
      function (err) {
        dispatch({
          type: 'ADD_ITEM_ERROR',
          payload: err
        });
      });
  }
};

export const removeItem = (id) => ({
  type: 'REMOVE_ITEM',
  payload: id,
})