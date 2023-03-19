import { Container, Row, Col } from 'react-bootstrap';
import TimelineComponent from '../components/TimelineComponent';
function About() {
  return (
    <Container>
      <Row>
        <Col className='p-4'>
          <h1>Falk <u>Marius</u> Mauritz</h1>
        </Col>
      </Row>
      <Row className='px-4'>
        <Col className='mx-auto shadow p-4 bg-white'>
          <h4>Software Developer</h4>
          <div className="personal-details">
            <p>Father to a beautiful daughter <br></br>Engaged to a lovely partner</p>
          </div>
          <div className="technical-skills">
            <h3>Technical Skills</h3>
            <ul>
              <li>Proficient in multiple programming languages including JavaScript, Php, HTML, (S)CSS, C++, Python, and more</li>
              <li>Passionate about software development and enjoys the constant learning and problem-solving that comes with it</li>
              <li>Always seeking opportunities to expand knowledge and expertise in new technologies</li>
            </ul>
          </div>
          <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
              <li>Cooking: enjoys experimenting with different ingredients and trying out new recipes</li>
              <li>Bouldering: challenges both physical and mental strength, which enhances creativity and problem-solving skills as a software developer.</li>
            </ul>
          </div>
          <p>
            I'm a passionate software developer with a diverse skillset that includes proficiency in multiple languages, including JavaScript, Php, HTML, (S)CSS, C++, Python, and more. I find software development to be a challenging and engaging field that requires constant learning and problem-solving, which is something I thrive on. I'm always looking for opportunities to expand my knowledge and expertise in new technologies.
          </p>
          <p className='mb-0'>
            When I'm not developing software, I enjoy a range of hobbies that keep me mentally and physically fit. Cooking is a hobby that allows me to unleash my creativity in the kitchen, and I love trying out new recipes and experimenting with different ingredients. Additionally, bouldering is a hobby that challenges both my physical and mental strength, which I believe enhances my creativity and problem-solving skills in my work as a software developer.
          </p>


        </Col>
      </Row>
      <TimelineComponent />

    </Container>
  )
}
export default About;