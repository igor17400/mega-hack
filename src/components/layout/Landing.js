import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from "react-bootstrap";
import "./Landing.css";

import shop from "../../img/debit-card.png";
import cash from "../../img/payment-method.png";
import woman_stock from "../../img/female-professor-of-economy-with-bars-stocks-graphic-on-clipboard.png";
import success from "../../img/success.png";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      height: 1,
    }}
  />
);

class Landing extends Component {
  render() {
    return (
      <div>
        <Container fluid bg="light">
          <Row>
            <Col>
              <Container fluid className="jumbotron-title">
                <div className="container container-title">
                  <h2 className="text-white">
                    E se você conseguisse aprender sobre{" "}
                    <span className="lead-secondColor">investimentos</span>{" "}
                  </h2>
                  <h2 className="text-white">
                    de maneira simples, sem riscos e eficiente?
                  </h2>
                </div>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="cover-image1 container-size">
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col xs={6}></Col>
                  <Col>
                    <h2 className="text-white">
                      Compras convertidas em{" "}
                      <span className="text-firstColor">investimentos</span>{" "}
                    </h2>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="container-config">
                <Row>
                  <Col></Col>
                  <Col xs={6}>
                    <h2 className="text-white">
                      Reinventamos o jeito de se aprender a investir.
                    </h2>
                    <ColoredLine color="rgb(255, 255, 255)" />
                  </Col>
                  <Col></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <img
                      alt=""
                      src={shop}
                      width="150"
                      height="150"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Faça <span className="text-secondColor">compras</span>{" "}
                      físicas ou online em quaisquer de nossos parceiros
                    </h3>
                  </Col>
                  <Col xs={3}></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col xs={3}></Col>
                  <Col>
                    <img
                      alt=""
                      src={cash}
                      width="150"
                      height="150"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Ganhe seu{" "}
                      <span className="text-secondColor">dinheiro</span> de
                      volta para cada compra realizada
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      alt=""
                      src={woman_stock}
                      width="150"
                      height="150"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Créditos convertidos em{" "}
                      <span className="text-secondColor">educação</span>{" "}
                    </h3>
                    <h3 className="text-white">financeira</h3>
                  </Col>
                  <Col xs={3}></Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col xs={3}></Col>
                  <Col>
                    <img
                      alt=""
                      src={success}
                      width="150"
                      height="150"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Aprenda com os{" "}
                      <span className="text-secondColor">melhores</span> e dê
                      mais a um passo em direção ao seu sonho
                    </h3>
                  </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="cover-image3 container-size">
                <Row>
                  <Col></Col>
                  <Col xs={5}>
                    <h2 className="text-secondColor">
                      Não perca mais <span className="text-white">tempo</span>{" "}
                    </h2>
                    <h2 className="text-secondColor">
                      Junte-se a uma plataforma unificada que se preocupa com o
                      seu planejamento financeiro
                    </h2>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="jumbotron-title">
                <div className="container container-title">
                  <h2 className="text-white">Aprenda a investir.</h2>
                  <h2 className="text-white">
                    Cash<span className="lead-secondColor">Invest</span>
                  </h2>
                </div>
              </Container>
            </Col>
          </Row>
        </Container>
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

export default Landing;
