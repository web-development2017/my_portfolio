import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./css/gcc-main.css";

const GccMain = () => (
    <main className="gcc-main">
        <div className="jumbotron-codelines py-5">
            <div className="needAname px-3 ml-auto mr-auto">
                <div className="container d-flex flex-wrap align-items-center px-0">
                    <div className="col-md-6 col-sm-12 px-0 px-md-4 text-center text-md-left">
                        <h1 className="text-white mb-3">Built for developers</h1>
                        <p className="mb-4">GitHub is a development platform inspired by the way you work. From open source to business, you can host and review code, manage projects, and build software alongside 50 million developers.</p>
                    </div>
                    
                    <div className="d-none d-sm-block col-sm-8 col-md-6 px-4 mx-auto">
                        <div className="rounded-1 p-4 text-gray bg-gray-light">
                            <form className="main-form text-grey-dark">

                                <div className="form-group">
                                    <label className="h5"  htmlFor="exampleUsername">Username</label>
                                    <input type="email" className="form-control" id="exampleUsername" aria-describedby="emailHelp"/>
                                </div>

                                <div className="form-group">
                                    <label className="h5"  htmlFor="exampleInputEmail1">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>

                                <p className="text-grey-dark">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter. Learn more.</p>

                                <button type="submit" className="btn btn-success py-3 px-4 my-3">Sign up for GitHub</button>
                                <p className="form-control-note">By clicking “Sign up for GitHub”, you agree to our Terms of Service and Privacy Statement. We’ll occasionally send you account related emails.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
)

export default GccMain