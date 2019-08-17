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
  }
}