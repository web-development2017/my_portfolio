import React from "react";
// import { Link } from "gatsby";
import Image from "gatsby-image";

import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';

const ProjectPreview = ({ title, description, githuburl, projecturl, imageData }) => (
    <div className="col-xs-12 col-lg-6">
      <Card className="mb-5">
        <Image fluid={imageData} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
        </Card.Body>
        <Card.Body>
          {/* <Link className="d-block" to={`/${slug}/`}>GitHub</Link>
          <Link className="d-block" to={`/${slug}/`}>Visit Site</Link>           */}
          <Card.Link href={`${githuburl}`} target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
          <Card.Link href={`${projecturl}`} target="_blank" rel="noopener noreferrer">Visit Site</Card.Link>
        </Card.Body>
      </Card>
    </div>    
  );
  
  export default ProjectPreview;