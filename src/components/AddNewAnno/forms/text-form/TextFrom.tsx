import { Button } from '@blueprintjs/core';
import * as React from 'react';
import './TextForm.css';

export class TextFrom extends React.Component {
  render() {
    return (
      <form className='pt-elevation-4 form-container'>
          <div className={'pt-input-group inputs'}>
            <span className={'pt-icon pt-icon-time'}/>
            <input type='number' placeholder='second for text' className={'pt-input pt-icon-time'}/>
          </div>
            <div className='pt-input-group seconds'>
              <span className='pt-icon pt-icon-label'/>
              <textarea className='pt-input' placeholder='Annotation text'/>
            </div>
          <div>
            <Button className='pt-intent-primary button'>Add Anno Text</Button>
          </div>
      </form>
  );
  }
  }
