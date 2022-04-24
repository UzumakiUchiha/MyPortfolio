import { Fragment, useCallback, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { companyInfo } from "../userData"

const Experience = () => {
    const [showMoreDetails, toggleShowMoreDetails] = useState(false)

    const toggleShowDetails = useCallback(()=>{
        toggleShowMoreDetails(!showMoreDetails)
    },[showMoreDetails])
    return(
        <section id="experience">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="sectionTitle"><span>Experience</span></h2>
                        <div className="experienceDetails">
                            {companyInfo.map((item,index)=>{
                                return <Row key={index}>
                                    <Col lg={3}>
                                        <div className="year">{item.year}</div>
                                    </Col>
                                    <Col lg={9}>
                                        <h3 className="post">{item.post}</h3>
                                        <span className="companyQuickInfo"><i><b>{item.companyName}</b></i> {item.company_small_desc}</span>
                                        {showMoreDetails && <Fragment>
                                            <div className="skillList">
                                                {item.skill_Aquired.map((name, index)=>{
                                                    return <span className="skills" key={index}>{name}</span>
                                                })}
                                            </div>
                                        </Fragment>}
                                        <span className="link" onClick={toggleShowDetails}>{showMoreDetails? "Know Less": "Know More..." }</span>
                                    </Col>
                                </Row>
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Experience;