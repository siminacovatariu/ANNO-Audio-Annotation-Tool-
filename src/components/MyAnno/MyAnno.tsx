import { Button, Icon } from '@blueprintjs/core';
import * as React from 'react';
import './MyAnno.css';

export class MyAnno extends React.Component {
  render() {
    const allAnno = JSON.parse(localStorage.getItem('anno'));

    const annoCard = allAnno.map(annotation => {
        let content;
        switch (annotation.type) {
          case 'image':
            content = (
              <div className='myAnno--details'>
                <img className='myAnno--image' src={annotation.annotation.image}/>
              </div>);
            break;
          case 'text':
            content = (
              <div className='myAnno--details'>
                <div>
                  <Icon iconName='pt-icon-label'/>
                  {annotation.annotation.text}
                </div>
              </div>
            );
            break;
          case 'person':
            content = (
              <div className='myAnno--details'>
                <div>
                  <Icon iconName='pt-icon-id-number'/>
                  {annotation.annotation.type}
                </div>
                <div>
                  <Icon iconName='pt-icon-person'/>
                  {annotation.annotation.firstName}
                </div>
                <div>
                  <Icon iconName='pt-icon-user'/>
                  {annotation.annotation.lastName}
                </div>
              </div>
            );
            break;
          case 'link':
            content = (
              <div className='myAnno--details'>
                <div>
                  <Icon iconName='pt-icon-link'/>
                  <a href={annotation.annotation.linl}> aici </a>
                </div>
              </div>
            );
            break;
          default:
            content = (<div className='pt-elevation-3 pt-intent-danger' key={annotation.id}> unknown type of annotation </div>);
        }
        return (
          <div className='pt-elevation-3 myAnno--card' key={annotation.id}>
            <a href={annotation.url}><h3 className='pt-navbar myAnno--title'>{annotation.title}</h3></a>
            <div className='myAnno--content'>
              <div className='myAnno--info'>
                <Icon iconName={'pt-icon-time'}/>
                <span>{annotation.time}</span>
                <div className='pt-tag'>{annotation.type}</div>
              </div>
              {content}
            </div>
          </div>
        );
      }
    );

    return (
      <div className='myAnno--container'>
        <div className='myAnno--export'>
          <Button className='pt-intent-primary' onClick={this.exportCSV}>Export CSV</Button>
          <Button className='pt-intent-success' onClick={this.exportJSON}>Export JSON</Button>
          <Button className='pt-intent-warning pt-disabled' onClick={this.exportXML}>Export XML</Button>
        </div>
        {annoCard}
      </div>
    );
  }

  private exportJSON() {
    const FileContent = localStorage.getItem('anno');
    const FileSaver = require('file-saver');
    const blob = new Blob([FileContent], {type: 'text/plain;charset=utf-8'});
    return FileSaver.saveAs(blob, 'file.json');
  }

  private exportCSV() {
    let textToConvert = localStorage.getItem('anno');
    textToConvert = textToConvert.replace(/\[/g, '');
    textToConvert = textToConvert.replace(/\]/g, '');
    textToConvert = textToConvert.replace(/\"/g, '');
    textToConvert = textToConvert.replace(/\{/g, '');
    textToConvert = textToConvert.replace(/\}},/g, '\r\n');
    textToConvert = textToConvert.replace(/\}/g, '');
    textToConvert = textToConvert.replace(/\"annotation"/g, '');

    const FileSaver = require('file-saver');
    const blob = new Blob([textToConvert], {type: 'text/plain;charset=utf-8'});
    return FileSaver.saveAs(blob, 'file.csv');

  }

  private exportXML() {
    const JSON = localStorage.getItem('anno');
  }
}
