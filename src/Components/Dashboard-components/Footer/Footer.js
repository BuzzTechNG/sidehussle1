import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row ">
          <div className="container">
            <div className="row">
              {/* <div className="col-12"></div> */}
            </div>
            <div className="row footer-row">
              <div className="col-md-4 p-3">
                <div className="footer-title">About Us</div>
                <p className="footer-subtitle">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  voluptate id aliquam exercitationem voluptatum ipsa
                </p>
                <br />
                <div className=" footer-title">Contact Us</div>
                <div>
                  <i className="fas fa-mobile-alt footer-subtitle fa-fw"></i>:
                  <a className="footer-subtitle" href="/">
                    08034565543
                  </a>
                </div>

                <div>
                  <i className="fas fa-envelope fa-fw footer-subtitle"></i>:
                  <a className="footer-subtitle" href="mailto:mail@example.com">
                    mail@BuzzTech.com
                  </a>
                </div>
              </div>
              <div className="col-md-4 p-3">
                <div className="footer-title">Follow Along On:</div>
                <div className="d-flex justify-content-between py-2 px-5 social-icons">
                  <a href="/">
                    <i className="fab m-2 fa-facebook fa-1x footer-subtitle"></i>{" "}
                  </a>
                  <a href="/">
                    <i className="fab m-2 fa-twitter fa-1x footer-subtitle"></i>
                  </a>
                  <a href="/">
                    <i class="fab m-2 fa-linkedin fa-1x footer-subtitle"></i>
                  </a>
                  <a href="/">
                    <i class="fab m-2 fa-instagram fa-1x footer-subtitle"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4 p-3">
                <h2 className="footer-title">Subscribe for job updates:</h2>
                <form action="#" className="d-flex justify-content-center pt-4">
                  <input
                    type="text"
                    className="newsletter-input"
                    placeholder="Your Email..."
                  />
                  <button
                    className="btn btn-light newsletter-btn"
                    type="submit"
                  >
                    <i className="fas fa-envelope fa-1x"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* <div className="copyright fixed-bottom">
            Copyright © 2020 BuzzTech - All Rights Reserved. Privacy Policy.
          </div> */}
        </div>
      </div>
    );
  }
}
export default Footer;
