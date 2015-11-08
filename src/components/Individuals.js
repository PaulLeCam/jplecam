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

export default () => (
  <div className="page">
    <Navbar fluid fixedTop toggleNavKey={0}>
      <NavBrand>
        <Link to="//paullecam.github.io/jplecam">JPLC</Link>
      </NavBrand>
      <Nav navbar eventKey={0}>
        <NavItem href="#maisons">Maisons</NavItem>
        <NavItem href="#cuisines">Cuisines</NavItem>
        <NavItem href="#sdb">Salles de bains</NavItem>
      </Nav>
    </Navbar>
    <Grid fluid>
      <Row className="section-segment">
        <a className="anchor" id="maisons"></a>
        <Col md={6}>
          <Carousel>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>Maisons</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
      <Row className="section-details">
        <a className="anchor" id="cuisines"></a>
        <Col md={6} mdPush={6}>
          <Carousel>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
          </Carousel>
        </Col>
        <Col md={6} mdPull={6}>
          <h2>Cuisines</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
      <Row className="section-segment">
        <a className="anchor" id="sdb"></a>
        <Col md={6}>
          <Carousel>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
            <CarouselItem style={{height: 300}}>
              <div className="carousel-caption">
                <p>Description de la photo...</p>
              </div>
            </CarouselItem>
          </Carousel>
        </Col>
        <Col md={6}>
          <h2>Salles de bains</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
    </Grid>
  </div>
);
