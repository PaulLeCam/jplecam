import React from "react";
import { Col, Grid, Row } from "react-bootstrap";

import Header from "./Header";

export default ({ children }) => (
  <Grid fluid>
    <Header />
    <Row>{children}</Row>
    <Row>
      <Col className="section-contact">
        <h3>Contact</h3>
        <address>
          <strong>Jean-Paul Le Cam</strong><br />
          Tel : ..........<br />
          Fax : ..........<br />
          Email : ............
        </address>
      </Col>
    </Row>
  </Grid>
);
