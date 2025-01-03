import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-dark mb-30">
                <div className="row px-xl-5">
                    <div className="col-lg-3 d-none d-lg-block">
                        <NavLink
                            className="btn d-flex align-items-center justify-content-between bg-primary w-100"
                            data-toggle="collapse"
                            to="#navbar-vertical"
                            style={{ height: 65, padding: "0 30px" }}
                        >
                            <h6 className="text-dark m-0">
                                <i className="fa fa-bars mr-2" />
                                Categories
                            </h6>
                            <i className="fa fa-angle-down text-dark" />
                        </NavLink>
                        <nav
                            className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
                            id="navbar-vertical"
                            style={{ width: "calc(100% - 30px)", zIndex: 999 }}
                        >
                            <div className="navbar-nav w-100">
                                <div className="nav-item dropdown dropright">
                                    <NavLink
                                        to="#"
                                        className="nav-link dropdown-toggle"
                                        data-toggle="dropdown"
                                    >
                                        Dresses <i className="fa fa-angle-right float-right mt-1" />
                                    </NavLink>
                                    <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                                        <NavLink to="" className="dropdown-item">
                                            Men's Dresses
                                        </NavLink>
                                        <NavLink to="" className="dropdown-item">
                                            Women's Dresses
                                        </NavLink>
                                        <NavLink to="" className="dropdown-item">
                                            Baby's Dresses
                                        </NavLink>
                                    </div>
                                </div>
                                <NavLink to="" className="nav-item nav-link">
                                    Shirts
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Jeans
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Swimwear
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Sleepwear
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Sportswear
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Jumpsuits
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Blazers
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Jackets
                                </NavLink>
                                <NavLink to="" className="nav-item nav-link">
                                    Shoes
                                </NavLink>
                            </div>
                        </nav>
                    </div>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
                            <NavLink to="" className="text-decoration-none d-block d-lg-none">
                                <span className="h1 text-uppercase text-dark bg-light px-2">
                                    DIVYA
                                </span>
                                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                                    SHOP
                                </span>
                            </NavLink>
                            <button
                                type="button"
                                className="navbar-toggler"
                                data-toggle="collapse"
                                data-target="#navbarCollapse"
                            >
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div
                                className="collapse navbar-collapse justify-content-between"
                                id="navbarCollapse"
                            >
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link active">
                                        Home
                                    </NavLink>
                                    <NavLink to="shop" className="nav-item nav-link">
                                        Shop
                                    </NavLink>
                                    <NavLink to="shop-details" className="nav-item nav-link">
                                        Shop Detail
                                    </NavLink>
                                    <div className="nav-item dropdown">
                                        <NavLink
                                            to="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Pages <i className="fa fa-angle-down mt-1" />
                                        </NavLink>
                                        <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                                            <NavLink to="shopping-cart" className="dropdown-item">
                                                Shopping Cart
                                            </NavLink>
                                            <NavLink to="checkout" className="dropdown-item">
                                                Checkout
                                            </NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="contact" className="nav-item nav-link">
                                        Contact
                                    </NavLink>
                                </div>
                                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                                    <NavLink to="" className="btn px-0">
                                        <i className="fas fa-heart text-primary" />
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: 2 }}
                                        >
                                            0
                                        </span>
                                    </NavLink>
                                    <NavLink to="" className="btn px-0 ml-3">
                                        <i className="fas fa-shopping-cart text-primary" />
                                        <span
                                            className="badge text-secondary border border-secondary rounded-circle"
                                            style={{ paddingBottom: 2 }}
                                        >
                                            0
                                        </span>
                                    </NavLink>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
