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
        <NavItem href="#boutiques">Boutiques</NavItem>
        <NavItem href="#bars">Bars</NavItem>
        <NavItem href="#restaurants">Restaurants</NavItem>
      </Nav>
    </Navbar>
    <Grid fluid>
      <Row className="section-segment">
        <a className="anchor" id="boutiques" />
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
          <h2>Boutiques</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
      <Row className="section-details">
        <a className="anchor" id="bars" />
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
          <h2>Bars</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
      <Row className="section-segment" >
        <a className="anchor" id="restaurants" />
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
          <h2>Restaurants</h2>
          <p>Blablabla...</p>
        </Col>
      </Row>
    </Grid>
  </div>
);
