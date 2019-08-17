import React from 'react';
import { connect } from 'react-redux'
import { AddItem } from '../components/AddItem'
import { addItem } from '../actions/ListActions'


class AddItemContainer extends React.Component {
  render () {
    console.log("AddItemContainer render", this.props);
    const {addItem, errors} = this.props;
    return (
      <div className="phone-actions-container">
        <AddItem addItem={addItem} errors={errors} />
      </div>
    );
  }
}

const mapStateToProps = store => {
  return {
    errors: store.list.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItemContainer);
