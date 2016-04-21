import React from "react";
import { Carousel, CarouselItem, Col, Grid, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router";

import SectionCard from './SectionCard';

export default () => (
  <Grid className="home">
    <Row className="section-lead">
      <Col mdPush={2} md={8}>
        <p>Blablabla missions, prestations...</p>
      </Col>
    </Row>
    <Row className="section-segment">
      <SectionCard
        imgSrc='/static/img/section-pro.jpg'
        title='Professionnels'
        description='Blablabla'
        to='/professionnels'
      />
      <SectionCard
        imgSrc='/static/img/section-particuliers.jpg'
        title='Particuliers'
        description='Blablabla'
        to='/particuliers'
      />
    </Row>
    <Row className="section-lead">
      <Col mdPush={2} md={8}>
        <h3>Prestations</h3>
      </Col>
    </Row>
    <Row className="section-segment">
      <SectionCard
        imgSrc='/static/img/section-pro.jpg'
        title='Missions de plans'
        description='Blablabla'
        md={4}
      />
      <SectionCard
        imgSrc='/static/img/section-pro.jpg'
        title='Conseil et création déco'
        description='Blablabla'
        md={4}
      />
      <SectionCard
        imgSrc='/static/img/section-pro.jpg'
        title='Phase travaux'
        description='Blablabla'
        md={4}
      />
    </Row>
  </Grid>
);
