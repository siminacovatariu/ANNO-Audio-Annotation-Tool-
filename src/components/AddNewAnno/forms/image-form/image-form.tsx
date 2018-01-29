import { Button } from '@blueprintjs/core';
import * as React from 'react';
import './image-form.css';

const uniqid = require('uniqid');

export class ImageForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      type: 'image',
      annotation: null
    };
    this.handleInputTimeChange = this.handleInputTimeChange.bind(this);
    this.handleInputFileChange = this.handleInputFileChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  render() {
    return (
      <form className={'pt-elevation-4 form-container'} onSubmit={this.submitForm}>
        <div className={'pt-input-group desig'}>
          <span className={'pt-icon pt-icon-time'}/>
          <input type='number' className={'pt-input second'} placeholder='Time from audio' name='time' value={this.state.time} required={true} onChange={this.handleInputTimeChange}/>
          <span className={'pt-icon icon'}>second</span>
        </div>
        <div className={'pt-input-group desig'}>
          <span className={'pt-icon pt-icon-upload'}/>
          <input type='file' className={'pt-input'} name='image' required={true} accept='image/*' onChange={this.handleInputFileChange}/>
          <label className='label'> Plase select a photo (jpeg or png) </label>
        </div>
        <div>
          <Button type='submit' className={'pt-intent-primary button'}>Add Image</Button>
        </div>
      </form>
    );
  }

  private handleInputTimeChange(event) {
    this.setState({
      time: event.target.value
    });
  }

  private handleInputFileChange(event) {
    const image = new FileReader();
    image.readAsDataURL(event.target.files[0]);
    image.onloadend = () => this.setState({annotation: {image: image.result}});
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
