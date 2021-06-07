import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Covid.css";
import Card from "../Card/Card";
import { Container, Row, Spinner, Col } from "react-bootstrap";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await axios.get("https://api.covid19india.org/data.json");
      const ActualData = await res.data.statewise[0];
      //console.log(ActualData);
      setData(ActualData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <Container className="covid__main">
        <Row>
          <Col>
            <header className="covid__header">
              <Spinner animation="grow" variant="danger" />

              <span className="covid__live">Live</span>

              <h2>COVID-19 CORONAVIRUS TRACKER</h2>
            </header>
          </Col>
        </Row>

        <section>
          <Row className="justify-content-md-center align-items-center">
            <Col md={4} xs={12}>
              <Card
                info={"OUR"}
                tag={"COUNTRY"}
                value={"INDIA"}
                colorV={"#0a81ab"}
              />
            </Col>
            <Col md={4} xs={12}>
              <Card
                info={"TOTAL"}
                tag={"RECOVERED"}
                value={data.recovered}
                colorV={"#61b15a"}
              />
            </Col>
            <Col md={4} xs={12}>
              <Card
                info={"TOTAL"}
                tag={"CONFIRMED"}
                value={data.confirmed}
                colorV={"#f0c929"}
              />
            </Col>
          </Row>
          <Row className="justify-content-md-center align-items-center">
            <Col md={4} xs={12} className="align-self-center">
              <Card
                info={"TOTAL"}
                tag={"DEATHS"}
                value={data.deaths}
                colorV={"#e1701a"}
              />
            </Col>
            <Col md={4} xs={12}>
              <Card
                info={"TOTAL"}
                tag={"ACTIVE"}
                value={data.active}
                colorV={"#0c4271"}
              />
            </Col>
            <Col md={4} xs={12}>
              <Card
                info={"LAST"}
                tag={"UPDATED"}
                value={data.lastupdatedtime}
                colorV={"#de8971"}
              />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Covid;
