import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { apolloHelper, appLogic } from "../../../..";
import Lottie from "../../../../lottie";
import { MessageBox } from "../MessageModule/Message";
import RatingStarUneditable from "./RatingStar";

function MiniMessage({
  jobData,
  selectedUSer,
  isMessageBoxOpened,
  setIsMessageBoxOpened,
}) {
  const [Conversation, { loading, data }] = useMutation(
    apolloHelper.START_OR_CONTINUE_CONVERSATION
  );
  React.useEffect(() => {
    console.log(jobData?.getJob.id);
    console.log(selectedUSer);
    Conversation({
      variables: {
        job: jobData?.getJob.id,
        participant: selectedUSer,
      },
    });
  }, [selectedUSer]);
  console.log(data);
  return (
    <div
      key={`${isMessageBoxOpened}-messagebox`}
      className={[
        `side-messagebox ${
          isMessageBoxOpened ? "open-message" : "close-message"
        }`,
      ]}
    >
      <div style={{ position: "relative" }} className="card ">
        <div
          style={{ position: "absolute", top: "-20px" }}
          className="d-flex justify-content-start message-box-header"
        >
          <i
            className="square-btn fa fa-close mx-0 mr-2"
            onClick={() => {
              setIsMessageBoxOpened(false);
            }}
          ></i>
        </div>
        <MessageBox
          jobData={data?.startOrContinueConversation}
          loading={loading}
          noShow={false}
        />
      </div>
    </div>
  );
}

