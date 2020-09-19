import React from 'react'

function SelectModal({data}){
    function closeModal(){
        // eslint-disable-next-line no-undef
            $('#customSelect').modal('toggle');
    }
    return(
        <div
      className="modal fade "
      id="customSelect"
      tabIndex={1}
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered "
        style={{ border: 0, outline: 0 }}
      >
        <div className="modal-content " style={{ border: 0, outline: 0 }}>
          <div className="modal-header">
            <h4 className="modal-title" id="ModalLabel">
              Select
            </h4>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body "><div className="sidehussle-select-modal" onClick={closeModal}> { data } </div></div>
          {/* <div className="modal-footer">
            <button type="button" className="modal-close-btn" data-dismiss="modal">
              Close
            </button>
            <button type="button" className="modal-save-btn square-btn m-0">
              Save changes
            </button>
          </div> */}
        </div>
      </div>
    </div>
    )
}

function CustomSelect(props) {
    const [ optionOpened, setOptionOpened ] =  React.useState(false)
    const toggle = () => {
        if(window.innerWidth < 992){
            // eslint-disable-next-line no-undef
            // $('#customSelect').modal('toggle');
            // eslint-disable-next-line no-undef
            $('#customSelect').appendTo("body").modal('show');
            console.log(window.innerWidth)
          }else{

              setOptionOpened(prev => !prev); 
          }
    
    }
    return (
        <div className="sidehussle-select" onClick={toggle}>
          <SelectModal data={props.children}/>
          <i  className="mx-1 fa  fa-angle-down" style={{fontWeight:"900"}}></i>  { props.selected }  
          { optionOpened && <div className="sidehussle-select-overlay"></div>}         
          { optionOpened && <div className="sidehussle-select-option"> { props.children } </div>}         
          <div style={{position:"relative"}}>

          </div>
       </div>
    )
}

export default CustomSelect
