import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

export class List extends React.Component {
  handleClick = (id) => {
    this.props.removeItem(id);
  }

  createMarkup(str) {
    return {__html: str};
  }

  render() {
    console.log("list render" ,this.props);
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>Имя</th>
            <th>Телефон</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.filteredItems.map((item)=>
              <tr key={item.id}>
                <td dangerouslySetInnerHTML={this.createMarkup(item.name)} className="name" />
                <td dangerouslySetInnerHTML={this.createMarkup(item.phone)} className="phone" />
                <td>
                  <button type="button" className="close float-none" aria-label="Close" onClick={()=>this.handleClick(item.id)}>
                    <span aria-hidden="true">&times;</span>
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </Table>
    )
  }
}

List.propTypes = {
  filteredItems: PropTypes.array.isRequired,
}