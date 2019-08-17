import { localDB } from '../utils/localDB'

const initialState = {
  test: 'list test',
  items: localDB.getItems(),
  filteredItems: [],
  errors: {}
}

export const list = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      action.payload.name = action.payload.name.trim();
      action.payload.phone = action.payload.phone.trim();
      let errors = {};
      state.errors = {};

      // проверка на дубли
      let double = state.items.find((item)=>{
        return item.name===action.payload.name || item.phone===action.payload.phone;
      });
      if(double) {
        errors.form = "запись с таким именем или номером уже существует";
      }

      //проверка на заполненность имени и телефона
      if(!action.payload.name) errors.name = "не заполнено имя";
      if(!action.payload.phone) errors.phone = "не заполнен телефон";

      //проверка номера телефона
      if(action.payload.phone.match(/[^0-9-)(+]/i)) {
        errors.phone = "только цифры";
        errors.form = "только цифры";
      }

      //возвращаем ошибки
      if(Object.keys(errors).length>0) return {...state, errors};

      //если нет ошибок - создаем новую запись
      localDB.saveItems([...state.items, ...[action.payload]]);
      return {...state, items: [...state.items, ...[action.payload]], status: 'success' };

    case 'REMOVE_ITEM':
      state.items.splice(state.items.findIndex((item)=>item.id===parseInt(action.payload)),1);
      localDB.saveItems(state.items);
      return {...state, items: state.items };
    default:
      return state;
  }
}
