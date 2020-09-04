
import React from 'react'

function MessageApp() {
    const [complainGroupTitle,setcomplainGroupTitle] = React.useState("")
    const [complainGroup,setComplainGroup] = React.useState(0)
    const [complainGroupStyle,setComplainGroupStyle] = React.useState("")
    React.useEffect(() =>{
         let group = complainGroup % 3;
            if (group === 0){
                setcomplainGroupTitle("All Groups")
                setComplainGroupStyle("text-grey")
            }else if( group === 1){
                setcomplainGroupTitle("Open/Active Complains");
                setComplainGroupStyle("text-green");
            }else if( group === 2 ){
                setcomplainGroupTitle("Closed/Unactive Complains")
                setComplainGroupStyle("text-red")
            }else{
                return ""
            }
    },[complainGroup])
    function selectMessage(){
      if(window.innerWidth < 992){
        // eslint-disable-next-line no-undef
        $('#message-box').modal('toggle');
        console.log(window.innerWidth)
      }
    }
    function complaintToggle(){
        setComplainGroup(prev => prev +1);
    }
    return (
        <div className="full-width">
            <div className="container-v">
            <div className="page-title my-4">Message</div>
        <div 
        // style="overflow: hidden;" 
        className="complaint-container  row">
            {/* <!-- complain list --> */}
            <div className="col col-md-3 complaint-list">
                <div className="search-bar-container row align-items-center justify-content-center">
                <div className="search-bar row align-items-center"> 
                <i className="fa fa-search px-sm"/>
                 <input className="col" type="text" placeholder="Search for a complaint"/>
                </div>
                <div 
                // style="cursor:pointer" 
                data-toggle="tooltip" data-placement="top" title={complainGroupTitle}  onClick={()=>complaintToggle} className={complainGroupStyle}>
                    <i
                    //  style="font-size:18px" 
                     className="fa fa-sort"></i>
                </div>
                </div>
                <div className="xlist thumb2">
                            {[0,1,2].map(index => (
                                    <div onClick={selectMessage} key={index} className="item row align-items-center ustify-content-center">
                                    <div className="avatar q-mx-md">M</div>
                                    <div className="column">
                                        <div className="col-3">
                                            Name{index}
                                        </div>
                                        <div 
                                        style={{fontSize:"11px"}}
                                         className="col">
                                            Subject
                                        </div>
                                    </div>
                                </div>
                            )) }
                            
                </div>
                

            </div>
            {/* <!-- message box --> */}
            <MessageBox noShow={true}/>

        </div>
        </div>
        <ModalView/>
        </div>
    )
}
const MessageBox = ({item, noShow}) => {
    return (
        <div className={[`col message-box ${noShow ? 'no-show' : ''}`]}>
                <div className="message-box-area d-flex align-items-center justify-content-center">
                    <i className="fa fa-user" />
                    <input className="col-11 q-mx-sm" type="text" placeholder="Reply a complaint"/>
                    <i className="fa fa-paper-plane"/>
                </div>
                <div className="message-chat thumb">

                  {[0,1,22,55,77,88,"mm8m5","m55m4m5","m4m4","df","asd","as","sd","7","5566","45"].map((item,index)=>(

                   <div key={item} className={ index%2 === 0 ? 'message message-left' : 'message message-right'}>{index} Ade is a boy and a girl</div>
                  ))}  
                </div>
                <div className="message-box-header d-flex align-items-center">
                    {window.innerWidth < 991 ?<div  className="my-auto mx-2">

                       
                        <i className="fa fa-arrow-left my-auto" onClick={()=>{     
                             
                             // eslint-disable-next-line no-undef
                             $('#message-box').modal('toggle');}
                             }></i>
                    </div>: <></>}
                  <div className="col-6 q-pl-md">
                    Name
                  </div>
                    <div 
                    // style="font-size:12px" 
                    className="col-6 menu">
                        <i className="fa fa-book"></i>
                        <div>Subject</div>
                    </div>
                    
                </div>
            </div>

    )
}
const ModalView = ({ body, title, modalType }) => {
    return (
      <div
        class="modal fade modalframe"
        backdrop="static"
        id="message-box"
        tabIndex={-1}
        role="dialog"
        // aria-labelledby="ModalLabel"
        aria-hidden="true"
      >
        <div
          class="modal-dialog modal-lg modal-dialog-centered "
          style={{ border: 0, outline: 0 }}
        >
          <div class="modal-content modalbg" style={{ border: 0, outline: 0 }}>
            <div className="model-body" style={{height:"95vh"}}>
                <MessageBox noShow={false}/>
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
export default MessageApp
