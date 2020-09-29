import React from "react";
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';

const Home = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            slug
            githuburl
            projecturl
            description
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);
  const projects = data.allProjectsJson.edges;

  return (
    <Layout>
      <h1 className="mb-5">Portfolio</h1>
      <div className="row home">
        {projects.map(({ node: project }) => {
          const title = project.title;
          const description = project.description;
          const slug = project.slug;
          const githuburl = project.githuburl;
          const projecturl = project.projecturl;
          const imageData = project.image.childImageSharp.fluid;
          const key = project.id;

          return (
            <ProjectPreview
              key={key}
              title={title}
              description={description}
              slug={slug}
              githuburl={githuburl}
              projecturl={projecturl}
              imageData={imageData}
            />
          );
        })}
      </div>      
    </Layout>
  );
};

export default Home;