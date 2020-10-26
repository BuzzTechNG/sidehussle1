import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./Login.css";
import "./logindark.scss";
import Apollo from "../../apolloHelper";
const apollo =  new Apollo()
class LogIn extends Component {
  constructor(props){
    super(props)
    const mobileNumber = localStorage.getItem("mobileNumber")
    if(mobileNumber){
      this.state.Username = mobileNumber
    }
  }
  state = {
    Username: "",
    Password: "",
    loading: false,
    response: "",
    
  };
  
  line() {
    return <div className="line"></div>;
  }
  authNavigation(Auth){
    this.setState({loading: false})
    if (Auth.message === "verify-user"){
      this.props.history.push(`/verifyUser/${Auth.id}`);
    }
    if (Auth.message === "login-sucessful" ){
      localStorage.setItem("token",Auth.token)
      this.props.history.push("/dashboard");
    }
  }
  inputHandler = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  login = async () => {
    this.setState({ loading: true, response: "" });
    const response = await apollo.login(
      this.state.Username,
      this.state.Password
    );

    console.log(response);
    this.authNavigation(response.data.login);
  };

  loginWithFacebook = async () => {
    if(this.state.loading) return
    console.log("login with fb");
    this.setState({loading: true,response:""})
    const that = this;
    // eslint-disable-next-line no-undef
    FB.getLoginStatus(async function (response) {
     
      console.log(response)

      if (response.status === "not_authorized") {
        
        const POP_UP_RESPONSE = await that.facebookLoginPopUp();
        console.log(POP_UP_RESPONSE)
      }
      if (response.status === "connected") {
      
        that.facebookUserDetails(response.authResponse.accessToken)
      }
      if (response.status === "unknown") {
      
        that.setState({loading:false, response:"Facebook Sign In Error"})
      }
      
    });
  };
  loginWithGoogle = async () => {
    if(this.state.loading) return
    console.log("login-with-google");
    this.setState({loading: true,response:""})
    let googleResponse = null;
    
    // eslint-disable-next-line no-undef
    if (GoogleAuth.isSignedIn.get()){
      // eslint-disable-next-line no-undef
      googleResponse = await GoogleAuth.currentUser.get()
    }else{
      // eslint-disable-next-line no-undef
      googleResponse = await GoogleAuth.signIn({
        scope: 'profile email'
      });
    }
    
    // eslint-disable-next-line no-undef
    var user = googleResponse.getBasicProfile();
    console.log(user.getName());

    
    const firstName = user.getName().split(" ")[0];
    
    const socialResponse =  await apollo.socialAuth({
      firstName,
      lastName: user.getFamilyName(),
      socialId: user.getId(),
      pictureUrl: user.getImageUrl(),
      socialType: apollo.GOOGLE,
      socialMail: user.getEmail(),
    });
     console.log(socialResponse)
     this.authNavigation(socialResponse.data.socialAuth);
    
  };
  facebookLoginPopUp = () => {
    // eslint-disable-next-line no-undef
    FB.login(
      (response) => {
        console.log(response);
      },
      { scope: "public_profile,email" }
    );
  };
  facebookUserDetails = async (token) => {
    fetch(
      `https://graph.facebook.com/me?fields=id,picture,email,first_name,gender,last_name,link,locale,name,timezone,updated_time,verified&&access_token=${token}`
    )
      .then(async (response) => {
        let data = await response.json();
        const socialResponse = await apollo.socialAuth({
          firstName: data.first_name,
          lastName: data.last_name,
          socialId: data.id,
          socialMail: data.email,
          socialType: apollo.FACEBOOK,
          pictureUrl: data.picture.data.url,
        });
        console.log(socialResponse)
        
        this.authNavigation(socialResponse.data.socialAuth);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log(response.json())
  };
  render() {
    console.log(this.props)
    return (
      <div>
        <input
          name="Username"
          className="inputElement"
          value={this.state.email}
          type="mail"
          disabled={this.state.loading}
          placeholder="Email or Phone Number"
          onChange={this.inputHandler}
        />
        {" "}
        <input
          name="Password"
          className="inputElement"
          value={this.state.Password}
          placeholder="Password"
          disabled={this.state.loading}
          onChange={this.inputHandler}
          type="password"
        />
        <div className="row justify-content-end mr-2">
          <div className="mb-4 info link">Forgotten password?</div>
        </div>
        <div style={{ height: "50px" }}>
          {!this.state.loading ? (
            <button
            disabled={this.state.loading}
            
              onClick={this.login}
              className="buttonLogin link text-white"
              title="Log in to your dashboard"
            >
              Log in
            </button>
          ) : (
            <img
              style={{ height: "100%" }}
              src={require("../../assets/sh-logo-svg.svg")}
              alt="loading"
            />
          )}
        </div>
        <div style={{ height: "10px" }} className="subtitle1 text-left">
          {this.state.response}
        </div>
        <br></br>
        <div className="line-div my-2">
          {this.line()}
          <div>OR</div>
          {this.line()}
        </div>
        <div className="row justify-content-center my-4 text-white">
          <div
            onClick={this.loginWithFacebook}
            className="col-5 facebook padding link"
            title="Log in with your facebook account"
          >
            <i className="fa fa-facebook mr-2 i"></i>
            Facebook
          </div>
          <div className="col-1"></div>
          <div
            onClick={this.loginWithGoogle}
            className="col-5 google padding link"
            title="Log in with your google account"
          >
            <i className="fa fa-google mr-2 i"></i>
            Google
          </div>
        </div>
        <div className="mt-4 mb-4 info">
          Don't have an account?{" "}
          <span
            className="link"
            onClick={this.props.switchView}
            style={{ color: "#44c" }}
          >
            Sign up

          </span>
        </div>
        <div className="row justify-content-center my-4">
          <div
            className="playstore store-settings link"
            title="Download for android device on Playstore"
          ></div>
          <div style={{ width: "15px" }}></div>
          <div
            className="appstore store-settings link"
            title="Download for iOS device o App Store"
          ></div>
        </div>
      </div>
    );
  }
}

export default withRouter(LogIn);
