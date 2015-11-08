import React from "react";
import { Carousel, CarouselItem, Col, Grid, Jumbotron, Row } from "react-bootstrap";
import { Link } from "react-router";

export default () => (
  <Grid fluid className="home">
    <Row className="section-main">
      <h1>Jean-Paul Le Cam</h1>
      <h2>Architecture d'intérieur en Bretagne</h2>
    </Row>
    <Row className="section-segment">
      <Col md={6}>
        <h3 className="text-center">Pour professionnels</h3>
        <Carousel>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Boutiques</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Bars</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Restaurants</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
        </Carousel>
        <Link className="btn btn-default btn-block btn-lg" to="/professionnels/">Plus d'infos</Link>
      </Col>
      <Col md={6}>
        <h3 className="text-center">Pour particuliers</h3>
        <Carousel>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Maisons</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Cuisines</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
          <CarouselItem style={{height: 300}}>
            <div className="carousel-caption">
              <h3>Salles de bains</h3>
              <p>Blablabla bla bla blabla blablabla.</p>
            </div>
          </CarouselItem>
        </Carousel>
        <Link className="btn btn-default btn-block btn-lg" to="/particuliers/">Plus d'infos</Link>
      </Col>
    </Row>
  </Grid>
);
