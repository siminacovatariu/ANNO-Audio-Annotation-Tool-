import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import * as React from 'react';
import { TextFrom } from './forms/text-form/TextFrom';
import { LinkForm } from './forms/link-form/link-form';

export class AddNewAnno extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      view: <TextFrom/>
    };
  }

  render() {
    const options = [{id: 1, type: 'image'},
      {id: 2, type: 'link'},
      {id: 3, type: 'text'},
      {id: 4, type: 'person'}];
    const item = options.map(option => <MenuItem text={option.type.toUpperCase()} key={option.id} className='pt-intent-primary anno-drop-down-option' onClick={() => this.handleClick(option.id)}/>);
    console.log('titlu: ' + this.state.title);
    return (
      <div className='anno-container'>
        <header>
          <h4 id='anno-song-title'> Sound source </h4>
        </header>
        {this.state.title}
        <div className='anno-container--header'>
          <Popover content={<Menu>{item}</Menu>} position={6}>
            <Button className='pt-icon-arrow-down pt-intent-primary' text={'Anno type'.toUpperCase()}/>
          </Popover>
        </div>
        {this.state.view}
      </div>
    );
  }

  private handleClick(optionId) {
    switch (optionId) {
      case 1:
        this.setState({view: <TextFrom/>});
        break;
      case 2:
        this.setState({view: <LinkForm/>});
        break;
      default:
        this.setState({view: <TextFrom/>});
    }
  }
}
