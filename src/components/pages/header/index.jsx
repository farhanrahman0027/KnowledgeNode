import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../../imagepath";

// eslint-disable-next-line react/prop-types
const PageHeader = () => {
  useEffect(() => {
    document.body?.classList?.remove("menu-opened");
    return () => {
      document.body.className = "";
    };
  }, []);

  // change header background on scroll
  const [navbar, setNavbar] = useState(false);
  // Mobile Menu toggle
  const [mobileSubMenu, setMobileSubMenu] = useState(false);
  const [mobileSubMenu2, setMobileSubMenu2] = useState(false);
  const [mobileSubMenu3, setMobileSubMenu3] = useState(false);
  const [mobileSubMenu4, setMobileSubMenu4] = useState(false);
  const [mobileSubMenu42, setMobileSubMenu42] = useState(false);
  const [mobileSubMenu43, setMobileSubMenu43] = useState(false);

  const openMobileMenu = () => {
    document.body?.classList?.add("menu-opened");
  };
  const hideMobileMenu = () => {
    document.body?.classList?.remove("menu-opened");
  };


  const openMobileSubMenu2 = (e) => {
    e.preventDefault();
    setMobileSubMenu2(!mobileSubMenu2);
  };

  const openMobileSubMenu3 = (e) => {
    e.preventDefault();
    setMobileSubMenu3(!mobileSubMenu3);
  };

  const openMobileSubMenu4 = (e) => {
    e.preventDefault();
    setMobileSubMenu4(!mobileSubMenu4);
  };
  const openMobileSubMenu42 = (e) => {
    e.preventDefault();
    setMobileSubMenu42(!mobileSubMenu42);
  };
  const openMobileSubMenu43 = (e) => {
    e.preventDefault();
    setMobileSubMenu43(!mobileSubMenu43);
  };


  const changeHeaderBackground = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeaderBackground);
  return (
    <header className="header" style={{marginBottom:"100px"}}>
      <div className="header-fixed">
        <nav
          className={
            navbar
              ? "navbar navbar-expand-lg header-nav scroll-sticky add-header-bg"
              : "navbar navbar-expand-lg header-nav scroll-sticky"
          }
        >
          <div className="container">
            <div className="navbar-header">
              <Link id="mobile_btn" to="/" onClick={openMobileMenu}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo">
                <img src={logo} className="img-fluid" alt="Logo" />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo">
                  <img src={logo} className="img-fluid" alt="Logo" />
                </Link>
                <Link
                  id="menu_close"
                  className="menu-close"
                  to="/"
                  onClick={hideMobileMenu}
                >
                  <i className="fas fa-times" />
                </Link>
              </div>
              <ul className="main-nav">
                <li className="active">
                  <Link
                    className={mobileSubMenu ? "submenu" : ""}
                    to="/"
                  
                  >
                    Home
                  </Link>
                </li>
                <li className="has-submenu">
                  <Link to="/" onClick={openMobileSubMenu2}>
                    Instructor <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu2 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/instructor-dashboard">Dashboard</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/instructor-list">Instructor</Link>
                    </li>
                    <li>
                      <Link to="/instructor-course">My Course</Link>
                    </li>
                    <li>
                      <Link to="/instructor-reviews">Reviews</Link>
                    </li>
                    <li>
                      <Link to="/instructor-earnings">Earnings</Link>
                    </li>
                    <li>
                      <Link to="/instructor-orders">Orders</Link>
                    </li>
                    <li>
                      <Link to="/instructor-payouts">Payouts</Link>
                    </li>
                    <li>
                      <Link to="/instructor-tickets">Support Ticket</Link>
                    </li>
                    <li>
                      <Link to="/instructor-edit-profile">
                        Instructor Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor-security">Security</Link>
                    </li>
                    <li>
                      <Link to="/instructor-social-profile">
                        Social Profiles
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor-notifications">Notifications</Link>
                    </li>
                    <li>
                      <Link to="/instructor-profile-privacy">
                        Profile Privacy
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor-delete-profile">
                        Delete Profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/instructor-linked-account">
                        Linked Accounts
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/students-list" onClick={openMobileSubMenu3}>
                    Student <i className="fas fa-chevron-down"></i>
                  </Link>
                  <ul
                    className={
                      mobileSubMenu3
                        ? "submenu first-submenu submenuShow"
                        : "submenu first-submenu"
                    }
                  >
                    <li className="has-submenu ">
                      <Link to="/students-list">Student</Link>
                    </li>
                    <li>
                      <Link to="/setting-edit-profile">Student Profile</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-security">Security</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-social-profile">
                        Social profile
                      </Link>
                    </li>
                    <li>
                      <Link to="/setting-student-notification">
                        Notification
                      </Link>
                    </li>
                    <li>
                      <Link to="/setting-student-privacy">Profile Privacy</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-accounts">Link Accounts</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-referral">Referal</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-subscription">
                        Subscription
                      </Link>
                    </li>
                    <li>
                      <Link to="/setting-student-billing">Billing</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-payment">Payment</Link>
                    </li>
                    <li>
                      <Link to="/setting-student-invoice">Invoice</Link>
                    </li>
                    <li>
                      <Link to="/setting-support-tickets">Support Tickets</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/" onClick={openMobileSubMenu4}>
                    Pages <i className="fas fa-chevron-down" />
                  </Link>
                  <ul
                    className={
                      mobileSubMenu4 ? "submenu submenuShow" : "submenu"
                    }
                  >
                    <li>
                      <Link to="/page-notification">Notification</Link>
                    </li>
                    <li>
                      <Link to="/pricing-plan">Pricing Plan</Link>
                    </li>
                    <li>
                      <Link to="/wishlist">Wishlist</Link>
                    </li>
                    <li className="has-submenu">
                      <Link to="/course-list">
                        Course
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu42}
                        />
                      </Link>
                      <ul
                        className={
                          mobileSubMenu42 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/add-course">Add Course</Link>
                        </li>
                        <li>
                          <Link to="/course-list">Course List</Link>
                        </li>
                        <li>
                          <Link to="/course-grid">Course Grid</Link>
                        </li>
                        <li>
                          <Link to="/course-details">Course Details</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="has-submenu">
                      <Link to="#">
                        Error
                        <i
                          className="fas fa-chevron-right listMob"
                          onClick={openMobileSubMenu43}
                        ></i>
                      </Link>
                      <ul
                        className={
                          mobileSubMenu43 ? "submenu submenuShow" : "submenu"
                        }
                      >
                        <li>
                          <Link to="/come-soon">Coming soon</Link>
                        </li>
                        <li>
                          <Link to="/error-404">404</Link>
                        </li>
                        <li>
                          <Link to="/error-500">500</Link>
                        </li>
                        <li>
                          <Link to="/under-construction">
                            Under Construction
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/faq">FAQ</Link>
                    </li>
                    <li>
                      <Link to="/support">Support</Link>
                    </li>
                    <li>
                      <Link to="/job-category">Category</Link>
                    </li>
                    <li>
                      <Link to="/cart">Cart</Link>
                    </li>
                    <li>
                      <Link to="/checkout">Checkout</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/forgot-password">Forgot Password</Link>
                    </li>
                  </ul>
                </li>
                <li className="has-submenu">
                  <Link to="/blog-list">Blog</Link>
                </li>
                <li className="login-link">
                  <Link to="/login">Login / Signup</Link>
                </li>
              </ul>
            </div>
            <ul className="nav header-navbar-rht">
              <li className="nav-item">
                <Link className="nav-link header-sign" to="/login">
                  Signin
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-login" to="/register">
                  Signup
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default PageHeader;