function JobPage(props) {
  appLogic.convertDate()
  const [isMessageBoxOpened, setIsMessageBoxOpened] = useState(false);
  const [showMessageBoxOpened, setShowMessageBoxOpened] = useState(false);
  const [selectedUSer, setSelectedUser] = useState("");
  const [isDetail, setIsDetail] = useState(true);
  const [assignJob, assignResult] = useMutation(apolloHelper.ASSIGN_JOB);
  console.log(assignResult)
  React.useEffect(()=>{
    if (assignResult.called && !assignResult.loading) {
      if (assignResult.data.assignJob) {
        refetch();
      }
    }
  },[assignResult.loading])
  const partialButtonState = (detail, state) => {
    if (!isDetail === state) {
      return detail;
    } else {
      return `${detail} active`;
    }
  };
  console.log(props);
  const { data, loading, refetch } = useQuery(apolloHelper.GET_JOB, {
    variables: { id: props.match.params.id },
  });
  console.log(data)
  let jobData = data;
  function ApplyForJob(id) {
    
    const applyMessage = React.useRef("");
    const negotiatedPrice = React.useRef("");
    const [applyForJob, applyForJobResult] = useMutation(apolloHelper.APPLY_FOR_JOB)
    const { data, loading,  refetch: applyRefetch } = useQuery(apolloHelper.CAN_APPLY_FOR_JOB, {
      variables: { jobId: id.id },
      
    });
    function applyForJobFunction(){
      applyForJob({variables:{
        jobId: id.id,
        message: applyMessage.current.value,
        negotiatedPrice: negotiatedPrice.current.value
      }})
    }
    React.useEffect(()=>{
      if(applyForJobResult.called && !applyForJobResult.loading){
        if(applyForJobResult.data.applyForJob.id){
          refetch()
          applyRefetch()
        }
      }
    },[applyForJobResult.loading]) 
    return loading ? (
      <div className="d-flex align-items-center justify-content-center py-3">
        <Lottie animation="/loading4.json" style={{ width: "50px" }} />
      </div>
    ) : (
      <div style={{ width: "100%" }}>
        {data?.canApplyForJob && (
          <div
            style={{ width: "100%", flexDirection: "column" }}
            className="d-flex card p-3 my-2 mt-3"
          >
            <div className="title3 my-1">Apply For Job</div>

            <div style={{ width: "100%" }} className="line mb-1 mt-2"></div>
            <div className=" job-form mt-2">
              <textarea
                className="subtitle3 mb-0"
                ref={applyMessage}
                cols="6"
                style={{ fontSize: "13px" }}
                type="text"
                placeholder="Short Message(optional)..."
              />
              <div className="hint mb-3 mt-0">
                Write a unique message to help convince the client
              </div>
              <div>
                <input placeholder="price" ref={negotiatedPrice} style={{ fontSize: "13px" }} type="number" />
                <div className="hint">
                  set a price for job(editable after negotiation)
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-2">
              <div
                className="square-btn mx-0 ml-2"
                onClick={() => applyForJobFunction()}
                style={{ fontSize: "14px" }}
              >
                Apply <i className="fa fa-paper-plane my-auto ml-2"></i>
              </div>
            </div>
          </div>
        )}
        {!data && <div>{`${data}`}</div>}
      </div>
    );
  }

  function PostedByUserMiniProfile() {
    function VerficationItem({ icon, name, verified }) {
      return (
        <div className="d-flex mt-2 align-items-center">
          <div style={{ width: "25px" }}>
            <i
              className={`fa fa-${icon}`}
              style={{ color: verified ? "green" : "", fontSize: "12px" }}
            ></i>
          </div>
          <div className="subtitle2">{name}</div>
        </div>
      );
    }

    const user = data?.getJob.user;
    return (
      <div className="custom-shadow py-4 px-4">
        <div className="title3">
          <div>{`${user.firstName} ${user.lastName}`}</div>
        </div>
        <div className="line mt-2 mb-1" style={{ width: "100%" }}></div>
        <div>
          <div
            className="d-flex align-items-start"
            style={{ flexDirection: "column" }}
          >
            {user.createdAt && <VerficationItem icon="clock" name={appLogic.convertDateToNow(user.createdAt,false)} />}
            {user.userDetails?.address && <VerficationItem icon="map-marker" name={user.userDetails?.address} />}
          </div>

          <div className="title3 mt-2">Verfications</div>
          <div className="line mt-1 mb-2"></div>
          <div>
            <VerficationItem icon="user" name="Identity verified" />
            <VerficationItem
              icon="money"
              verified={true}
              name="Payment method Verified"
            />
            <VerficationItem icon="mail-bulk" name="Deposit Made" />
            <VerficationItem icon="envelope" name="E-mail" />
            <VerficationItem icon="phone" name="Phone Number verified" />
          </div>
        </div>
      </div>
    );
  }

  function MakePayment() {
    return <div>Transfer</div>;
  }
  function AssigedToUserCard({id}) {
    const {data,loading} = useQuery(apolloHelper.GET_USER_ASSIGNED_TO_JOB,{variables:{jobId: id}})
    console.log(data)
    if(loading) {return <div className="d-flex align-items-center justify-content-center py-3">
    <Lottie animation="/loading4.json" style={{ width: "50px" }} />
  </div> }
    return (
      <div className="card mt-4">
        <div className="title3 p-3">Designated User</div>
        <InterestedUserCard data={data.getUserAssignedToJob} />
        <MakePayment />
      </div>
    );
  }

  const RequirementComponent = ({ icon, text }) => {
    return (
      <div className="pr-3 py-1">
        <div className="subtitle2">
          {" "}
          <span>
            {" "}
            <i className={`fa fa-${icon} pr-2`}></i>
          </span>{" "}
          {text}
        </div>
      </div>
    );
  };
  const JobCategory = ({ category }) => {
    return (
      <div
        style={{ border: "1px #ccc solid", width: "max-content" }}
        className="p-1 subtitle2 m-1"
      >
        {category}
      </div>
    );
  };
  function InterestedUserCard(props) {
    const data = props.data?.user;
    return (
      <div className="p-4 my-0">
        <div className="row">
          <div className="avatar-mini"></div>
          <div className="ml-2">
            <div className="subtitle1">{`${data?.firstName} ${data?.lastName}`}</div>

            <div className="rating-star">
              3.0
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star" style={{ color: "orange" }}></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <div className="subtitle2 py-2">
              {props.data.message}
            </div>
            <RequirementComponent icon="clock" text={appLogic.convertToDateWithRecentCapability(props.data.createdAt,true)}/>
          </div>
        </div>
        <div className="ml-4 pl-1">{props.children}</div>
      </div>
    );
  }

  const JobMainWindow = () => {
    const userResult = useQuery(apolloHelper.GET_USER);
    const [cancelJob, cancelResult] = useMutation(apolloHelper.CANCEL_JOB);

    React.useEffect(() => {
      if (cancelResult.called && !cancelResult.loading) {
        if (cancelResult.data.cancelJob.jobStatus !== data.getJob.jobStatus) {
          refetch();
        }
      }
    }, [cancelResult.loading]);
    return (
      <>
        <div className="job-tab">
          <div
            onClick={() => setIsDetail(true)}
            className={partialButtonState("square-btn", true)}
          >
            Details
          </div>
          <div
            onClick={() => setIsDetail(false)}
            className={partialButtonState("square-btn", false)}
          >
            Interested Users
          </div>
        </div>
        <div className="row mb-4">
          <div className="col">
            {isDetail ? (
              <div className="row mb-4">
                <div className="col">
                  {/* Project Detail Card */}
                  <div className="card ">
                    <div
                      className="title3 p-3"
                      style={{ borderBottom: "#ccc solid 1px" }}
                    >
                      Job Details
                    </div>
                    <div className="p-3">
                      <div className="subtitle2 py-0">
                        {data.getJob.jobDescription}
                      </div>
                      <div className="title3 pt-3">Job Requirements</div>
                      <div className="py-2 d-flex" style={{ flexWrap: "wrap" }}>
                        {data.getJob.jobSpecification.map((category) => (
                          <JobCategory category={category} />
                        ))}
                      </div>
                      <div className="d-flex ml-1" style={{flexWrap:"wrap"}}>
                        <RequirementComponent
                          icon={"clock"}
                          text={appLogic.convertToDateWithRecentCapability(data.getJob.createdAt)}
                        />
                        <RequirementComponent
                          icon={"money"}
                          text={`
                            ${data.getJob.isBudgetNegotiable ? 'Negotiable' : 'Fixed'}-${appLogic.numberWithCommas(data.getJob.jobBudget)}
                          `}
                        />
                        <RequirementComponent
                          icon={"map"}
                          text={"Ibadan GRA"}
                        />
                      </div>
                      <div
                        className="line my-2"
                        style={{ width: "100%" }}
                      ></div>
                      <div className="mt-3">
                        {!userResult.loading &&
                          userResult.data.getUser.id === data.getJob.user.id &&
                          data.getJob.jobStatus === "Pending" && (
                            <div
                              className="round-utility-btn"
                              onClick={() => {
                                cancelJob({
                                  variables: { jobId: data.getJob.id },
                                });
                              }}
                            >
                              Cancel Job
                            </div>
                          )}
                      </div>
                      <div className="d-flex justify-content-end">
                        {/* apply for job */}
                      </div>
                      <div className="subtitle3">
                        Project ID: {data.getJob.id}
                      </div>
                    </div>
                  </div>
                  <ApplyForJob id={data.getJob.id} />
                  {data.getJob.assignedTo?.id && <AssigedToUserCard id={data.getJob.id} />}
                  <ReviewUser id={data.getJob.id} postedBy={data.getJob.user.id} jobStatus={data.getJob.jobStatus} reviewedUser={data.getJob.assignedTo?.id} />
                </div>
              </div>
            ) : (
              <div className="d-flex" style={{ flexDirection: "column" }}>
                {data?.getJob.interestedUser.map((value) => (
                  <div key={value} className="my-3 card">
                    <InterestedUserCard data={value}>
                      <div
                        className="line my-2"
                        style={{ width: "100%" }}
                      ></div>
                      <div className="d-flex mt-2">
                        {!data.getJob.assignTo &&
                          data.getJob.jobStatus === "Pending" && 
                          appLogic.userId === data.getJob.user.id &&
                          (
                            <div
                              className="round-utility-btn mx-2"
                              onClick={() => {
                                assignJob({
                                  variables: {
                                    jobId: data.getJob.id,
                                    user: value.user.id,
                                  },
                                });
                              }}
                            >
                              Assign Job <i className="fa fa-plus"></i>
                            </div>
                          )}
                        {(appLogic.userId === data.getJob.user.id) && (
                          <div
                            className="round-utility-btn mx-2"
                            onClick={() => {
                              setSelectedUser(value?.user?.id);
                              setIsMessageBoxOpened(true);
                              setShowMessageBoxOpened(true);
                            }}
                          >
                            Conversation <i className="fa fa-paper-plane"></i>
                          </div>
                        )}
                      </div>
                    </InterestedUserCard>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-4 col-sm-12">
            <PostedByUserMiniProfile />
          </div>
        </div>
      </>
    );
  };
  function ReviewUser({id, postedBy, jobStatus, reviewedUser}) {
    const review = React.useRef("");
    const [rating, setRating] = React.useState(0);
    const {data, loading} = useQuery(apolloHelper.GET_REVIEW,{variables:{jobId: id}})
    const [createReview, createReviewResult] = useMutation(apolloHelper.CREATE_REVIEW)
    console.log(data)
    function RatingStar() {
      return (
        <div className="d-flex mt-2">
          {[0, 1, 2, 3, 4].map((item, index) => (
            <i
              onClick={() => setRating(index + 1)}
              key={index}
              className="fa fa-star star mx-1"
              style={{ color: rating > index ? "orange" : "" }}
            ></i>
          ))}
        </div>
      );
    }
    function sumbitReview(){
        const reviewX = review.current.value
        createReview({variables:{job: id, review: reviewX, rating, reviewer: appLogic.userId, reviewedUser}})
    }
    if(loading){
      return(
        <div className="d-flex align-items-center justify-content-center py-3">
        <Lottie animation="/loading4.json" style={{ width: "50px" }} />
      </div>
      )
    }
    if(!loading && data.getReview.message === "review not found" && appLogic.userId !== postedBy){
        return(<div>
        </div>)
    }
    if(!loading && data.getReview.message === "review not found" && appLogic.userId === postedBy){
      return (
        <div className="card mt-4 p-4">
          <div className="title3 py-1">Review</div>
          <div className="line my-1" style={{ width: "100%" }}></div>
          <div>Rate this user</div>
          <div style={{ fontSize: "12px" }}>tell others what you think</div>
          <div className="mt-1">
            <RatingStar />
          </div>
          <div className="job-form">
            <textarea
              ref={review}
              rows="5"
              placeholder="Describe your experience(optional)"
            ></textarea>
            <div className="d-flex justify-content-end">
              <div
                className="square-btn mx-0 align-self-right mt-2"
                style={{ fontSize: "14px" }}
                onClick={sumbitReview}
              >
                Submit Review<i className="fa fa-mark"></i>
              </div>
            </div>
          </div>
        </div>
      );  
    }
    if(!loading && data.getReview.message === "review found"){
      return (
        <div className="card mt-4 p-4">
          <div className="title3">Review</div>
          <div className="line my-1" style={{ width: "100%" }}></div>

          <div className="mt-1">
          {data.getReview.rating &&  <RatingStarUneditable star={data.getReview.rating}/>}
          </div>
          <div className="job-form">
            <div className="subtitle2">{data.getReview.review}</div>
          </div>
        </div>
      );
    }
    

    return (
      <div className="card mt-4 p-4">
        hi
      </div>
    );
  }
  return (
    <div className="full-width" style={{ minHeight: "90vh" }}>
      {loading ? (
        <Lottie
          style={{ width: "150px", margin: "auto" }}
          animation="/loading3.json"
        />
      ) : (
        <div className="container-m">
          <div className="job-title">
            <div className="job-title--bg"></div>
            <div
              className="job-title--bg"
              style={{ right: "200px", opacity: "0.5" }}
            ></div>
            <div> {data.getJob.jobTitle} </div>
          </div>
          <JobMainWindow />
        </div>
      )}
      {showMessageBoxOpened && (
        <MiniMessage
          key="minimessage"
          jobData={jobData}
          selectedUSer={selectedUSer}
          isMessageBoxOpened={isMessageBoxOpened}
          setIsMessageBoxOpened={setIsMessageBoxOpened}
        />
      )}
    </div>
  );
}

export default JobPage;
