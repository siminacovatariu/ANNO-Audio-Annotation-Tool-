import * as React from 'react';
import './link-form.css';

export class LinkForm  extends React.Component {
  render() {
    return (
      <form className={'pt-elevation-4'}>
        <div className={'pt-input-group'}>
          <input type='number' placeholder='second from link' className={'pt-input pt-icon-time'}/>
        </div>
        <div className={'pt-input-group'}>
          <span className={'pt-icon pt-icon-link'}/>
          <input type='text' placeholder='Insert your link' className={'pt-input pt-icon-link'}/>
        </div>
      </form>
    );
  }
}
