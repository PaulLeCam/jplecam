import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router';

export default ({ imgSrc, title, description, to = '#', md = 6 }) => (
  <Col className='SectionCard' md={md}>
    <Link className='SectionCard-link' to={to} style={{
      backgroundImage: `url(${ imgSrc })`,
    }}>
      <div className='SectionCard-contents'>
        <div className='SectionCard-title'>{title}</div>
        <p>{description}</p>
      </div>
    </Link>
  </Col>
);
