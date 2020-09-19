import React, { useState, useEffect, useRef } from "react";
import countryCode from "./CountryCode";
import CustomSelect from "../../../SIdeHussleComponents/customSelect";
import { useQuery } from "@apollo/client";
import Apollo from "../../../../apolloHelper.js";
import lottie from "lottie-web";
const apollo = new Apollo();
let userLocationX = "";
let mobileNumberX = "";

const verifyFunc = async ({ userLocation = "", mobileNumber = "", id }) => {
  const CONCAT_MOBILE_NUMBER_COUNTRY_CODE = `${userLocation}${mobileNumber}`;
  try {
    const resp = await apollo.verifyUserMobile({
      mobileNumber: CONCAT_MOBILE_NUMBER_COUNTRY_CODE,
      id,
    });
    console.log(resp);
    userLocationX = userLocation;
    mobileNumberX = mobileNumber;
    return resp.data.verifyUserMobile.message;
  } catch (error) {
    console.log(error);
  }
};

const MobileNumber = (props) => {
  const [mobileNumber, setmobileNumber] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [userLocation, setUserLocation] = useState(countryCode["NG"]);
  const [selectLocation, setSelectLocation] = useState(countryCode["NG"]);
  const [timer, timerCountdown] = useState(60);

  const sendMessage = async () => {
    if (mobileNumber.length < 10 || isSending) {
      return;
    }
    await setIsSending(true);
    var animation = lottie.loadAnimation({
      container: document.getElementById("lottie-view"),
      // container: '#lottie-view',
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading2.json",
    });

    const SMS_RESPONSE = await verifyFunc({
      userLocation,
      mobileNumber,
      id: props.id,
    });
    if (SMS_RESPONSE === "confirm-token") {
      setIsSending(false);
      props.setMode(true);
    } else {
      setIsSending(false);
      setMessage("An error occurried");
    }
  };
  useEffect(() => {
    async function getUserLocation() {
      const response = await fetch(
        "https://ipinfo.io/json?token=a5a87172fe538f"
      );
      const { country } = await response.json();
      console.log(country);
      setUserLocation(countryCode[country]);
    }
    // getUserLocation()
    return () => {};
  }, []);

  console.log(props);
  return (
    <>
      <div className="title1 my-2">Kindly Verify Your Mobile Number</div>

      <div className="row px-2 my-3">
        <div style={{zIndex:"5"}}>
          <CustomSelect selected={selectLocation}>
            {Object.keys(countryCode).map((Itemoption, index) => (
              <option
                onClick={() => {
                  setUserLocation(countryCode[Itemoption]);
                  setSelectLocation(
                    `${Itemoption} : +${countryCode[Itemoption]}`
                  );
                }}
                key={index}
              >{`${Itemoption} : +${countryCode[Itemoption]}`}</option>
            ))}
          </CustomSelect>
        </div>
        <div className="col" style={{zIndex:"4"}}>
          <input
            type="number"
            maxLength="10"
            value={mobileNumber}
            placeholder="Mobile Number"
            onChange={(e) => setmobileNumber(e.target.value)}
          />
        </div>
      </div>
      <div style={{ width: "100%" }}>
        <div className="float-left my-auto">{message}</div>
        <div onClick={sendMessage} className="square-btn float-right">
          {isSending ? (
            <div
              id="lottie-view"
              className="scale"
              style={{ width: "80px", height: "26px" }}
            ></div>
          ) : (
            <>
              {" "}
              Send Token <i className="fa fa-check my-auto ml-1"></i>
            </>
          )}
        </div>
      </div>
    </>
  );
};

