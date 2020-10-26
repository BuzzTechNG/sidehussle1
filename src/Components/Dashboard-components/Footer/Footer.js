import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      // <div class="col-md-4 p-3 mini-container">
      //           <p className="subtitle1"> Subscribe for job updates: </p>{" "}
      //           <form action="#" className="d-flex justify-content-center pt-2">
      //             <input
      //               type="text"
      //               className="newsletter-input mr-3"
      //               placeholder="Your Email..."
      //             />
      //             <button
      //               className="button p-2 pl-0"
      //               type="submit"
      //               title="click to subscribe for email notifications"
      //             >
      //               <i className="fas fa-envelope fa-1x mr-1"> </i>Subscribe
      //             </button>{" "}
      //           </form>{" "}
      //         </div>{" "}
      <div className="footer">
      <div className="footer-shape1"> </div>
      <div className="footer-shape2"> </div>
        <div className="row">
          
          
          
          <div className="container-m">
            
            <div className="d-flex flex-wrap align-items-center">
              <div className=" p-3">
                <div className="footer-title"> About Us </div>{" "}
              </div>{" "}
              <div class=" p-3"> <div className="footer-title">Contact Us</div></div>  
              <div className=" p-3">
                <div className="d-flex justify-content-between align-items-center px-0">
                <div className="footer-title"> Follow Us: </div>
                  <a  href="/" title="click on icon to follow us on facebook">
                    <i className="fa m-2 fa-facebook footer-subtitle">
                      {" "}
                    </i>{" "}
                  </a>{" "}
                  <a a href="/" title="click on icon to follow us on twitter">
                    <i className="fa m-2 fa-twitter fa-1x footer-subtitle">
                      {" "}
                    </i>{" "}
                  </a>{" "}
                  <a a href="/" title="click on icon to follow us on LinkedIn">
                    <i class="fab m-2 fa-linkedin fa-1x footer-subtitle"> </i>{" "}
                  </a>{" "}
                  <a href="/" title="click on icon to follow us on instagram">
                    <i class="fab m-2 fa-instagram fa-1x footer-subtitle"> </i>{" "}
                  </a>{" "}
                </div>{" "}
              </div>{" "}
              <div className="p-3">
              <div className="d-flex justify-content-between align-items-center px-0 social-icons">
              <div className="footer-title pr-2"> Mobile App: </div>
                  <a a href="/" title="click on icon to follow us on facebook">
                    <i className="fa  fa-android footer-subtitle">
                      {" "}
                    </i>{" "}
                  </a>{" "}
                  <a a href="/" title="click on icon to follow us on twitter">
                    <i className="fa m-2 fa-apple fa-1x footer-subtitle">
                      {" "}
                    </i>{" "}
                  </a>{" "}
                  </div>
                  </div>
              
            </div>{" "}
          </div>
          {/* <div className="copyright fixed-bottom">
                    
                  </div> */}{" "}
        </div>{" "}
        <div className="line" style={{width:"100%"}}></div>
                <div className="footer-title" style={{fontSize:"11px"}} >Copyright © {new Date().getFullYear()} BuzzTech - All Rights Reserved. Privacy Policy.</div>
      </div>
    );
  }
}
export default Footer;
