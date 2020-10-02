import React from "react";
import { Helmet } from "react-helmet";
import { graphql, useStaticQuery } from 'gatsby';


const Head = ({ title }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }  
        }
    `)
    return (
        <Helmet 
            title={`${data.site.siteMetadata.title} | ${title}`}            
            script={[
                {"src": "https://code.jquery.com/jquery-3.5.1.slim.min.js", "type": "text/javascript"},
                {"src": "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js", "type": "text/javascript", "defer": "true"},
            ]}
        />
    );
}

export default Head;