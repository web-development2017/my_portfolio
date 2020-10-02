import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./githubclone-content.css";
function pd(e){
    e.preventDefault();
    console.log("clicked");
}
function open(e) {
    e.preventDefault();
    console.log('open clicked.');
    let foo = document.getElementById("main_nav");
    foo.classList.add("show");
    // let trigger_id = document.getElementById("burger_icon").getAttribute("data-trigger");
    // trigger_id.classList.toggle("show");
}
function close(e) {
    e.preventDefault();
    console.log('close clicked.');
    let foo = document.getElementById("main_nav");
    foo.classList.remove("show");
    
}
const GitHubCloneContent = () => (
    <header>
        <nav className="navbar navbar-expand-xl" id="nav-custom">
            <a onClick={pd} className="navbar-brand py-0" href="https://github.com/">
                <svg height="32" className="octicon octicon-mark-github text-white" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </a>
            <form className="form-inline my-0 my-sm-0 my-lg-0 d-xl-none ml-auto mr-3">
                <button onClick={function(e){e.preventDefault();}} className="btn btn-outline-custom pt-sm-1 pb-sm-1 pl-sm-2 pr-sm-2 my-0 my-sm-0" type="submit">Sign up</button>
            </form>
            <button onClick={open} className="navbar-toggler pt-sm-0 pb-sm-0" type="button" data-trigger="#main_nav" id="burger_icon">              
                <svg height="24" className="octicon octicon-three-bars text-white" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fillRule="evenodd" d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"></path></svg>
            </button>

            <div className="navbar-collapse" id="main_nav">
                <div className="offcanvas-header">  
                    <button onClick={close} className="btn btn-close">
                        <svg height="24" className="octicon octicon-x text-gray" viewBox="0 0 24 24" version="1.1" width="24" aria-hidden="true"><path fillRule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"></path></svg>
                    </button>
                </div>
                <ul className="navbar-nav mb-4 mb-xl-0 mr-auto">
                    <li className="nav-item dropdown">
                        <a onClick={pd} className="nav-link dropdown-toggle" href="https://github.com/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Why GitHub?
                        </a>

                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a onClick={pd} className="dropdown-header dropdown-item" href="https://github.com/">Features</a>
                            <a onClick={pd} className="dropdown-item" href="https://github.com/">Code review</a>
                            <a onClick={pd} className="dropdown-item" href="https://github.com/">Project management</a>
                            <a onClick={pd} className="dropdown-item" href="https://github.com/">Integrations</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-item">Actions</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-item">Packages</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-item">Security</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-item">Team management</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-item">Hosting</a>
                            <div className="dropdown-divider"></div>
                            <a onClick={pd} href="https://github.com/" className="dropdown-header dropdown-item">Customer stories</a>
                            <a onClick={pd} href="https://github.com/" className="dropdown-header dropdown-item">Security</a>
                        </div>
                    </li>
                </ul>
            </div>{/* navbar-collapse */}
        </nav>        
    </header>    
)

export default GitHubCloneContent;
