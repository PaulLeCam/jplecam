import React from "react";
import {
  Carousel,
  CarouselItem,
  Col,
  Grid,
  Jumbotron,
  Nav,
  Navbar,
  NavBrand,
  NavItem,
  Row,
} from "react-bootstrap";
import { Link } from "react-router";

import SectionCard from './SectionCard';

export default () => (
  <div className="page">
    <Navbar className="navbar" fluid toggleNavKey={0}>
      <Nav navbar eventKey={0}>
        <NavItem href="#cuisines">Cuisines</NavItem>
        <NavItem href="#sdb">Salles de bains</NavItem>
        <NavItem href="#salons">Salons séjour</NavItem>
        <NavItem href="#chambres">Chambres</NavItem>
        <NavItem href="#autres">Autres prestations</NavItem>
      </Nav>
    </Navbar>
    <Grid>
      <Row>
        <Col xs={12}>
          <h1>Cuisines</h1>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <img src='/static/img/cuisine-1.jpg' className='img-responsive' />
        </Col>
        <Col md={6}>
          <p>Texte</p>
        </Col>
      </Row>
      <Row>
        <Col md={6} mdPush={6}>
          <img src='/static/img/cuisine-2.jpg' className='img-responsive' />
        </Col>
        <Col md={6} mdPull={6}>
          <p>Texte</p>
        </Col>
      </Row>
    </Grid>
  </div>
);
