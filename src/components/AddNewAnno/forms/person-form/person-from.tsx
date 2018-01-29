import { Button } from '@blueprintjs/core';
import * as React from 'react';
import './person-form.css';

const uniqid = require('uniqid');

export class PersonFrom extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      type: 'person',
      annotation: {}
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputTimeChange = this.handleInputTimeChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <form className={'pt-elevation-4 form-container'} onSubmit={this.submitForm}>
        <div className={'pt-input-group inputs'}>
          <span className='pt-icon pt-icon-time'/>
          <input type='number' placeholder='second from vide' className={'pt-input  t pt-icon-time'} required={true} name='time' onChange={this.handleInputTimeChange}/>
        </div>
        <div className={'pt-input-group'}>
          <span className='pt-icon pt-icon-id-number seconds'/>
          <input type='text' placeholder='Type of person' className={'pt-input types'} required={true} name='type' onChange={this.handleInputChange}/>
        </div>
        <div className={'pt-input-group'}>
          <span className='pt-icon pt-icon-person seconds'/>
          <input type='text' placeholder='First Name' className={'pt-input types'} required={true} name='firstName' onChange={this.handleInputChange}/>
        </div>
        <div className={'pt-input-group'}>
          <span className='pt-icon pt-icon-user seconds'/>
          <input type='text' placeholder='Last Name' className={'pt-input types'} required={true} name='lastName' onChange={this.handleInputChange}/>
        </div>
        <div>
          <Button type='submit' className={'pt-intent-primary button'}>Add Person</Button>
        </div>
      </form>
    );
  }

  private handleInputChange(event) {
    const target = event.target;

    this.setState({
      annotation: {...this.state.annotation, [target.name]: target.value}
    });
  }

  private handleInputTimeChange(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  private submitForm(event) {
    event.preventDefault();
    let actualLocalStorage = JSON.parse(localStorage.getItem('anno'));
    if (actualLocalStorage === null) {
      actualLocalStorage = [];
    }
    const title = localStorage.getItem('song_title');
    const url = localStorage.getItem('song_url');
    const objectToAdd = {id: uniqid(), title: title, url: url, ...this.state};
    actualLocalStorage.unshift(objectToAdd);
    localStorage.setItem('anno', JSON.stringify(actualLocalStorage));
    localStorage.setItem('notification', 'true');
  }
}
