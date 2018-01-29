import { Button } from '@blueprintjs/core';
import * as React from 'react';
import './TextForm.css';

export class TextFrom extends React.Component {
  render() {
    return (
      <form className='pt-elevation-4 form-container'>
        <div>
          <div className={'pt-input-group'}>
            <input type='number' placeholder='second for text' className={'pt-input pt-icon-time'}/>
          </div>
          <div className='pt-input-group input-group'>
            <span className='pt-icon pt-icon-swap-vertical'/>
            <input className='pt-input' type='number' placeholder='width'/>
            <span className='pt-icon'>px</span>
          </div>
          <div className='pt-input-group input-group'>
            <span className='pt-icon pt-icon-swap-horizontal'/>
            <input className='pt-input' type='number' placeholder='height'/>
            <span className='pt-icon'>px</span>
          </div>
        </div>
        <div>
          <div className='pt-input-group'>
            <span className='pt-icon pt-icon-label'/>
            <input className='pt-input' type='text' placeholder='Annotation text'/>
          </div>
        </div>
        <Button className='pt-intent-success'>Add annotation</Button>
      </form>
    );
  }
}
