import React from "react";

import AboutContent from "../components/about-content";
import Head from "../components/head";
import Layout from "../components/layout";


export default function About() {
  return (
    <Layout>
      <Head title="About" />
      <AboutContent />    
    </Layout>
  );
}