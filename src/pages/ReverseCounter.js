import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import backgroundimage from "../sources/img/Logo2.png";
import "../App.css";
//import "../sources/signup.css";

const ReverseCounter = ({ targetDate, handleShowModal }) => {
  const [counter, setCounter] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(interval);
        setCounter({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCounter({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const remainingHours = counter.days * 24 + counter.hours;
  const remainingMinutes = remainingHours * 60 + counter.minutes;

  return (
    <Container
      id="mainContainer"
      className="d-flex flex-column justify-content-center align-items-center vh-100 background-image"
      style={{ backgroundImage: `url(${backgroundimage})` }}
    >
      <div id="counterContainer">
        <p className="animated-shadow">Descúbrelo en:</p>
        <div className="counter">
          <Row>
            <Col>
              <p className="animated-shadow2">Días: {counter.days}</p>
            </Col>
            <Col>
              <p className="animated-shadow2">Horas: {remainingHours}</p>
            </Col>
            <Col>
              <p className="animated-shadow2">Minutos: {remainingMinutes}</p>
            </Col>
            <Col>
              <p className="animated-shadow2">Segundos: {counter.seconds}</p>
            </Col>
          </Row>
        </div>
      </div>
      <Button
        onClick={handleShowModal}
        className="btn btn-primary"
        href="/inscribete"
      >
        Inscribirse
      </Button>
    </Container>
  );
};

export default ReverseCounter;
