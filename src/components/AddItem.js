import React from 'react'

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
      <form action="" onSubmit={this.submit}>
        <input type="text" name="name" autoComplete="off" placeholder="Имя" className={(errors.name ? "error" : "")} />
        <input type="tel" name="phone" autoComplete="off" placeholder="Телефон" className={(errors.phone ? "error" : "")}/>
        <input type="submit" value="Добавить запись"/>
        {(errors.form) ? <div className="form-error">{errors.form}</div> : ''}
      </form>
    )
  }
}
