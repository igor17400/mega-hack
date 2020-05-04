import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button,
  Card,
  Alert,
  Carousel,
  Image,
} from "react-bootstrap";

import "./userPage.css";

export default class Promocoes extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <Jumbotron style={{ backgroundColor: "rgb(0, 144, 158)" }}>
                <h1 style={{ textAlign: "center" }}>
                  Melhores ofertas do dia!
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <Link to="/userpage">
                  <Button variant="light" size="lg">
                    Parceiros
                  </Button>{" "}
                </Link>
                <Link to="/promocoes">
                  <Button variant="danger" size="lg">
                    Promoções
                  </Button>{" "}
                </Link>
                <Link to="/dashboard">
                  <Button variant="light" size="lg">
                    Investimentos
                  </Button>{" "}
                </Link>
              </Jumbotron>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row>
            <Col></Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ width: "100%", height: "170px" }}
                  variant="top"
                  src="data:image/png;base64,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"
                />
                <Card.Body>
                  <Card.Title className="text-dark">Adidas</Card.Title>
                  <Card.Text className="text-dark">
                    Pegue o seu cupom de{" "}
                    <span style={{ color: "red" }}>50%</span> de cashback
                  </Card.Text>
                  <Button variant="danger">Não posso perder!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ width: "100%", height: "170px" }}
                  variant="top"
                  src="https://zeedog.vteximg.com.br/arquivos/meta-content-logo-img.jpg?v=636688928823700000"
                />
                <Card.Body>
                  <Card.Title className="text-dark">Zeedog</Card.Title>
                  <Card.Text className="text-dark">
                    Pegue o seu cupom de{" "}
                    <span style={{ color: "red" }}>80%</span> de cashback
                  </Card.Text>
                  <Button variant="danger">Não posso perder!</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col></Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
        <footer className="container py-5">
          <div className="row">
            <div className="col-12 col-md">
              <p>CashInvest</p>
              <small className="d-block mb-3 text-muted">© 2020-2021</small>
            </div>

            <div className="col-6 col-md">
              <h5>About</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Our team
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Location
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Terms
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Contact Us</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Github
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Youtube
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md">
              <h5>Download</h5>
              <ul className="list-unstyled text-small">
                <li>
                  <Link className="text-muted" to={"/"}>
                    Apple store
                  </Link>
                </li>
                <li>
                  <Link className="text-muted" to={"/"}>
                    Android store
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
