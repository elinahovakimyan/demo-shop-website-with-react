import React from 'react';
import { Col, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GalleryItem = ({item}) => {
  return(
    <Col xs={12} sm={6} md={4}>
      <div className="center itemCard">
        <img src={item.url} alt={item.name} className="shopItem center"/>
        <span>
          <h4 className="itemFooter"> {item.name} </h4>
          <Link to={`shop/item/${item.id}`} className="itemFooter">
            <Glyphicon glyph="share" className="itemIcon"/>
          </Link>
        </span>
      </div>
    </Col>
  )
}

export default GalleryItem;
