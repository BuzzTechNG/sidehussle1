
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
    function complaintToggle(){
        setComplainGroup(prev => prev +1);
    }
    return (
        <div className="full-width">
            <div className="container-lg">
            <div className="page-title my-4">Message </div>
        <div 
        // style="overflow: hidden;" 
        className="complaint-container shadow-2 row">
            {/* <!-- complain list --> */}
            <div className="col-3 complaint-list">
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
                                    <div key={index} className="item row align-items-center ustify-content-center">
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
            <div className="col message-box">
                <div className="message-box-area row align-items-center justify-content-center">
                    <i className="fa fa-user" />
                    <input className="col-11 q-mx-sm" type="text" placeholder="Reply a complaint"/>
                    <i className="fa fa-paper-plane"/>
                </div>
                <div className="message-chat thumb">

                  {[0,1,22,55,77,88,"mm8m5","m55m4m5","m4m4"].map((item,index)=>(

                   <div key={item} className={ index%2 === 0 ? 'message message-left' : 'message message-right'}>{index} Ade is a boy and a girl</div>
                  ))}  
                </div>
                <div className="message-box-header row align-items-center">
                    <div className="col-6 q-pl-md">
                        Name
                    </div>
                    <div 
                    // style="font-size:12px" 
                    className="col-3 menu">
                        <i className="fa fa-book"></i>
                        <div>Complaint Subject</div>
                    </div>
                    <div 
                    // style="font-size:12px"
                     className="col-3 menu">
                        <i className="fa fa-times"></i>
                        <div> Close Complaint</div>
                    </div>
                </div>
            </div>


        </div>
        </div>
        </div>
    )
}

export default MessageApp
