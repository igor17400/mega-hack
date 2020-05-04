import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron, ProgressBar } from "react-bootstrap";
import "./Landing.css";

import shop from "../../img/debit-card.png";
import cash from "../../img/payment-method.png";
import woman_stock from "../../img/female-professor-of-economy-with-bars-stocks-graphic-on-clipboard.png";
import success from "../../img/success.png";
import travel from "../../img/travel.jpg";

const now = 60;

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
              <Container fluid className="jumbotron-title2">
                <div className="container container-title">
                  <h2 className="text-white">
                    O jeito mais fácil de acumular{" "}
                    <span className="lead-secondColor">dinheiro</span>.{" "}
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
                  <Col xs={4}></Col>
                  <Col>
                    <h2 className="text-white">
                      Parte do dinheiro que você gastar nas lojas parceiras é
                      revertido em{" "}
                      <span className="text-firstColor">cashback</span>
                    </h2>
                  </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <h2 className="text-white">
                      E esse valor é{" "}
                      <span className="text-firstColor">investido</span> no
                      nosso fundo.
                    </h2>
                  </Col>
                  <Col xs={6}></Col>
                  <Col></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <h2 className="text-white">
                      Você economiza e o seu dinheiro{" "}
                      <span className="text-firstColor">rende</span>{" "}
                    </h2>
                  </Col>
                  <Col xs={6}></Col>
                  <Col></Col>
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
                      Investimos uma parte do dinheiro gasto em nossos parceiros
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
                      src={success}
                      width="250"
                      height="250"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Te ajudamos a alcançar os seus{" "}
                      <span className="text-secondColor">sonhos</span>
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
                      src={woman_stock}
                      width="250"
                      height="250"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Temos <span className="text-secondColor">parcerias</span>{" "}
                      com corretoras e empresas de educação financeira
                    </h3>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      alt=""
                      src={cash}
                      width="250"
                      height="250"
                      className="d-inline-block"
                    />{" "}
                    <h3 className="text-white">
                      Não cobramos{" "}
                      <span className="text-secondColor">anuidade</span>
                    </h3>
                  </Col>
                  <Col xs={3}></Col>
                  <Col></Col>
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
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col xs={5}>
                    <h2 className="text-secondColor">
                      Te ajudamos a transformar seus sonhos em{" "}
                      <span className="text-white">metas</span>.
                    </h2>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="cover-image4 container-size">
                <Row>
                  <Col></Col>
                  <Col xs={7}>
                    <h2 className="text-secondColor">
                      Sempre quis comprar um carro, ou quem sabe, viajar, mas
                      economizar parece{" "}
                      <span className="text-white">impossível</span>?
                    </h2>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="cover-image5 container-size">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col>
                    <h2 className="text-white">
                      Ao receber{" "}
                      <span className="text-secondColor">cashback</span> em suas
                      compras, você economiza comprando e esse dinheiro é{" "}
                      <span className="text-secondColor">investido</span>, para
                      que você se aproxime cada vez mais do seu sonho.
                    </h2>
                  </Col>
                  <Col xs={1}></Col>
                  <Col></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col xs={1}></Col>
                  <Col>
                    <h2 className="text-white">
                      Na nossa <span className="text-secondColor">barra</span>{" "}
                      de metas você consegue acompanhar quantos % do valor
                      necessário para realizar seu{" "}
                      <span className="text-secondColor">sonho</span> você já
                      acumulou.
                    </h2>
                    <br></br>
                    <ProgressBar
                      variant="success"
                      now={now}
                      label={`${now}%`}
                    />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="cover-image6 container-size">
                <Row>
                  <Col></Col>
                  <Col xs={8}>
                    <h2 className="text-secondColor">
                      Na página do <span className="text-white">usuário</span> é
                      possível acompanhar onde o seu dinheiro foi investido e
                      seu rendimento.
                    </h2>
                  </Col>
                  <Col></Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col xs={5}></Col>
                  <Col>
                    <h2 className="text-secondColor">
                      Caso queira investir mais, oferecemos dicas de
                      profissionais e parcerias com plataformas de educação
                      financeira.
                    </h2>
                  </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Row>
                  <Col></Col>
                  <Col xs={8}>
                    <h2 className="text-secondColor">
                      Assim você aprende a acumular mais dinheiro e chegar mais
                      perto de seus objetivos.
                    </h2>
                  </Col>
                  <Col></Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row>
            <Col>
              <Container fluid className="jumbotron-title2">
                <div className="container container-title">
                  <h2 className="text-white">
                    <span className="text-firstColor">Cash</span>
                    <span className="lead-secondColor">Invest</span>
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
