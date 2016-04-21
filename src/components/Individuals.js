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
      <SectionCard
        title='Cuisines'
        imgSrc='/static/img/particuliers-cuisine.jpg'
        to='cuisines'
      />
      <SectionCard
        title='Salles de bains'
        imgSrc='/static/img/particuliers-sdb.jpg'
      />
      <SectionCard
        title='Salons séjour'
        imgSrc='/static/img/particuliers-sejour.jpg'
      />
      <SectionCard
        title='Chambres'
        imgSrc='/static/img/particuliers-chambre.jpg'
      />
    </Grid>
  </div>
);
