import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row ">
          <div className="container">
            <div className="row">
              <div className="col-12"></div>
            </div>
            <div className="row footer-row">
              <div className="col-md-4 p-3">
                <h1 className="text-primary">About SideHussle</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  voluptate id aliquam exercitationem voluptatum ipsa
                </p>
                <br />
                <h1 className=" text-primary">Contact Us</h1>
                <h5>
                  <i className="fas fa-mobile-alt fa-fw"></i>:
                  <a className="text-white-50" href="/">
                    08034565543
                  </a>
                </h5>

                <h5>
                  <i className="fas fa-envelope fa-fw"></i>:
                  <a className="text-white-50" href="mailto:mail@example.com">
                    mail@BuzzTech.com
                  </a>
                </h5>
              </div>
              <div className="col-md-4 p-3">
                <h1 className="text-primary">Follow Along On:</h1>
                <div className="d-flex justify-content-around p-5 social-icons">
                  <a href="/">
                    <i className="fab m-2 fa-facebook fa-2x text-light"></i>{" "}
                  </a>
                  <a href="/">
                    <i className="fab m-2 fa-twitter fa-2x text-light"></i>
                  </a>
                  <a href="/">
                    <i class="fab m-2 fa-linkedin fa-2x text-light"></i>
                  </a>
                  <a href="/">
                    <i class="fab m-2 fa-instagram fa-2x text-light"></i>
                  </a>
                </div>
              </div>
              <div class="col-md-4 p-3">
                <h2 className="text-primary">Subscribe for job updates:</h2>
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

          <div className="copyright fixed-bottom">
            Copyright © 2020 BuzzTech - All Rights Reserved. Privacy Policy.
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
