import React from "react";
import GitHubCloneContent from "../components/GitHubClone/githubclone-content";
import Head from "../components/head";

export default function GitHubClone () {
    
    return (
        
        <>
            <Head 
                title="GitHub Clone"
                // script={[
                //     {"src": "https://code.jquery.com/jquery-3.5.1.slim.min.js", "type": "text/javascript"},
                //     {"src": "https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/js/bootstrap.min.js", "type": "text/javascript", "defer": "true"},
                // ]}
                // script="'src': 'https://code.jquery.com/jquery-3.5.1.slim.min.js', 'type': 'text/javascript'"
            />
            <GitHubCloneContent />
        </>
    );
}