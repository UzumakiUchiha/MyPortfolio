import { Col, Container, Row } from "react-bootstrap"
 import { skillInfo } from "../userData"
const Skills = () =>{
    
    return(
        <section id="skills">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="sectionTitle"><span>Skills I've aquired working on Projects</span></h2>
                        <div className="skillList">
                            {skillInfo.map((item, index)=>{
                                return <div className="skillwrapper" key={index}>
                                    <div style={{width:`${item.percentage}%`}}>{item.skillName}</div>
                                </div>
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Skills