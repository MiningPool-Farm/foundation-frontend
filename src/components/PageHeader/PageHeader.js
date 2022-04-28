/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// reactstrap components
//import { Container } from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container>
        {/*<div className="content-center brand">
          <img
            alt="..."
            className="img-fluid"
            src={require("../../assets/img/bitcoin.png")}
            width={100}
            height={100}
          />*/}
          <h1 className="h1-seo text-center mt-md mb-lg">Let's Mine Some Crypto!</h1>
          <hr></hr>
        {/*</div>*/}
        <Row>
        <Col md="2">
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("../../assets/img/bitcoin.png")}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">Ergo</h4>
                  <span>ERG</span>
                  <hr className="line-info" />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  <ListGroupItem>0 Miners</ListGroupItem>
                  <ListGroupItem>0Gh/s Hashrate</ListGroupItem>
                  <ListGroupItem>0 Blocks</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color="primary">
                Coming Soon
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="2">
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("../../assets/img/bitcoin.png")}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">Raven</h4>
                  <span>RVN</span>
                  <hr className="line-info" />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  <ListGroupItem>1000 Miners</ListGroupItem>
                  <ListGroupItem>50Gh/s Hashrate</ListGroupItem>
                  <ListGroupItem>5000 Blocks</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color="primary">
                Fee: 1%
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="2">
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("../../assets/img/etherum.png")}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">Ethereum Classic</h4>
                  <span>ETC</span>
                  <hr className="line-success" />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  <ListGroupItem>1000 Miners</ListGroupItem>
                  <ListGroupItem>50Gh/s Hashrate</ListGroupItem>
                  <ListGroupItem>5000 Blocks</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color="primary">
                Fee: 1%
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="2">
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("../../assets/img/etherum.png")}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">Firo</h4>
                  <span>FIRO</span>
                  <hr className="line-success" />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  <ListGroupItem>1000 Miners</ListGroupItem>
                  <ListGroupItem>50Gh/s Hashrate</ListGroupItem>
                  <ListGroupItem>5000 Blocks</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color="primary">
                Fee: 1%
              </Button>
            </CardFooter>
          </Card>
        </Col>
        <Col md="2">
          <Card className="card-coin card-plain">
            <CardHeader>
              <img
                alt="..."
                className="img-center img-fluid"
                src={require("../../assets/img/ripp.png")}
              />
            </CardHeader>
            <CardBody>
              <Row>
                <Col className="text-center" md="12">
                  <h4 className="text-uppercase">Monero</h4>
                  <span>XMR</span>
                  <hr className="line-warning" />
                </Col>
              </Row>
              <Row>
                <ListGroup>
                  <ListGroupItem>1000 Miners</ListGroupItem>
                  <ListGroupItem>50Gh/s Hashrate</ListGroupItem>
                  <ListGroupItem>5000 Blocks</ListGroupItem>
                </ListGroup>
              </Row>
            </CardBody>
            <CardFooter className="text-center">
              <Button className="btn-simple" color="primary">
                Fee: 0%
              </Button>
            </CardFooter>
          </Card>
        </Col>
      </Row>
      <h3 className="h3-seo d-none d-sm-block text-center">Easy. Anonymous. Low-Fee. Open Source.</h3>
      </Container>
    </div>
  );
}
