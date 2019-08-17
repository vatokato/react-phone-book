import React from 'react'
import { Alert, Button, Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap'

export class AddItem extends React.Component {
  submit = (e) => {
    e.preventDefault();

    this.props.addItem({
      id: Date.now(),
      name: e.target.name.value,
      phone: e.target.phone.value
    });

    e.target.name.value = '';
    e.target.phone.value = '';
  }

  render() {
    console.log("AddItem render");
    const {errors} = this.props;

    return (
      <Container className="mt-4 mb-4">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <form action="" onSubmit={this.submit}>
              <InputGroup>
                <FormControl name="name" autoComplete="off" placeholder="Имя" isInvalid={(errors.name ? "true" : "")}  />
                <FormControl name="phone" autoComplete="off" placeholder="Телефон" isInvalid={(errors.phone ? "true" : "")} />

                <InputGroup.Append>
                  <Button variant="outline-success" type="submit">Добавить</Button>
                </InputGroup.Append>
              </InputGroup>
            </form>
            {(errors.form) ? <Alert variant="danger" className="mt-2">{errors.form}</Alert> : ''}
          </Col>
        </Row>
      </Container>
    )
  }
}
