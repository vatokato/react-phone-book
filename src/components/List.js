import React from 'react'
import PropTypes from 'prop-types'

export class List extends React.Component {
  handleClick = (id) => {
    this.props.removeItem(id);
  }

  createMarkup(str) {
    return {__html: str};
  }

  render() {
    console.log("list render");
    return (
      <React.Fragment>
        <h3>{this.props.test}</h3>
        <div className="phone-list">
          {
            this.props.filteredItems.map((item)=>
              <div className="item" key={item.id}>
                <span dangerouslySetInnerHTML={this.createMarkup(item.name)} className="name" />
                -
                <span dangerouslySetInnerHTML={this.createMarkup(item.phone)} className="phone" />
                 (<span className="remove" onClick={()=>this.handleClick(item.id)}>x</span>)
              </div>
            )
          }
        </div>
      </React.Fragment>
    )
  }
}

List.propTypes = {
  test: PropTypes.string.isRequired,
  filteredItems: PropTypes.array.isRequired,
}