function Token(props) {
  const [userToken, setUserToken] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [counter, setCounter] = React.useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      if (counter > 1) {
        setCounter((counter) => counter - 1);
        console.log(counter);
      } else {
        setIsActive((isActive) => !isActive);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [counter]);

  const comfirmFunc = async () => {
    setIsActive(!isActive);
    if (userToken.length < 6 || isSending) {
      return;
    }
    await setIsSending(true);
    var animation = lottie.loadAnimation({
      container: document.getElementById("lottie-view"),
      // container: '#lottie-view',
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/loading2.json",
    });
    try {
      const resp = await apollo.comfirmUserMobile({
        user: props.userId,
        token: userToken,
      });
      setMessage(resp.data.comfirmUserMobile.message);
      console.log(resp);
      setIsSending(false);
      if (resp.data.comfirmUserMobile.message === "mobileNumber-confirmed") {
        setTimeout(() => {
          props.route.push("/dashboard");
          localStorage.setItem("token", resp.data.comfirmUserMobile.token);
        }, 3000);
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <div className="avatar"></div>
        <div className="subtitle1 mt-4">Welcome User</div> */}
      {/* <div className=" mt-2">Kindly Enter The Token Sent</div> */}
      <div className="mb-2 title1 text-center">
        kindly enter the token sent to your mobile device
      </div>
      <div className=" job-form row px-2 my-3">
        <input
          autoFocus
          value={userToken}
          style={{ letterSpacing: "8px" }}
          onChange={(e) => setUserToken(e.target.value)}
          type="text"
          tabindex="0"
          maxlength="6"
        />
      </div>
      <div style={{ width: "100%" }}>
        <div className="float-left">{message}</div>

        <div className="square-btn float-right" onClick={comfirmFunc}>
          {isSending ? (
            <div
              id="lottie-view"
              className="scale"
              style={{ width: "80px", height: "26px" }}
            ></div>
          ) : (
            <>
              {" "}
              Verify <i className="fa fa-check my-auto ml-1"></i>
            </>
          )}
        </div>
        </div>
        <div className="mt-3">
        {isActive ? (
          <p className="subtitle3">
            Didn't receive a token?, resend token in {counter} 
            
          </p>
        ) : (
          <div className="d-flex">
            {/* div to render change mobile number and resend token */}
            <div className="verifie" onClick={() => props.setMode(false)}>
              {" "}
              Change mobile number
            </div>
            <div
              className="verifie"
              onClick={() =>
                verifyFunc({
                  userLocation: userLocationX,
                  mobileNumber: mobileNumberX,
                  id: props.userId,
                })
              }
            >
              {" "}
              Resend token
            </div>
          </div>
        )}
     </div>
    </>
  );
}

function VerifyMobileNumber(props) {
  const [mode, setMode] = useState(false);

  const { loading, data, err } = useQuery(apollo.GET_USER_WITHOUT_AUTH, {
    variables: { id: props.match.params.id },
  });
  console.log(props.match.params.id);
  console.log("this object");
  console.log(data);
  console.log(loading);
  console.log(err);
  return (
    !loading && (
      <div className="full-width page" style={{ height: "100vh" }}>
        <div className="logo-watermark"></div>
        <div className="verify container-m ">
          <div className="mt-2 mb-4">
            <img
              src={require("../../../../assets/logo-with-name.png")}
              alt="SideHussle Logo"
              title="Sidehussle Logo"
              style={{ width: "250px", height: "100%" }}
            ></img>
          </div>
          
            <div className="avatar" >
              {data.getUserWithoutAuth?.pictureUrl  &&  <img style={{width:"100%",height:"100%"}} className="avatar" src={data.getUserWithoutAuth?.pictureUrl} />}
            </div>
          
          <div className="subtitle1 mt-4">
            Welcome{" "}
            {`${data.getUserWithoutAuth.firstName} ${data.getUserWithoutAuth.lastName}`}
          </div>
          {!mode ? (
            <MobileNumber setMode={setMode} userId={props.match.params.id} />
          ) : (
            <Token
              userId={props.match.params.id}
              route={props.history}
              setMode={setMode}
            />
          )}
        </div>
      </div>
    )
  );
}

export default VerifyMobileNumber;
