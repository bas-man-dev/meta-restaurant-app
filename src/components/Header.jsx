import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "./Nav";
import Logo1 from '../assets/images/Logo1.png'

const Header = () => {
  return (
    <>
      <header>
        <Container>
          <Row style={{marginTop:'20px'}}>
            <Col>
            <img src={Logo1} alt="" width={100} height={'auto'}/>
            </Col>
            <Col>
            <Nav/>
            </Col>
          </Row>
        </Container>

      </header>
    </>
  );
};

export default Header;
