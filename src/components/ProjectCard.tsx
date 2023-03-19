import { Card, Button } from 'react-bootstrap';
import { Project, Technology } from '../Interfaces';

interface ProjectCardProps {
    project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
    return (
        <Card className='h-100 project-card'>
            <Card.Img variant="top" src={project.image} alt={project.title} />
            <Card.Body className='d-flex  flex-column'>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>
                    {project.description}
                    {project.technologies && (
                        <ul className="technologies">
                            {project.technologies.map((technology: Technology) => (
                                <li key={technology.name}>
                                    {technology.icon}
                                    <span>{technology.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </Card.Text>
                <div className='mt-auto d-flex gap-3 w-100 justify-content-between'>
                    <Button className='w-100' href={project.link} variant="primary" target={project.link_target}>{project.link_text}</Button>

                    {project.link2 && (
                        <Button className='w-100' href={project.link2} variant="primary" target={project.link_target2}>{project.link_text2}</Button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}

export default ProjectCard;
