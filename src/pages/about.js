import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';


export default function About() {
  return (
    <Layout>
      <div className="row">
        <div className="col-sm-12 col-lg-8 mb-sm-5 pr-lg-5">
          <h1 className="mb-5">About Me</h1>
          <p>Hi, my name's Richard, and I'm a self-taught web developer seeking a career change and to find my first job in web development.</p>
          <p>I have decided to pursue a career in web development because I appreciate the enriching benefits technology can achieve for business and personal use, and the increasing growth of the digital sector.</p>
          <p>I'm currently looking for an opportunity to work with a company that will support me in my initial role and guide me towards a suitable future career.</p>
          <p className="mb-5">Please feel free to visit my <Link to="/contact">contact</Link> section to contact me.</p>

          <h5 className="mb-2">Languages that I have used the most:</h5>
          <p>HTML, CSS, JavaScript, mySQL.</p>
          <h5 className="mb-2">Technologies that I have used the most:</h5>
          <p>Bootstrap, Node, Electron, GitHub, Git, Firebase.</p>
          <h5 className="mb-2">Other languages I've used but not as proficient with:</h5>
          <p>PHP, Python, Dart, C#, C++.</p>
          <h5 className="mb-2">Other technologies I've used but not as proficient with:</h5>
          <p>React, Gatsby, Laravel, Unity, Azure.</p>
          <h5 className="mb-2">Languages and technologies interested in learning more:</h5>
          <p>Rust, Deno, Containers, AWS, Internet Of Things, GTP-3.</p>
        </div>
        
          <div className="col-sm-12 col-lg-4 text-center mt-5 mt-lg-0">
            <div className="row justify-content-sm-between justify-content-lg-center">
              <Card className="mb-5 col-xs-12 col-sm-6 col-lg-12">
                <Card.Body>
                  <Card.Title>CV</Card.Title>
                  <Card.Text>
                    View my CV
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Link className="d-block" to="/cv">CV</Link>
                  {/* <Card.Link href="/" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                  <Card.Link href="/" target="_blank" rel="noopener noreferrer">Visit Site</Card.Link> */}
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
                  <Card.Link href="https://gb.linkedin.com/" target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
                </Card.Body>
              </Card>
            </div>
        </div>
      </div>
           
    </Layout>
  );
}