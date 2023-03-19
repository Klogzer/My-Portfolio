import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Impressum = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Impressum</h1>
          <br />
          <h3>Angaben gemäß § 5 TMG:</h3>
          <p>Falk Marius Mauritz<br />
          Moislinger Allee 59<br />
          23558 Lübeck<br />
          Deutschland</p>
          <br />
          <h3>Kontakt:</h3>
          <p>E-Mail: request@mauritz.us<br />
          Telefon: +49 1523 1076835</p>
          <br />
          <h3>Haftungsausschluss:</h3>
          <p>Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.</p>
        </Col>
      </Row>
    </Container>
  )
}

function Imprint() {
  return (
    <Container className='pb-7'>
      <Row>
        <Col>
          <h1>Imprint</h1>
          <br />
          <h3>Information according to § 5 TMG:</h3>
          <p>Falk Marius Mauritz<br />
          Moislinger Allee 59<br />
          23558 Lübeck<br />
          Germany</p>
          <br />
          <h3>Contact:</h3>
          <p>Email: request@mauritz.us<br />
          Phone: +49 1523 1076835</p>
          <br />
          <h3>Liability Disclaimer:</h3>
          <p>The contents of this website have been created with the utmost care. However, no liability can be assumed for the correctness, completeness and timeliness of the content.</p>
        </Col>
      </Row>
    </Container>
  )
}

export { Impressum, Imprint };