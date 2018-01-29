import * as React from 'react';

export class PersonFrom extends React.Component {
  render() {
    return (
      <form className={'pt-elevation-4'}>
        <div className={'pt-input-group'}>
          <input type='number' placeholder='second from vide' className={'pt-input pt-icon-time'}/>
        </div>
        <div className={'pt-icon-person pt-input-group'}>
          <input type='text' placeholder='Type of person' className={'pt-input'}/>
          <input type='text' placeholder='First Name' className={'pt-input'}/>
          <input type='text' placeholder='Last Name' className={'pt-input'}/>
        </div>
      </form>
    );
  }
}
