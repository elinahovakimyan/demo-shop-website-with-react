import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import data from '../../data/images.json';
import GalleryItem from './GalleryItem';

class Gallery extends Component {
  render() {
    return(
      <Row className="show-grid">
        {data.map(item => (
          <GalleryItem item={item} key={item.id}/>
        ))}
      </Row>
    )
  }
}

export { Gallery };
