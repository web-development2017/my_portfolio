import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";


export default function About() {
    return (
        <Layout>
          <h1>About Me</h1>
          <p>Hi, my name's Richard, and I'm a self-taught web developer seeking a career change and to find my first job in web development.</p>
          <p>I have decided to pursue a career in web development because I appreciate the enriching benefits technology can achieve for business and personal use, and the increasing growth of the digital sector.</p>
          <p>I'm currently looking for an opportunity to work with a company that will support me in my initial role and guide me towards a suitable future career.</p>
          <p>Please feel free to visit my <Link to="/contact">contact</Link> section to contact me.</p>

          <h2>Languages that I have used the most:</h2>
          <p>HTML, CSS, JavaScript, mySQL.</p>
          <h2>Technologies that I have used the most:</h2>
          <p>Bootstrap, Node, Electron, GitHub, Git, Firebase.</p>
          <h2>Other languages I've used but not as proficient with:</h2>
          <p>PHP, Python, Dart, C#, C++.</p>
          <h2>Other technologies I've used but not as proficient with:</h2>
          <p>React, Gatsby, Laravel, Unity, Azure.</p>
          <h2>Languages and technologies interested in learning more:</h2>
          <p>Rust, Deno, Containers, AWS, Internet Of Things.</p>
        </Layout>
    );
}