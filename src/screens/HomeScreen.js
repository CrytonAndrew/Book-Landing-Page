import React from 'react'
import {Row, Col, Container, Image, Button, Carousel, Form} from "react-bootstrap"

const HomeScreen = () => {
    return (
        <>
            {/* Main page section  */}

            <div className="top-div-homescreen">
                <Container>
                    <Row>
                        <Col>
                            <h1>TALES OF THE SOUL</h1>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                            Duis hendrerit, risus vitae tempor volutpat, leo justo vulputate ex, vel semper diam nulla ut massa.</p>
                            <br></br>
                            <a href="https://www.amazon.com/TALES-SOUL-Roxanne-Smith/dp/B08YQCPY7C/ref=sr_1_3?dchild=1&keywords=Tales+of+the+soul&qid=1616055081&sr=8-3" alt="buy button"><Button variant="info"><i className="fas fa-book"></i> Purchase For R199.99</Button></a>
                        </Col>
                        <Col>
                            <Image src="images/book.JPG" className="main-book-img"/>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* About the book section  */}

            <div className="about-book-div">
                <Container>
                    <Row>
                        <Col>
                            <i className="fas fa-book-open" style={{color: "#ef8172", fontSize: "30px"}}></i>
                            <br></br>
                            <br></br>
                            <h2>
                                ABOUT THE BOOK
                            </h2>
                            <br></br>
                            <br></br>
                            
                        </Col>
                        <Col>
                            <p className="about-book-p">
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                             Duis hendrerit, risus vitae tempor volutpat, 
                            leo justo vulputate ex, vel semper diam nulla ut massa. 
                            Integer fringilla ipsum sit amet gravida euismod
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <p className="about-book-p">
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                             Duis hendrerit, risus vitae tempor volutpat, 
                            leo justo vulputate ex, vel semper diam nulla ut massa. 
                            Integer fringilla ipsum sit amet gravida euismod
                            </p>
                        </Col>
                        <Col>
                            <div className="vl">
                            <p className="quote-book">
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                            </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Reviews Section  */}

            <section className="reviews-section">
                <Container>
                    <Carousel>
                        <Carousel.Item>
                            <h2>First slide label</h2>
                            <p>"Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                            <em>Name of Reviewer</em>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h2>First slide label</h2>
                            <p>"Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                            <em>Name of Reviewer</em>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Carousel.Item>
                        <Carousel.Item>
                            <h2>First slide label</h2>
                            <p>"Nulla vitae elit libero, a pharetra augue mollis interdum."</p>
                            <em>Name of Reviewer</em>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            <section className="about-author-section">
                <Container>
                    <Row>
                        <Col md={5}>
                            <Image src="images/roxanne.JPG" className="roxanne-img"/>
                        </Col>
                        <Col>
                            <h2>About the Author</h2>
                            <hr style={{backgroundColor: "#ef8172", height: "5px", border: "0px"}}></hr>
                            <br></br>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                             Duis hendrerit, risus vitae tempor volutpat, 
                            leo justo vulputate ex, vel semper diam nulla ut massa. 
                            Integer fringilla ipsum sit amet gravida euismod
                            </p>
                            <br></br>
                            <br></br>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                             Duis hendrerit, risus vitae tempor volutpat, 
                            leo justo vulputate ex, vel semper diam nulla ut massa. 
                            Integer fringilla ipsum sit amet gravida euismod
                            </p>
                            <br></br>
                            <br></br>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur
                             adipiscing elit. Praesent sollicitudin magna vitae ullamcorper venenatis. 
                             Duis hendrerit, risus vitae tempor volutpat, 
                            leo justo vulputate ex, vel semper diam nulla ut massa. 
                            Integer fringilla ipsum sit amet gravida euismod
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Contact Section  */}


            <section className="contact-section">
                <Container>
                    <h1>Contact Me</h1>

                    <Row>
                        <Col md={8}>
                        <hr></hr>
                        <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Full Name:</Form.Label>
                            <Form.Control type="email" placeholder="Enter full name" />
                        </Form.Group>
                        <br></br>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Email Address:</Form.Label>
                            <Form.Control type="password" placeholder="Enter Email" />
                        </Form.Group>
                        <br></br>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textArea" type="text" placeholder="Message" rows={4}/>
                        </Form.Group>
                        </Form>
                        </Col>
                        <Col className="info-col" md={4}>
                            <h2>Info</h2>
                            <br></br>
                            <h6><i className="fas fa-envelope"></i>  Email: </h6>
                            <br></br>
                            <h6><i className="fab fa-instagram"></i>  Instagram: </h6>
                            <br></br>
                            <h6><i className="fas fa-clock"></i>  09:00 - 18:00</h6>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeScreen
