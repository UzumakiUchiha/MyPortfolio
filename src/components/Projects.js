import { Button, Card, Col, Container, Row } from "react-bootstrap"
import { projectInfo } from "../userData"

const Projects = () =>{
    

    const redirectTo = (link) =>{
        window.open(link,'_blank');
    }
    return(
        <section id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectionTitle"><span>Projects I've Worked on</span></h2>
                        <div className="projectList">
                            <Row>
                                {projectInfo.map((item, index)=>{
                                    return <Col md={4} sm={6} xs={12} key={index}>
                                        <Card>
                                            <Card.Img variant="top" src={item.image} />
                                            <Card.Body>
                                                <Card.Title>{item.title}</Card.Title>
                                                <Card.Text>{item.description}</Card.Text>
                                                <Button target="_blank" onClick={redirectTo(item.link)} variant="primary">Go somewhere</Button>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                })}
                                
                            </Row>
                            
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects