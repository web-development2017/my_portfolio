import React from "react";
import Header from "./header";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import './layout.css'

const Layout = ({ children }) => (
    <React.Fragment>
        <Header />
        <main>
            <Container fluid className="custom">
                {children}
            </Container>    
            
        </main>
    </React.Fragment>
)

export default Layout;