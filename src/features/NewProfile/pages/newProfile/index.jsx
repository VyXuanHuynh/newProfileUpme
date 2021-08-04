/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import PropTypes from 'prop-types';

newProfile.propTypes = {
    
};

function newProfile(props) {
    return (
        <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content />
                <style dangerouslySetInnerHTML={{ __html: "\n        .bd-placeholder-img {\n            font-size: 1.125rem;\n            text-anchor: middle;\n            -webkit-user-select: none;\n            -moz-user-select: none;\n            user-select: none;\n        }\n        \n        @media (min-width: 768px) {\n            .bd-placeholder-img-lg {\n                font-size: 3.5rem;\n            }\n        }\n    " }} />
                <title>Upme Playground</title>
                <link rel="canonical" href="https://getbootstrap.com/docs/5.0/examples/sticky-footer-navbar/" />
                {/* Bootstrap core CSS */}
                <link href="assets/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossOrigin="anonymous" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                {/*Style CSS*/}
                <link rel="stylesheet" type="text/css" href="style.css" />
                {/* Custom styles for this template */}
                <link href="sticky-footer-navbar.css" rel="stylesheet" />
                <header>
                    {/* Fixed navbar */}
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" >Fixed navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="new-profile.html">New Profile</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </header>
                {/* Begin page content */}
                <main className="flex-shrink-0">
                    <div className="container">
                        <div className="alert alert-primary" role="alert">
                            Let's create new profile for Playground, and data here will be reset anytime
                        </div>
                        <div className="row">
                            <div className="accordition mt-5" id="accordionGenInfo">
                                <div className="card">
                                    <div className="card-header" id="headingOne">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapseOne">
                                                <h2 className="header-left header-margins">General Information<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionGenInfo">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* row */}
                                                <hr />
                                                <p className="lead">
                                                    Personal Information
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">First Name</span>
                                                            <input type="text" id="firstName" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Last Name</span>
                                                            <input type="text" id="lastName" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Email</span>
                                                            <input type="text" id="email" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Location</span>
                                                            <input type="text" id="location" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text">Introduction</span>
                                                            <textarea className="form-control" id="introduction" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <hr />
                                                <p className="lead">
                                                    Education
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <select className="form-select" aria-label="Default select example" id="degree">
                                                                <option selected>Select your education</option>
                                                                <option value="bachelor">Bachelor</option>
                                                                <option value="diploma">Diploma</option>
                                                                <option value="certification">Certification</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Institution</span>
                                                            <input type="text" id="institution" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Major</span>
                                                            <input type="text" id="major" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <hr />
                                                <p className="lead">
                                                    Your Employment Timeline
                                                </p>
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <select className="form-select" aria-label="Default select example" id="employmentType">
                                                                <option selected>Select your contract</option>
                                                                <option value="fulltime">Full time</option>
                                                                <option value="parttime">Part time</option>
                                                                <option value="freelancer">Freelancer</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Company</span>
                                                            <input type="text" id="company" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Location</span>
                                                            <input type="text" id="companyLocation" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Start Date</span>
                                                            <input type="text" id="startDate" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">End Date</span>
                                                            <input type="text" id="endDate" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">Position</span>
                                                            <input type="text" id="position" className="form-control" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text">Company Overview</span>
                                                            <textarea className="form-control" id="companyOverview" defaultValue={""} />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* row */}
                                                <div className="row">
                                                    <div className="col-lg">
                                                        <div className="input-group lg-3">
                                                            <button className="btn btn-primary btn-lg" onclick="addProfile()">Add</button>
                                                            <span style={{ marginLeft: '30px', display: 'none' }} className="alert alert-success" role="alert" id="response-message-box">
                                                                Added new user successfully !!!
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Add Collasape*/}
                    <div className="container">
                        {/*Personal Information */}
                        <div className="row">
                            <div className="accordition mt-5" id="accordionPersonalInfo">
                                <div className="card">
                                    <div className="card-header" id="headingPersonalInfo">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapsePersonalInfo" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapsePersonalInfo">
                                                <h2 className="header-left header-margins">Personal Information<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapsePersonalInfo" className="collapse" aria-labelledby="headingPersonalInfo" data-parent="#accordionPersonalInfo">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* Full Name */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">First name</span>
                                                            <input type="text" className="form-control" id="firstName" aria-label="Username" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">Last name</span>
                                                            <input type="text" className="form-control" id="lastName" aria-label="Username" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                {/* Picture Profile */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <div className="input-group mb-3">
                                                                <div className="input-group-prepend">
                                                                    <span className="input-group-text">Profile Picture</span>
                                                                </div>
                                                                <div className="custom-file">
                                                                    <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">Nickname</span>
                                                            <input type="text" className="form-control" id="lastName" aria-label="Username" aria-describedby="basic-addon1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Gender - Date of Birth - Marriage Status - */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">Gender</span>
                                                            <div>
                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                    <option>Male</option>
                                                                    <option>Female</option>
                                                                    <option>Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">Date of Birth</span>
                                                            <input type="date" id="birthday" name="birthday" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md">
                                                        <div className="input-group">
                                                            <span className="input-group-text" id="basic-addon1">Marriage Status</span>
                                                            <div>
                                                                <select className="form-control" id="exampleFormControlSelect1">
                                                                    <option>Single</option>
                                                                    <option>Married</option>
                                                                    <option>Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Address */}
                                                <br />
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Contact Information</span>
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputEmail4">Email*</label>
                                                                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputphoneNumber4">Phone Number*</label>
                                                                                <input type="phoneNumber" className="form-control" id="inputphoneNumber4" placeholder="phoneNumber" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress">Line 1</label>
                                                                            <input type="text" className="form-control" id="inputAddress" placeholder="Address 1" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAddress2">Line 2</label>
                                                                            <input type="text" className="form-control" id="inputAddress2" placeholder="Address 2" />
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputCity">City</label>
                                                                                <select id="inputCity" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputState">Country</label>
                                                                                <select id="inputState" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group col-md-2">
                                                                                <label htmlFor="inputPostcode">Postcode</label>
                                                                                <input type="text" className="form-control" id="inputPostcode" />
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Language  - */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Language</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="input-group">
                                                                <span className="input-group-text" id="basic-addon1">Language</span>
                                                                <input type="text" className="form-control" id="lastName" aria-label="Username" aria-describedby="basic-addon1" />
                                                            </div>
                                                            <div className="input-group">
                                                                <span className="input-group-text" id="basic-addon1">Fluency</span>
                                                                <div>
                                                                    <select className="form-control" id="exampleFormControlSelect1">
                                                                        <option>Beginer</option>
                                                                        <option>Intermediate</option>
                                                                        <option>Fluently</option>
                                                                        <option>Native</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <button type="add" className="btn btn-primary">Add more Language</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                {/* Education  - */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Education</span>
                                                        <div className="input-group">
                                                            <div className="input-group">
                                                                <div className="row lr-grid input-grid">
                                                                    <div className="col-sm-12 meta-template">
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-4">
                                                                                <label>Degree</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <input className="text-box single-line" data-val="true" data-val-length="The field Degree must be a string with a maximum length of 50." data-val-length-max={50} maxLength={50} type="text" />
                                                                                <span className="field-validation-valid" data-valmsg-replace="true" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-4">
                                                                                <label>Insitution</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <input className="text-box single-line" data-val="true" data-val-length="The field Institution must be a string with a maximum length of 100." data-val-length-max={100} maxLength={100} type="text" />
                                                                                <span className=" field-validation-valid " data-valmsg-replace=" true " />
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-4 ">
                                                                                <label htmlFor=" PaaAine ">Major</label>
                                                                            </div>
                                                                            <div className=" col-xs-10 col-sm-7 ">
                                                                                <input className=" text-box single-line " data-val=" true " data-val-length="The field Major must be a string with a maximum length of 100. " data-val-length-max={100} maxLength={100
                                                                                } type=" text " />
                                                                                <span className=" field-validation-valid " data-valmsg-replace=" true " />
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-4 ">
                                                                                <label>Graduation year</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7 ">
                                                                                <select id="inputYearOfGraduation" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row ">
                                                                            <div className="col-xs-12 col-sm-4 ">
                                                                                <label>Highest level?</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7 ">
                                                                                <div className="custom-control custom-checkbox ">
                                                                                    <input type="checkbox " className="custom-control-input " id="customCheck1 " />
                                                                                    <label className="custom-control-label " htmlFor="customCheck1 ">Check if this
                                                                                        is your highest education level</label>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row ">
                                                                            <div className="col-xs-12 col-sm-4 col-sm-offset-4 ">
                                                                                <div className="custom-theme-button button button-left button-delete " data-bind="click: function() { } " style={{ display: 'none' }}><i className="glyphicon glyphicon-remove " /> Delete</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="separator2 " />
                                                                    <div className="col-x2-12 ">
                                                                        <button type="add " className="btn btn-primary ">Add</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <br />
                                                {/* Other Information  - */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Other Information</span>
                                                        <div className="input-group">
                                                            <div className="input-group">
                                                                <div className="row lr-grid input-grid">
                                                                    <div className="col-sm-12 meta-template">
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-4">
                                                                                <label>Hobby</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <input className="text-box single-line" data-val="true" data-val-length="The field Degree must be a string with a maximum length of 50." data-val-length-max={50} maxLength={50} type="text" />
                                                                                <span className="field-validation-valid" data-valmsg-replace="true" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-4">
                                                                                <label>Personal Statement</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <input className="text-box single-line" data-val="true" data-val-length="The field Institution must be a string with a maximum length of 100." data-val-length-max={100} maxLength={100} type="text" />
                                                                                <span className=" field-validation-valid " data-valmsg-replace=" true " />
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-4 ">
                                                                                <label htmlFor=" PaaAine ">Favourite Quote</label>
                                                                            </div>
                                                                            <div className=" col-xs-10 col-sm-7 ">
                                                                                <input className=" text-box single-line " data-val=" true " data-val-length="The field Major must be a string with a maximum length of 100. " data-val-length-max={100} maxLength={100
                                                                                } type=" text " />
                                                                                <span className=" field-validation-valid " data-valmsg-replace=" true " />
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-4 ">
                                                                                <label>Social Media/label</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7 ">
                                                                                <div className="input-group">
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text" id="basic-addon1">Name</span>
                                                                                        <input type="text" className="form-control" id="lastName" aria-label="Username" aria-describedby="basic-addon1" />
                                                                                    </div>
                                                                                    <div className="input-group">
                                                                                        <span className="input-group-text" id="basic-addon1">Link</span>
                                                                                        <input type="text" className="form-control" id="lastName" aria-label="Username" aria-describedby="basic-addon1" />
                                                                                    </div>
                                                                                    <button type="add" className="btn btn-primary">Add</button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row ">
                                                                            <div className="col-xs-12 col-sm-4 col-sm-offset-4 ">
                                                                                <div className="custom-theme-button button button-left button-delete " data-bind="click: function() { } " style={{ display: 'none' }}><i className="glyphicon glyphicon-remove " /> Delete</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="separator2 " />
                                                                    <div className="col-x2-12 ">
                                                                        <button type="add " className="btn btn-primary ">Add</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*GHSInformation */}
                        <div className="row">
                            <div className="accordition mt-5" id="accordionGHSInfo">
                                <div className="card">
                                    <div className="card-header" id="headingGHSInfo">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseGHSInfo" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapseGHSInfo">
                                                <h2 className="header-left header-margins">GHS Information<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapseGHSInfo" className="collapse" aria-labelledby="headingGHSInfo" data-parent="#accordionGHSInfo">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* Role */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Role</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputJobTitle4">Job Title</label>
                                                                                <input type="JobTitle" className="form-control" id="inputJobTitle4" placeholder="Job Title" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputLevel4">Level</label>
                                                                                <input type="level" className="form-control" id="inputLevelr4" placeholder="level" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputCompanyEmail">Company Email</label>
                                                                            <input type="text" className="form-control" id="inputCompanyEmail" placeholder="Company Email" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputJoinDate2">Join Date</label>
                                                                            <input type="date" className="form-control" id="inputJoinDate2" placeholder="Join Date" />
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputJobStatus">Status</label>
                                                                                <select id="inputJobStatus" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>Active</option>
                                                                                    <option>InActive</option>
                                                                                    <option>Interviewing</option>
                                                                                    <option>etc</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputDepartment">Department</label>
                                                                                <select id="inputDepartment" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputConstractType">Contract Type</label>
                                                                                <select id="inputConstractType" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>Full-time</option>
                                                                                    <option>Part-time</option>
                                                                                    <option>Freelance</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="form-group col-md-2">
                                                                                <label htmlFor="inputContractDuration">Constract Duration</label>
                                                                                <input type="date" className="form-control" id="inputPostcode" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-4">
                                                                                <label htmlFor="inputWorkingLocation">Working Location</label>
                                                                                <select id="inputWorkingLocation" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>FHCM-Serepok</option>
                                                                                    <option>Remote</option>
                                                                                </select>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Team - */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Team</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="input-group">
                                                                <div className="row lr-grid input-grid">
                                                                    <div className="col-sm-12 meta-template">
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-7">
                                                                                <label htmlFor="inputCurrentProject">Current Project</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <select id="inputCurrentProject" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                    <option>.../option&gt;
                                                                                    </option></select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row">
                                                                            <div className="col-xs-12 col-sm-7">
                                                                                <label htmlFor="inputReportTo">Report To</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7">
                                                                                <select id="inputReportTo" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                    <option>.../option&gt;
                                                                                    </option></select>
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-7 ">
                                                                                <label htmlFor="teammates">Teammates</label>
                                                                            </div>
                                                                            <div className=" col-xs-10 col-sm-7 ">
                                                                                <input type="text" id="teammates" name="teammates" defaultValue="teamates" readOnly /><br /><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Employment TimeLine */}
                        <div className="row">
                            <div className="accordition mt-5" id="accordionEmplTimeLine">
                                <div className="card">
                                    <div className="card-header" id="headingaccordionEmplTimeLine">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseaccordionEmplTimeLine" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapseaccordionEmplTimeLine">
                                                <h2 className="header-left header-margins">Employment TimeLine<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapseaccordionEmplTimeLine" className="collapse" aria-labelledby="headingaccordionEmplTimeLine" data-parent="#accordionaccordionEmplTimeLine">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* Job History */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Job History</span>
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputJobPosition4">Job Position</label>
                                                                                <input type="JobPosition" className="form-control" id="inputJobPosition4" placeholder="Job Position" />
                                                                            </div>
                                                                            <br />
                                                                            <div className="form-group">
                                                                                <label htmlFor="inputJobStartDate">From</label>
                                                                                <input type="date" className="form-control" id="inputJobStartDate" placeholder="From Date" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="inputJobEndDate">To</label>
                                                                                <input type="date" className="form-control" id="inputJobEndDate" placeholder="To Date" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputCompany">Company</label>
                                                                            <input type="text" className="form-control" id="inputCompany" placeholder="Company Name" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputComapnyLocation">Location</label>
                                                                            <select id="inputJobStatus" className="form-control">
                                                                                <option selected>Choose...</option>
                                                                                <option>...</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputRoleTitle">Role/Title</label>
                                                                            <input type="text" className="form-control" id="inputRoleTitle" placeholder="Roles & Title" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputREmploymentType">Employment Type</label>
                                                                            <select id=" inputREmploymentType " className="form-control ">
                                                                                <option selected>Choose...</option>
                                                                                <option>...</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <div className="row ">
                                                                                <div className="col-xs-12 col-sm-4 ">
                                                                                    <label>Current?</label>
                                                                                </div>
                                                                                <div className="col-xs-10 col-sm-7 ">
                                                                                    <div className="custom-control custom-checkbox ">
                                                                                        <input type="checkbox " className="custom-control-input " id="customCheck1 " />
                                                                                        <label className="custom-control-label " htmlFor="customCheck1 ">Check if this
                                                                                            is your current position</label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Team - */}
                                                <div className="row ">
                                                    <div className="col-md ">
                                                        <span className="input-group-text " id="basic-addon1 ">Team</span>
                                                        <br />
                                                        <div className="input-group ">
                                                            <div className="input-group ">
                                                                <div className="row lr-grid input-grid ">
                                                                    <div className="col-sm-12 meta-template ">
                                                                        <div className="row ">
                                                                            <div className="col-xs-12 col-sm-7 ">
                                                                                <label htmlFor="inputCurrentProject ">Current Project</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7 ">
                                                                                <select id="inputCurrentProject " className="form-control ">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                    <option>.../option&gt;
                                                                                    </option></select>
                                                                            </div>
                                                                        </div>
                                                                        <div className="row ">
                                                                            <div className="col-xs-12 col-sm-7 ">
                                                                                <label htmlFor="inputReportTo ">Report To</label>
                                                                            </div>
                                                                            <div className="col-xs-10 col-sm-7 ">
                                                                                <select id="inputReportTo " className="form-control ">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>...</option>
                                                                                    <option>.../option&gt;
                                                                                    </option></select>
                                                                            </div>
                                                                        </div>
                                                                        <div className=" row ">
                                                                            <div className=" col-xs-12 col-sm-7 ">
                                                                                <label htmlFor="teammates ">Teammates</label>
                                                                            </div>
                                                                            <div className=" col-xs-10 col-sm-7 ">
                                                                                <input type="text " id="teammates " name="teammates " defaultValue="teamates " readOnly /><br /><br />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Technical Skills*/}
                        <div className="row">
                            <div className="accordition mt-5" id="accordionTechSkills">
                                <div className="card">
                                    <div className="card-header" id="headingTechSkills">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseTechSkills" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapseTechSkills">
                                                <h2 className="header-left header-margins">Technical Experience/Skills<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapseTechSkills" className="collapse" aria-labelledby="headingTechSkills" data-parent="#accordionTechSkills">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* Working History */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Working History</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputProject4">Project</label>
                                                                                <input type="Project" className="form-control" id="inputProject4" placeholder="Project" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputProjectName4">Name</label>
                                                                                <input type="ProjectName" className="form-control" id="inputProjectName4" placeholder="Name Project" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputBusinessDomain">Business Domain</label>
                                                                                <select id="inputBusinessDomain" className="form-control">
                                                                                    <option selected>Choose...</option>
                                                                                    <option>Finance</option>
                                                                                    <option>Healthcare</option>
                                                                                    <option>...etc</option>
                                                                                </select>
                                                                            </div>
                                                                            <div className="row">
                                                                                <div className="form-group col-md-6">
                                                                                    <label htmlFor="inputProjectStartDate">From</label>
                                                                                    <input type="date" className="form-control" id="inputProjectStartDate" placeholder="From Date" />
                                                                                </div>
                                                                                <div className="form-group col-md-6">
                                                                                    <label htmlFor="inputProjectEndDate">To</label>
                                                                                    <input type="date" className="form-control" id="inputProjectEndDate" placeholder="To Date" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="inputRole">Role/Tile</label>
                                                                                <input type="text" className="form-control" id="inputRole" placeholder="Role/Title" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="inputSkills">Skills Most Used</label>
                                                                                <input type="text" className="form-control" id="inputSkills" placeholder="Skills" />
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Course/Certificate */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Course/Certificate</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputCourse4">Course/Certificate</label>
                                                                                <input type="Couse" className="form-control" id="inputCourse4" placeholder="Course and Certificate" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputCourseName4">Name</label>
                                                                                <input type="CourseName" className="form-control" id="inputCourseName4" placeholder="Name Course/Certificate" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputCourseStartDate">From</label>
                                                                                <input type="date" className="form-control" id="inputCourseStartDate" placeholder="From Date" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputCourseEndDate">To</label>
                                                                                <input type="date" className="form-control" id="inputCourseEndDate" placeholder="To Date" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputAchivement">Achivement</label>
                                                                            <input type="text" className="form-control" id="inputAchivement" placeholder="Achivement" />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputLink">Link</label>
                                                                            <input type="url" className="form-control" id="inputSinputLinkkills" placeholder="Link" />
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Skill Ranking */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Skill Ranking</span>
                                                        <br />
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputSkill4">Skill</label>
                                                                                <input type="Skill" className="form-control" id="inputSkill4" placeholder="Skill" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputSkillName4">Name</label>
                                                                                <input type="CourseName" className="form-control" id="inputSkillName4" placeholder="Skill Name" />
                                                                            </div>
                                                                        </div>
                                                                        <div className="form-group ">
                                                                            <label htmlFor="inputSkillRanking">Ranking</label>
                                                                            <select id="inputSkillRanking" className="form-control">
                                                                                <option selected>0-Not Applicane</option>
                                                                                <option>1-Beginer</option>
                                                                                <option>2-Basic</option>
                                                                                <option>3-Intermediate</option>
                                                                                <option>4-Advance</option>
                                                                                <option>5-Expert</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputLastYearUsed">Last Year Used</label>
                                                                            {/*Need to change to type year, using JS*/}
                                                                            <select id="inputSkinputLastYearUsedillRanking" className="form-control">
                                                                                <option selected>Year1</option>
                                                                                <option>Year2</option>
                                                                                <option>Year3</option>
                                                                                <option>Year4</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="inputExperienceMonth">Experience (month)</label>
                                                                            <input type="number" className="form-control" id="inputExperienceMonth" placeholder="Number of experience months" />
                                                                        </div>
                                                                    </form></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*Training Development */}
                        <div className="row">
                            <div className="accordition mt-5" id="accordionTrainDev">
                                <div className="card">
                                    <div className="card-header" id="headingTrainDev">
                                        <h2 className="clearfix mb-0">
                                            <a className="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseTrainDev" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" aria-expanded="true" aria-controls="collapseTrainDev">
                                                <h2 className="header-left header-margins">Training Development<i className="fa fa-angle-down" /></h2>
                                            </a>
                                        </h2>
                                    </div>
                                    <div id="collapseTrainDev" className="collapse" aria-labelledby="headingTrainDev" data-parent="#accordionTrainDev">
                                        <div className="card-body">
                                            <div className="container">
                                                {/* Training and Development */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">Training and Development</span>
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputMentor4">Mentor</label>
                                                                                <input type="Mentor" className="form-control" id="inputMentor4" placeholder="Project" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputPBuddy4">Buddy</label>
                                                                                <input type="Buddy" className="form-control" id="inputBuddy4" placeholder="Name Buddy" />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <span className="input-group-text" id="basic-addon1">Upcoming Tasks</span>
                                                                                <label htmlFor="inputUpcomingTaskName">Name</label>
                                                                                <input type="text" className="form-control" id="inputUpcomingTaskName" placeholder="Task name" />
                                                                                <label htmlFor="inputDescription">Description</label>
                                                                                <input type="text" className="form-control" id="inputDescription" placeholder="Description" />
                                                                                <div className="form-group ">
                                                                                    <label htmlFor="inputDueDate">Due Date</label>
                                                                                    <input type="date" className="form-control" id="inputDueDate" placeholder="Due Date" />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                            {/*Files*/}
                                            <div className="container">
                                                <a data-toggle="collapse" className="expander-header text-decoration-none" href="#e1274af5-719f-4f8f-8ffe-bfa0400d5bb9" data-parent="#accordionOleOpi">
                                                    <div className="header">
                                                        <h2 className="header-left header-margins">
                                                            Files
                                                        </h2>
                                                    </div>
                                                </a>
                                                {/* Files */}
                                                <div className="row">
                                                    <div className="col-md">
                                                        <span className="input-group-text" id="basic-addon1">File</span>
                                                        <div className="input-group">
                                                            <div className="col-md">
                                                                <div className="input-group">
                                                                </div>
                                                                <div>
                                                                    <form>
                                                                        <div className="form-row">
                                                                            <div className="input-group mb-3">
                                                                                <div className="input-group-prepend">
                                                                                    <span className="input-group-text">Upload</span>
                                                                                </div>
                                                                                <div className="custom-file">
                                                                                    <input type="file" className="custom-file-input" id="inputGroupFile01" />
                                                                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputFileName4">File Name</label>
                                                                                <input type="FileName" className="form-control" id="inputFileName4" placeholder="File Name" />
                                                                            </div>
                                                                            <div className="form-group col-md-6">
                                                                                <label htmlFor="inputLastEdit">LastEdit</label>
                                                                                <input type="date" className="form-control" id="inputLastEdit" placeholder="Last Edit" readOnly />
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label htmlFor="inputComment">Comment</label>
                                                                                <input type="text" className="form-control" id="inputComment" placeholder="Comment" />
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*div for container*/}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div></main>
                <footer className="footer mt-auto py-3 bg-light">
                    <div className="container">
                        <span className="text-muted">Place sticky footer content here.</span>
                    </div>
                </footer>
            </div>
    );
}

export default newProfile;