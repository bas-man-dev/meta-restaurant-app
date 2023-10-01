import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Nav = () => {
  return (
    <>
    <Container>
<Row style={{marginTop:'40px'}}>
  <Col>
  <nav className="navbar navbar-expand-xl navbar-light bg-light">
        <ul className="navbar-nav">
          <li nav-item active>
          <a className="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#menu">Food Menu</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#book">Book a Table</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#deliveries">Deliveries</a>
          </li>
        </ul>
      </nav>
  </Col>
</Row>

    </Container>

    </>
  );
};

export default Nav;
