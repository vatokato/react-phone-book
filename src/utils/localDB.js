export const localDB = {
  getItems : () => {
    if(typeof localStorage.phoneList === 'undefined') {
      localStorage.phoneList = JSON.stringify([
        {id: 1, name: 'ivan', phone:'+7(912)123-45-67'},
        {id: 2, name: 'petr', phone:'+7-912-333-333-33'},
        {id: 3, name: 'roman', phone:'8912123456'},
      ]);
    }
    return JSON.parse(localStorage.phoneList);
  },

  saveItems : (arr) => {
    localStorage.phoneList = JSON.stringify( arr );
  },

  saveItem: (item, cbSuccess, cbError) => {
    let items = JSON.parse(localStorage.phoneList);

    item.name = item.name.trim();
    item.phone = item.phone.trim();
    let errors = {};

    // проверка на дубли
    let double = items.find((arrItem)=>{
      return item.name===arrItem.name || item.phone===arrItem.phone;
    });

    if(double) {
      errors.form = "запись с таким именем или номером уже существует";
    }

    //проверка на заполненность имени и телефона
    if(!item.name) errors.name = "не заполнено имя";
    if(!item.phone) errors.phone = "не заполнен телефон";

    //проверка номера телефона
    if(item.phone.match(/[^0-9-)(+]/i)) {
      errors.phone = "только цифры";
      errors.form = "только цифры";
    }

    if(Object.keys(errors).length>0) {
      return cbError(errors);
    }

    localStorage.phoneList = JSON.stringify( [...items, ...[item]] );
    return cbSuccess(item);
  }
}