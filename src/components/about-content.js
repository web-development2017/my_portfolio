import React from "react";
import { Link } from "gatsby";

import { motion } from "framer-motion";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const AboutContent = () => (    
    <div className="row about">
        <div className="col-sm-12 col-lg-8 mb-sm-5 pr-lg-5">
          <h1 className="mb-5">About Me</h1>
          <p>Hi, my name's Richard, and I'm a self-taught web developer seeking a career change and to find my first job in web development.</p>
          <p>I have decided to pursue a career in web development because I appreciate the enriching benefits technology can achieve for business and the increasing growth of the digital sector.</p>
          <p>I'm currently looking to work with a company that will support me in an entry-level role and guide me towards a suitable future career.</p>
          <p className="mb-5">Please feel free to visit my <Link to="/contact">contact</Link> section to contact me.</p>

          <h5 className="mb-2">Languages that I have used the most:</h5>
          <p>HTML, CSS, JavaScript, SQL.</p>
          <h5 className="mb-2">Technologies that I have used the most:</h5>
          <p>React, MySQL, Bootstrap, Materialize, Node, Electron, GitHub, Git, Firebase, SASS.</p>
          <h5 className="mb-2">Other languages I've used but not as proficient with:</h5>
          <p>PHP, Python, Dart, C#, C++.</p>
          <h5 className="mb-2">Other technologies I've used but not as proficient with:</h5>
          <p>Gatsby, PWA, Flutter, Laravel, Unity, Azure, MongoDB.</p>
          <h5 className="mb-2">Languages and technologies interested in learning more:</h5>
          <p>Rust, Deno, Containers, AWS, Microsoft Graph, Internet Of Things, GPT-3.</p>
        </div>
        
        <motion.div
            initial={{x: 450 }} 
            animate={{ x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, type: 'tween' }}
             className="col-sm-12 col-lg-4 text-center mt-5 mt-lg-0">
            <div className="row justify-content-sm-between justify-content-lg-center">
                <Card className="mb-5 col-xs-12 col-sm-6 col-lg-12">
                    <Card.Body>
                        <Card.Title>CV</Card.Title>
                        <Card.Text>
                        View my CV
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        {/* <Link className="d-block" to="/cv">CV</Link> */}
                        <Card.Link href="https://github.com/web-development2017/my_portfolio/blob/master/src/components/Resume-Richard-Taylor.pdf" target="_blank" rel="noopener noreferrer">CV</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="mb-5 col-xs-12 col-sm-6 col-lg-12">
                    {/* <Image fluid={imageData} alt={title} /> */}
                    <Card.Body>
                        <Card.Title>LinkedIn</Card.Title>
                        <Card.Text>
                        View my LinkedIn Page
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Link href="https://www.linkedin.com/in/richard-taylor-a570a6164" target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
                    </Card.Body>
                </Card>
                <Card className="mb-5 col-xs-12 col-sm-6 col-lg-12">
                    <Card.Body>
                        <Card.Title>GitHub</Card.Title>
                        <Card.Text>
                        View my GitHub Page
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                    <Card.Link href="https://github.com/web-development2017" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </motion.div>
    </div>
)

export default AboutContent
