import TimelineElements from '../data/TimelineElements';
import { Technology, TimelineItem } from '../Interfaces';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { Col, Row } from 'react-bootstrap';

const TimelineComponent = () => {
  return (
    <Row className='mt-0 overflow-hidden'>
      <Col className='px-4'>
        <VerticalTimeline className='pb-5'>
          {TimelineElements.map((element: TimelineItem) => (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName='date'
              icon={element.icon}
            >
              <h3 className='vertical-timeline-element-title'>{element.title}</h3>
              <h5 className='vertical-timeline-element-subtitle'>{element.location}</h5>
              <p className='description'>{element.description}</p>
              {element.description2 && (
                <p className='description2'>{element.description2}</p>
              )}
              {element.technologies && (
                <ul className='technologies'>
                  {element.technologies.map((technology: Technology) => (
                    <li key={technology.id}>
                      {technology.icon}
                      <span>{technology.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </Col>
    </Row>
  );
}

export default TimelineComponent;
