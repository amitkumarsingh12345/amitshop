import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
                <div className="row px-xl-5 pt-5">
                    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                        <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
                        <p className="mb-4">
                            Get in touch with us for any inquiries, assistance, or collaborations. We're here to help and look forward to hearing from you!
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt text-primary mr-3" />
                            123 Allahpur, Prayagraj, India
                        </p>
                        <p className="mb-2">
                            <i className="fa fa-envelope text-primary mr-3" />
                            amitkumarsingh1482@gmail.com
                        </p>
                        <p className="mb-0">
                            <i className="fa fa-phone-alt text-primary mr-3" />
                            +096 481 48236
                        </p>
                    </div>
                    <div className="col-lg-8 col-md-12">
                        <div className="row">
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Our Shop
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </NavLink>
                                    <NavLink className="text-secondary" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
                                <div className="d-flex flex-column justify-content-start">
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Home
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Our Shop
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shop Detail
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Shopping Cart
                                    </NavLink>
                                    <NavLink className="text-secondary mb-2" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Checkout
                                    </NavLink>
                                    <NavLink className="text-secondary" to="#">
                                        <i className="fa fa-angle-right mr-2" />
                                        Contact Us
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-md-4 mb-5">
                                <h5 className="text-secondary text-uppercase mb-4">Newsletter</h5>
                                <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
                                <form action="">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Your Email Address"
                                        />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary">Sign Up</button>
                                        </div>
                                    </div>
                                </form>
                                <h6 className="text-secondary text-uppercase mt-4 mb-3">
                                    Follow Us
                                </h6>
                                <div className="d-flex">
                                    <NavLink className="btn btn-primary btn-square mr-2" to="https://github.com/amitkumarsingh12345" target='_blank'>
                                        <i className="fab fa-github" />
                                    </NavLink>
                                    <NavLink className="btn btn-primary btn-square mr-2" to="https://indeed.com" target='_blank'>
                                        <i class="fa-brands fa-whatsapp"></i>
                                    </NavLink>
                                    <NavLink className="btn btn-primary btn-square mr-2" to="https://linkedin.com/in/amit-kumar-singh-56551b292" target='_blank'>
                                        <i className="fab fa-linkedin-in" />
                                    </NavLink>
                                    <NavLink className="btn btn-primary btn-square" to="#" target='_blank'>
                                        <i className="fab fa-youtube" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="row border-top mx-xl-5 py-4"
                    style={{ borderColor: "rgba(256, 256, 256, .1) !important" }}
                >
                    <div className="col-md-6 px-xl-0">
                        <p className="mb-md-0 text-center text-md-left text-secondary">
                            ©{" "}
                            <NavLink className="text-primary" to="#">
                                Domain
                            </NavLink>
                            . All Rights Reserved. Designed by
                            <NavLink className="text-primary" to="www.linkedin.com/in/amit-kumar-singh-56551b292" target='_balnk'>
                                Amit Kumar Singh
                            </NavLink>
                        </p>
                    </div>
                    <div className="col-md-6 px-xl-0 text-center text-md-right">
                        <i class="fa-solid fa-location-dot text-white"></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer
