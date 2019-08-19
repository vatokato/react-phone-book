import { localDB } from '../utils/localDB'

const initialState = {
  items: localDB.getItems(),
  filteredItems: [],
  errors: {}
}

export const list = (state=initialState, action) => {
  console.log("list reduce", state, action);
  switch (action.type) {
    case 'ADD_ITEM_ERROR':
      return {...state, errors:action.payload, status: 'error' };

    case 'ADD_ITEM_SUCCESS':
      return {...state, items: [...state.items, ...[action.payload]], errors:{}, status: 'success' };

    case 'REMOVE_ITEM':
      state.items.splice(state.items.findIndex((item)=>item.id===parseInt(action.payload)),1);
      localDB.saveItems(state.items);
      return {...state, items: state.items };

    default:
      return state;
  }
}
