import React from "react";
import { InstructorHeader } from "../../instructor/header";
import Footer from "../../footer";
import { Link } from "react-router-dom";
import InstructorSidebar from "../sidebar";

export default function InstructorNotification() {
  return (
    <div className="main-wrapper">
      <InstructorHeader activeMenu={"Notification"} />
      {/* Notification */}
      <div className="page-content" style={{paddingTop:'130px'}}>
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <InstructorSidebar activeMenu={"Notification"} />
            {/* Sidebar */}

            {/* Notifications */}
            <div className="col-xl-9 col-md-8">
              <div className="settings-widget profile-details">
                <div className="settings-menu p-0">
                  <div className="profile-heading">
                    <h3>Notifications</h3>
                    <p>You will get only notification what have enabled.</p>
                  </div>
                  <div className="checkout-form personal-address secure-alert border-line">
                    <div className="personal-info-head">
                      <h4>Security Alerts</h4>
                      <p>
                        You will get only those email notification what you
                        want.
                      </p>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultChecked
                      />
                      <label className="form-check-label">
                        Email me whenever encounter unusual activity
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Email me if new browser is used to sign in
                      </label>
                    </div>
                  </div>
                  <div className="checkout-form personal-address secure-alert border-line">
                    <div className="personal-info-head">
                      <h4>News</h4>
                      <p>
                        You will get only those email notification what you
                        want.
                      </p>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Notify me by email about sales and latest news
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Email me about new features and updates
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Email me about tips on using account
                      </label>
                    </div>
                  </div>
                  <div className="checkout-form personal-address secure-alert border-line">
                    <div className="personal-info-head">
                      <h4>Courses</h4>
                      <p>
                        You will get only those email notification what you
                        want.
                      </p>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Updates from Classes You&apos;re Taking
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Updates from Teacher Discussions
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Personalized Class Recommendations
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Featured content
                      </label>
                    </div>
                    <div className="form-check form-switch check-on">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Product updates
                      </label>
                    </div>
                    <div className="form-check form-switch check-on mb-0">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        Events and offers
                      </label>
                    </div>
                  </div>
                  <div className="un-subscribe">
                    <Link href="#" className="btn btn-danger">
                      Unsubscribe from all of the above
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
          </div>
        </div>
      </div>
      {/* Notification */}
      <Footer />
    </div>
  );
}
