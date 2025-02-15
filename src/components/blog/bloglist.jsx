import React from "react";
import { Link } from "react-router-dom";
import Footer from "../footer";
// import Header from "../header";
import { Blog1, Blog2, Blog3, Blog5, Blog6, Blog7, Icon22, Icon23, User, User1, User3 } from "../imagepath";
import Header from '../header/index';

const BlogList = () => {
  return (
    <>
      <div className="main-wrapper">
      <Header  />
        <div className="breadcrumb-bar" style={{paddingTop:'130px'}}>
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-12">
                <div className="breadcrumb-list">
                  <nav aria-label="breadcrumb" className="page-breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                         <Link  to="/">Home </Link> 
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Pages
                      </li>
                      <li className="breadcrumb-item" aria-current="page">
                        Blog List
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="course-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-12">
              {/* Blog Post */}
              <div className="blog">
                <div className="blog-image">
                   <Link  to="/blog-details">
                    <img
                      className="img-fluid"
                      src={Blog5}
                      alt="Post Image"
                    />
                   </Link> 
                </div>
                <div className="blog-info clearfix">
                  <div className="post-left">
                    <ul>
                      <li>
                        <div className="post-author">
                           <Link  to="/instructor-profile">
                            <img
                              src={User}
                              alt="Post Author"
                            /> 
                            <span>Ruby Perrin</span>
                           </Link> 
                        </div>
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon22}
                          alt=""
                        />
                        April 20, 2022
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon23}
                          alt=""
                        />
                        Programming, Web Design
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="blog-title">
                   <Link  to="/blog-details">
                    Learn Webs Applications Development from Experts
                   </Link> 
                </h3>
                <div className="blog-content blog-read">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede […]
                  </p>
                  <Link
                     to="/blog-details"
                    className="read-more btn btn-primary"
                  >
                    Read More
                   </Link> 
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="blog">
                <div className="blog-image">
                   <Link  to="/blog-details">
                    <img
                      className="img-fluid"
                      src={Blog6}
                      alt="Post Image"
                    />
                   </Link> 
                </div>
                <div className="blog-info clearfix">
                  <div className="post-left">
                    <ul>
                      <li>
                        <div className="post-author">
                           <Link  to="/instructor-profile">
                            <img
                              src={User1}
                              alt="Post Author"
                            /> 
                            <span>Jenis R.</span>
                           </Link> 
                        </div>
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon22}
                          alt=""
                        />
                        May 20, 2021
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon23}
                          alt=""
                        />
                        Programming, Courses
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="blog-title">
                   <Link  to="/blog-details">
                    Expand Your Career Opportunities With Python
                   </Link> 
                </h3>
                <div className="blog-content blog-read">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede […]
                  </p>
                  <Link
                     to="/blog-details"
                    className="read-more btn btn-primary"
                  >
                    Read More
                   </Link> 
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog Post */}
              <div className="blog">
                <div className="blog-image">
                   <Link  to="/blog-details">
                    <img
                      className="img-fluid"
                      src={Blog7}
                      alt="Post Image"
                    />
                   </Link> 
                </div>
                <div className="blog-info clearfix">
                  <div className="post-left">
                    <ul>
                      <li>
                        <div className="post-author">
                           <Link  to="/instructor-profile">
                            <img
                              src={User3}
                              alt="Post Author"
                            /> 
                            <span>Rolands R</span>
                           </Link> 
                        </div>
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon22}
                          alt=""
                        />
                        Jun 14, 2022
                      </li>
                      <li>
                        <img
                          className="img-fluid"
                          src={Icon23}
                          alt=""
                        />
                        Programming, Web Design
                      </li>
                    </ul>
                  </div>
                </div>
                <h3 className="blog-title">
                   <Link  to="/blog-details">
                    Complete PHP Programming Career Guideline
                   </Link> 
                </h3>
                <div className="blog-content blog-read">
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In
                    nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed
                    pretium, ligula sollicitudin laoreet viverra, tortor libero
                    sodales leo, eget blandit nunc tortor eu nibh. Nullam
                    mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et
                    vulputate volutpat, eros pede […]
                  </p>
                  <Link
                     to="/blog-details"
                    className="read-more btn btn-primary"
                  >
                    Read More
                   </Link> 
                </div>
              </div>
              {/* /Blog Post */}
              {/* Blog pagination */}
              <div className="row">
                <div className="col-md-12">
                  <ul className="pagination lms-page">
                    <li className="page-item prev">
                      <Link
                        className="page-link"
                         to="#"
                       
                      >
                        <i className="fas fa-angle-left" />
                       </Link> 
                    </li>
                    <li className="page-item first-page active">
                       <Link className="page-link"  to="#">
                        1
                       </Link> 
                    </li>
                    <li className="page-item">
                       <Link className="page-link"  to="#">
                        2
                       </Link> 
                    </li>
                    <li className="page-item">
                       <Link className="page-link"  to="#">
                        3
                       </Link> 
                    </li>
                    <li className="page-item">
                       <Link className="page-link"  to="#">
                        4
                       </Link> 
                    </li>
                    <li className="page-item">
                       <Link className="page-link"  to="#">
                        5
                       </Link> 
                    </li>
                    <li className="page-item next">
                       <Link className="page-link"  to="#">
                        <i className="fas fa-angle-right" />
                       </Link> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Blog pagination */}
            </div>
            {/* Blog Sidebar */}
            <div className="col-lg-3 col-md-12 sidebar-right theiaStickySidebar">
            <div className="stickysidebar">
              {/* Search */}
              <div className="card search-widget blog-search blog-widget">
                <div className="card-body">
                  <form className="search-form">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                      />
                      <button type="submit" className="btn btn-primary">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /Search */}
              {/* Latest Posts */}
              <div className="card post-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Recent Posts</h4>
                </div>
                <div className="card-body">
                  <ul className="latest-posts">
                    <li>
                      <div className="post-thumb">
                         <Link  to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog1}
                            alt=""
                          />
                         </Link> 
                      </div>
                      <div className="post-info">
                        <h4>
                           <Link  to="/blog-details">
                            Learn Webs Applications Development from Experts
                           </Link> 
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src={Icon22}
                            alt=""
                          />
                          Jun 14, 2022
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                         <Link  to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog2}
                            alt=""
                          />
                         </Link> 
                      </div>
                      <div className="post-info">
                        <h4>
                           <Link  to="/blog-details">
                            Expand Your Career Opportunities With Python
                           </Link> 
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src={Icon22}
                            alt=""
                          /> 
                          3 Dec 2019
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="post-thumb">
                         <Link  to="/blog-details">
                          <img
                            className="img-fluid"
                            src={Blog3}
                            alt=""
                          />
                         </Link> 
                      </div>
                      <div className="post-info">
                        <h4>
                           <Link  to="/blog-details">
                            Complete PHP Programming Career Guideline
                           </Link> 
                        </h4>
                        <p>
                          <img
                            className="img-fluid"
                            src={Icon22}
                            alt=""
                          /> 
                          3 Dec 2019
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Latest Posts */}
              {/* Categories */}
              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Categories</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Business
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Courses 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Education 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Graphics Design 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Programming 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> Web Design 
                       </Link> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Categories */}
              {/* Archives Categories */}
              <div className="card category-widget blog-widget">
                <div className="card-header">
                  <h4 className="card-title">Archives</h4>
                </div>
                <div className="card-body">
                  <ul className="categories">
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> January 2022 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> February 2022 
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#">
                        <i className="fas fa-angle-right" /> April 2022 
                       </Link> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Archives Categories */}
              {/* Tags */}
              <div className="card tags-widget blog-widget tags-card">
                <div className="card-header">
                  <h4 className="card-title">Latest Tags</h4>
                </div>
                <div className="card-body">
                  <ul className="tags">
                    <li>
                       <Link  to="#" className="tag">
                        HTML
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#" className="tag">
                        Java Script
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#" className="tag">
                        Css
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#" className="tag">
                        Jquery
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#" className="tag">
                        Java
                       </Link> 
                    </li>
                    <li>
                       <Link  to="#" className="tag">
                        React
                       </Link> 
                    </li>
                  </ul>
                </div>
              </div>
              {/* /Tags */}
            </div>
            {/* /Blog Sidebar */}
            </div>
          </div>
        </div>
      </section>
      <Footer/>
      </div>
      
    </>
  );
};

export default BlogList;
