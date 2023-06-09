import { projectData } from '../data';
import { Card, Button, Col, Row, Container } from 'react-bootstrap';

const Projects = () => {
  return (
    <Container className='pb-7'>
      <Row>
        <Col className='p-4'>
          <h1>Projects</h1>
        </Col>
      </Row>
      <Row xs={1} md={2} lg={3} className="g-4  card-group">
        {projectData.slice(0, 4).map((project, index) => (
          <Col xs={12} sm={12} md={12} lg={6} xl={4} key={index} className='px-4'>

            <Card className='h-100 project-card'>

                <Card.Img variant="top" src={project.image} alt={project.title} />

              <Card.Body className='d-flex  flex-column'>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                  {project.description}
                  {project.technologies && (
                    <ul className="technologies">
                      {project.technologies.map((technology) => (
                        <li>
                          {technology.icon}
                          <span>{technology.name}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </Card.Text>
                  <div className='mt-auto d-flex gap-3 w-100 justify-content-between'>
                    <Button className='w-100' href={project.link} variant="primary"  target={project.link_target}>{project.link_text}</Button>

                    {project.link2 && (
                      <Button className='w-100' href={project.link2} variant="primary" target={project.link_target2}>{project.link_text2}</Button>
                    )}
                  </div>
              </Card.Body>
            </Card>

          </Col>
        ))}
      </Row>
    </Container>
  )
}
export default Projects;