import React from "react";
import NVD3Chart from "react-nvd3";
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
import BarDiscreteChart from "./Graphs/BarDiscreteChart";
import LineChart from "./Graphs/LineChart";
import MultiBarChart from "./Graphs/MultiBarChart";
import PieBasicChart from "./Graphs/PieBasicChart";
import PieDonutChart from "./Graphs/PieDonutChart";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Jumbotron className="jumbotron-title">
            <h1>Luiz, bem vindo a sua tela de monitoramento</h1>
            <p className="text-white">
              Aqui você pode monitorar todos os seus investimentos e como eles
              estão sendo aplicados pelos nossos parceiros.
            </p>
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
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <Jumbotron className="jumbotron-title">
              <p className="text-white">
                <span style={{ color: "black" }}>Lembre-se! </span>Você está a
                60% de conseguir a sua tão desejada{" "}
                <span style={{ color: "black" }}>viagem</span>
              </p>
            </Jumbotron>
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col>
            <h4>Retorno nos ultimos meses</h4>
            <BarDiscreteChart />
          </Col>
          <Col>
            <h4>Retorno financeiro no ano de 2019</h4>
            <MultiBarChart />
          </Col>
        </Row>
        <br></br>
        <br></br>
        <br></br>
        <Row>
          <Col></Col>
          <Col>
            <h4 style={{ textAlign: "center" }}>
              Relatório de tipos de compras no ano de 2020
            </h4>
            <PieDonutChart />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
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
      </Container>
    );
  }
}

export default Dashboard;
