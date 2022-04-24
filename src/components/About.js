import { Col, Container, Row } from "react-bootstrap"
import MyPic from "../assets/images/my-photo.jpg"

const About = () => {
    return(
        <section id="about">
            <Container className="aboutUS">
                <Row style={{justifyContent:"space-between", alignItems:"center"}}>
                    <Col md="auto">
                        <div className="nameDesignation">
                            <h1>Zoyeb Khan</h1>
                            <span className="designation">Web Developer ✨</span>
                        </div>
                    </Col>
                    <Col md="auto">
                        <div className="userImage">
                            <img src={MyPic} alt="Zoyeb Khan" className="img-fluid"/>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <p>Hey, I'm Zoyeb! 👋</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a urna eu quam consectetur blandit. Morbi gravida vel nunc sed imperdiet. Aliquam sit amet tortor sem. Vivamus dapibus luctus elit, sit amet consectetur nisl vehicula vel. Nullam ut ex ut felis rhoncus convallis consectetur ac tellus.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default About