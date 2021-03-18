import React from 'react'
import {Row, Col, Container, Image, Button, Carousel} from "react-bootstrap"

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
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default HomeScreen
