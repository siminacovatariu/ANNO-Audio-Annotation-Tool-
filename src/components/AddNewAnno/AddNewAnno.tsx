import { Button, Menu, MenuItem, Popover } from '@blueprintjs/core';
import * as React from 'react';
import { TextFrom } from './forms/text-form/TextFrom';
import { LinkForm } from './forms/link-form/link-form';
import './AddNewAnno.css';
import { ImageForm } from './forms/image-form/image-form';
import { PersonFrom } from './forms/person-form/person-from';

export class AddNewAnno extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      view: <ImageForm/>,
      title: null
    };
    this.setSongTitle = this.setSongTitle.bind(this);
    this.getSongTitle = this.getSongTitle.bind(this);
  }

  render() {
    const options = [{id: 1, type: 'image'},
      {id: 2, type: 'link'},
      {id: 3, type: 'text'},
      {id: 4, type: 'person'}];
    const item = options.map(option => <MenuItem text={option.type.toUpperCase()} key={option.id} className='pt-intent-primary anno-drop-down-option' onClick={() => this.handleClick(option.id)}/>);
    this.setSongTitle();
    return (
      <div className='anno-container'>
        <header>
          <h4 id='anno-song-title'>{this.state.title}</h4>
        </header>
        <div className='anno-container--content'>
          <Popover content={<Menu>{item}</Menu>} position={7}>
            <Button className='pt-icon-arrow-down pt-intent-primary' text={'Anno type'.toUpperCase()}/>
          </Popover>
        </div>
        {this.state.view}
      </div>
    );
  }

  private setSongTitle() {
    setTimeout(this.getSongTitle, 1000);
  }

  private getSongTitle() {
    this.setState({title: localStorage.getItem('song_title')});
  }

  private handleClick(optionId) {
    switch (optionId) {
      case 1:
        this.setState({view: <ImageForm/>});
        break;
      case 2:
        this.setState({view: <LinkForm/>});
        break;
      case 3:
        this.setState({view: <TextFrom/>});
        break;
      case 4:
        this.setState({view: <PersonFrom/>});
        break;
      default:
        this.setState({view: <TextFrom/>});
    }
  }
}
