import React from 'react';
import { connect } from 'react-redux'
import { List } from '../components/List'
import { removeItem } from '../actions/ListActions'


class ListContainer extends React.Component {
  render () {
    console.log("ListContainer render", this.props);
    const {list, removeItem} = this.props;
    return (
      <div className="phone-list-container">
        <List
          filteredItems={list.filteredItems}
          removeItem={removeItem}
          test={list.test}
        />
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log("mapStateToProps", store);
  let filteredItems = false;
  let q = store.search.query.trim();
  store.list.filteredItems = [];
  if(q) {
    console.time("filtered");
    filteredItems = [];
    store.list.items.forEach((item)=>{
      let ind = item.name.toLowerCase().indexOf(q.toLowerCase());
      if(ind > -1) {
        let tmpArr = item.name.split('');
        tmpArr.splice(ind,0,'<b>');
        tmpArr.splice(ind+q.length+1,0,'</b>');
        filteredItems.push({...item, name:tmpArr.join('')});
      }

      ind = item.phone.toLowerCase().replace(/[^0-9]/gim,'').indexOf(q.toLowerCase());
      if( ind >-1 ) {
        //let tmpArr = item.phone.split('');
        //tmpArr.splice(ind,0,'<b>');
        //tmpArr.splice(ind+store.search.query.length+1,0,'</b>');
        //filteredItems.push({...item, phone:tmpArr.join('')});
        filteredItems.push(item);
      }
    });
    console.timeEnd("filtered");
  }
  store.list.filteredItems = filteredItems || store.list.items;

  return {
    list: store.list,
    search: store.search
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (id) => dispatch(removeItem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer);
