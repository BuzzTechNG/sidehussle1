import React from 'react'
import { MessageBox } from './Message';

function MobileMessage(props) {
    const [jobData, setJobData] = React.useState({})
    React.useEffect(() => {
        const { history } = props;
        if (history.location.state.jobData) {
            setJobData(history.location.state.jobData)
          console.log("profile: ", history.location.state.jobData)
        }
      },[])
      React.useEffect(() => {
        document.body.addEventListener("focus", event => {
            const target = event.target;
            switch (target.tagName) {
                case "INPUT":
                case "TEXTAREA":
                case "SELECT":
                    document.body.classList.add("keyboar");
                    console.log("ok 1")
            }
        }, true);
        document.body.addEventListener("blur", () => {
            document.body.classList.remove("keyboard");
            console.log("ok 2")
        }, true);
          return () => {
            document.body.classList.remove("keyboard");
          }
      }, [])
      return (
          <div className="full-width"style={{height:"50vh"}} >

        <div className="container-m">
            <div className="position-absolute" style={{ left:0, top:0, width:"100%",height:"90vh",zIndex:"9999999999"}}> 

            
        <div
          // style="overflow: hidden;"
          className="complaint-container  row background-primary"
          style={{height:"100vh"}}
        >
            <MessageBox noShow={false} jobData={jobData} />
        
        </div>
        </div>
        </div>
           </div>
    )
}

export default MobileMessage
