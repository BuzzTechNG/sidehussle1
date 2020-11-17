import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { apolloHelper, appLogic } from "../../../..";
import Lottie from "../../../../lottie";
import NoMessage from "../../../SIdeHussleComponents/NoMessage";
import SelectMessage from "../../../SIdeHussleComponents/SelectMessage";

function showName(dataX){
  if(dataX){
  if(dataX.participants.id !== appLogic.userId){
    return `${dataX.participants.firstName} ${dataX.participants.lastName}`
  }else{
    return `${dataX.sender.firstName} ${dataX.sender.lastName}`
  }

}else{
  return ``
}
}
function showImage(dataX){
  if(dataX){
  if(dataX.participants.id !== appLogic.userId){
    return `${dataX.participants.pictureUrl}`
  }else{
    return `${dataX.sender.pictureUrl}`
  }

}else{
  return ``
}
}

function MessageApp(props) {
  console.log(props)
  const [complainGroupTitle, setcomplainGroupTitle] = React.useState("");
  const [complainGroup, setComplainGroup] = React.useState(0);
  const [complainGroupStyle, setComplainGroupStyle] = React.useState("");
  const [selecetdMessage, setSelectedMessage] = React.useState({})
  const [selectedCategory, setSelectedCategory] = React.useState("ALL")
  const { data, loading } = useQuery(apolloHelper.GET_USER_CONVERSATIONS)
  console.log(data)
  const categories = ['ALL','JOBS','DIRECT MESSAGES','ADMIN']
  React.useEffect(() => {
    document.getElementById("footer").style.opacity = "0"
    document.getElementById("footer").style.pointerEvents = "none"
    return () => {
      document.getElementById("footer").style.opacity = "1"
      document.getElementById("footer").style.pointerEvents = "unset"
    }
  }, [])
  React.useEffect(() => {
    let group = complainGroup % 3;
    if (group === 0) {
      setcomplainGroupTitle("All Groups");
      setComplainGroupStyle("text-grey");
    } else if (group === 1) {
      setcomplainGroupTitle("Open/Active Complains");
      setComplainGroupStyle("text-green");
    } else if (group === 2) {
      setcomplainGroupTitle("Closed/Unactive Complains");
      setComplainGroupStyle("text-red");
    } else {
      return "";
    }
  }, [complainGroup]);
  function selectMessage(job) {
    setSelectedMessage(job)
    if (window.innerWidth < 992) {
      // eslint-disable-next-line no-undef
      $("#message-box").modal("toggle");
      console.log(window.innerWidth);
      props.history.push(
        '/message/dm',{jobData:job})
    }
  }
  function complaintToggle() {
    setComplainGroup((prev) => prev + 1);
  }
  return (
    <div className="full-width" >
      <div className="position-absolute" style={{bottom:"4px",width:"100%",}}>
        {/* <div className="page-title my-4 display-none">Message</div> */}
        <div
          // style="overflow: hidden;"
          className="complaint-container  row" style={{height:"92vh",marginBottom:"0px"}}
        >

         
          <div className="col-12 col-xs-12 col-md-3 complaint-list display-none"          
           style={{flexDirection:"column",display:"flex"}}
          >
             <div style={{flex:"1"}} className="d-flex justify-content-center align-items-center">
                <img src={require("../../../../assets/data_arranging.svg")} style={{width:"200px",height:"200px", borderRadius:"50%"}} className="mt-4 avatar-shadow" alt=""/>
             </div>
            {
              categories.map((item, index)=>(
                <div
                  category-selected={selectedCategory === item ? 'true' : 'false'}
                  onClick={()=>setSelectedCategory(item)}
                  key={index}
                  className="item row align-items-center ustify-content-center"
                >
                  <div className="column col">
                    <div className="col subtitle1">{item}</div>
                    
                  </div>
                </div>
              ))
            }
          </div>
          {/* <!-- complain list --> */}
          <div className="col-12 col-xs-12 col-md-3 complaint-list">
            <div className="search-bar-container row align-items-center justify-content-center">
              <div className="search-bar row align-items-center">
                <i className="fa fa-search px-2" />
                <input
                  className="col"
                  type="text"
                  placeholder="Search..."
                />
              </div>
              <div
                // style="cursor:pointer"
                data-toggle="tooltip"
                data-placement="top"
                title={complainGroupTitle}
                onClick={() => complaintToggle}
                className="mx-2"
              >
                <i
                  //  style="font-size:18px"
                  className="fa fa-filter"
                ></i>
              </div>
            </div>
            <div className="xlist thumb2">
            {loading && (<div> <Lottie style={{width:"120px",height:"40px", margin:"auto auto"}} animation="/loading4.json"/> </div>)}
              {
                data?.getUserConversations?.length < 1 && !loading && <NoMessage text={"No Messages Yet"}/>
              }
              {data?.getUserConversations?.map((dataX,index) => (
                <div
                  onClick={()=>selectMessage(dataX)}
                  key={index}
                  className="item row align-items-center ustify-content-center"
                >
                  <div className="avatar ml-2">
                    <img src={showImage(dataX)} alt="user" width="100%"/>
                    </div>
                  <div className="column col">
                    <div className="col subtitle1">{showName(dataX) }</div>
                    <div style={{ fontSize: "11px" }} className="col ">
                      Subject
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* <!-- message box --> */}
          <MessageBox noShow={true} jobData={selecetdMessage} />
        </div>
      </div>
      {/* <ModalView selecetdMessage={selecetdMessage} /> */}
    </div>
  );
}
function MessageBox({ item, noShow, id, participant, jobData }){
  const message = React.useRef("")
  const [pushMessage, {  }] = useMutation(apolloHelper.PUSH_MESSAGE);
  function pushMessageToServer(){
    pushMessage({
      variables: {
        id: jobData.id,
        message:message.current.innerHTML,
      },
    });
    message.current.innerHTML = ""
  }
  const { subscribeToMore, data, loading,  } = useQuery(apolloHelper.GET_CONVERSATION, {
    variables: { id: jobData?.id }, fetchPolicy:"cache-first"
  });
  console.log(data);
  React.useEffect(() => {
    const unsubscribe = subscribeToMore({
      document: apolloHelper.NEW_MESSAGE,
      variables: { id: jobData?.id },
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        if (!prev.getConversation ) return prev
        console.log(prev)
        const newMessageData = subscriptionData.data.newMessage;
        console.log(newMessageData)
        // data = [newMessageData,
        //     ...prev.getConversation]
       
        return Object.assign({}, {getConversation: [
          newMessageData,
          ...prev.getConversation
        ]});
      },
    });
    return () => {
      unsubscribe();
    };
  },[]);
  if(jobData?.id === undefined) return ( <div className="col message-bo my-auto"> <div className="message-box-loadin my-auto display-none"> <SelectMessage text={"Select a Message Conversation"}/></div></div>);
  if(loading) return ( <div className="col message-box"> <div className="message-box-loading mcard">
    <Lottie style={{width:"120px",height:"40px",transform:"scale(2)", margin:"auto auto"}} animation="/loading4.json"/>
    </div> </div> )
  return (
    <div className={[`col message-box px-0 ${noShow ? "no-show" : ""}`]}>
      <div className="message-box-area d-flex align-items-center justify-content-center">
        <input className="custom-file-inputx ml-2" type="file"></input>
        {/* <textarea
          
          className="col-11 mx-1"
          cols="5"
          rows="1"
          type="text"
          placeholder="Write a message..."
          ref={message}
        /> */}
        <div className="col mx-1">
              <div 
        class="input px-4 subtitle1"
        style={{width:"100%"}}
        role="textbox" 
        ref={message}
        placeholder="Write a message..."
        contentEditable>
          
      </div></div>
        <i
          onClick={() => {
          pushMessageToServer()
          }}
          className="fa fa-paper-plane mr-2"
        />
      </div>
      <div className="message-chat thumb">
        {data?.getConversation?.map((item, index) => (
          <div
            key={`${index}-message`}
            className={
              appLogic.userId === item.by
                ? "message message-left mcard text-primary"
                : "message message-right"
            }
          >
            {item.message}
          </div>
        ))}
      </div>
      <div className="message-box-header d-flex align-items-center">
        <div className="avatar mx-2" style={{width:"30px", height:"30px"}}>
          <img src={showImage(jobData)} style={{width:"100%",height:"100%"}} alt=""/>
        </div>
        <div className="col-6 q-pl-md subtitle1">
          {showName(jobData)}
        </div>
        <div
          // style="font-size:12px"
          className="col-6 menu"
        >
          <i className="fa fa-book"></i>
          <div>Subject</div>
        </div>
      </div>
    </div>
  );
};
function ModalView({ body, title, modalType, selecetdMessage }) {
  return (
    <div
      class="modal fade modalfram"
      backdrop="static"
      id="message-box"
      tabIndex={-1}
      role="dialog"
      // aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div
        class="modal-dialog modal-l modal-dialog-centere"
        style={{ border: 0, outline: 0, padding:0, margin:0 }}
      >
        <div class="modal-content modalbg" style={{ border: 0, outline: 0,height: "89vh", marginTop:"9vh",width:"100vw" }}>
          <div className="model-body" style={{ height: "100%"}}>
            <MessageBox noShow={false} jobData={selecetdMessage} />
          </div>
          {/* <div class="modal-footer">
              <button type="button" class="modal-close-btn" data-dismiss="modal">
                Close
              </button>
              <button type="button" class="modal-save-btn square-btn m-0">
                Save changes
              </button>
            </div> */}
        </div>
      </div>
    </div>
  );
};
export default MessageApp;
export { MessageBox };
