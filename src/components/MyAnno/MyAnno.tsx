import { Icon } from '@blueprintjs/core';
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
        {annoCard}
      </div>
    );
  }
}
