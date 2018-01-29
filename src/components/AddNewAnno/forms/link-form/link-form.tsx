import { Button } from '@blueprintjs/core';
import * as React from 'react';
import './link-form.css';

const uniqid = require('uniqid');

export class LinkForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      type: 'link',
      annotation: {}
    };
    this.handleInputChanges = this.handleInputChanges.bind(this);
    this.handleInputLinkChanges = this.handleInputLinkChanges.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <form className={'pt-elevation-4 form-container'} onSubmit={this.submitForm}>
        <div className={'pt-input-group inputs'}>
          <span className='pt-icon pt-icon-time'/>
          <input type='number' placeholder='second from link' className={'pt-input pt-icon-time'} required={true} name='time' onChange={this.handleInputChanges}/>
        </div>
        <div className={'pt-input-group second'}>
          <span className={'pt-icon pt-icon-link'}/>
          <input type='text' placeholder='Insert your link' className={'pt-input pt-icon-link'} required={true} name='link' onChange={this.handleInputLinkChanges}/>
        </div>
        <div>
          <Button type='submit' className={'pt-intent-primary button'}>Add Link</Button>
        </div>
      </form>
    );
  }

  private handleInputChanges(event) {
    const target = event.target;

    this.setState({
      [target.name]: target.value
    });
  }

  private handleInputLinkChanges(event) {
    const target = event.target;

    this.setState({
      annotation: {link: target.value}
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
