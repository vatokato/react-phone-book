import React from 'react'
//import PropTypes from 'prop-types'

export class Search extends React.Component {
  onChange = (e) => {
    this.props.setQuery(e.target.value);
  }

  render() {
    console.log("Search render");
    return (
      <React.Fragment>
        <input type="text" name="query"  autoComplete="off" defaultValue={this.props.query} onChange={this.onChange}  placeholder="Поиск по имени или номеру" />
      </React.Fragment>

    )
  }
}

Search.propTypes = {}