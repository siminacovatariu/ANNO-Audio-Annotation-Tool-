import * as React from 'react';
import { AddNewAnno } from './AddNewAnno/AddNewAnno';
import './App.css';
import { MyAnno } from './MyAnno/MyAnno';

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: [
        {
          id: 1,
          text: 'Add new Anoo'
        },
        {
          id: 2,
          text: 'My Anno'
        }],
      view: <AddNewAnno/>
    };
  }

  render() {
    const header = (
      <div className='anno-header'>
        <button className='active' onClick={() => this.handleClick(1)}> Add New Anoo</button>
        <button onClick={() => this.handleClick(2)}> My Anno</button>
      </div>);
    return (
      <div>
        {header}
        {this.state.view}
      </div>
    );
  }

  private handleClick(elementID) {

    if (elementID === 1) {
      this.setState({view: <AddNewAnno/>});
    } else if (elementID === 2) {
      this.setState({view: <MyAnno/>});
    } else {
      this.setState({view: <AddNewAnno/>});
    }
  }
}
