import * as React from 'react';
import { Button } from '@blueprintjs/core';
import './image-form.css';

export class ImageForm extends React.Component {
  render() {
    return (
      <form className={'pt-elevation-4 form-container'}>
        <div className={'pt-input-group'}>
          <span className={'pt-icon pt-icon-time'}/>
          <input type='number' className={'pt-input second'}/>
          <span className={'pt-icon icon'}>second</span>
        </div>
        <div className={'pt-input-group'}>
          <span className={'pt-icon pt-icon-upload'}/>
          <input type='file' className={'pt-input'}/>
          <label> Plase select a photo (jpeg or png) </label>
        </div>
        <div>
          <Button className={'pt-intent-primary'}>Add Image</Button>
        </div>
      </form>
    );
  }
}
