import React from 'react'
import { Col, Form, FormControl, Navbar } from 'react-bootstrap'
//import PropTypes from 'prop-types'

export class Search extends React.Component {
  onChange = (e) => {
    this.props.setQuery(e.target.value.trim());
  }

  render() {
    console.log("Search render");
    return (
      <Navbar bg="light" expand="lg">
        <Col sm="auto">
          <Navbar.Brand href="/">Телефонный справочник</Navbar.Brand>
        </Col>
        <Col>
          <Form>
            <FormControl type="text" name="query"  placeholder="Поиск по имени или номеру" className=""  defaultValue={this.props.query} onChange={this.onChange}  />
          </Form>
        </Col>
      </Navbar>

    )
  }
}

Search.propTypes = {}