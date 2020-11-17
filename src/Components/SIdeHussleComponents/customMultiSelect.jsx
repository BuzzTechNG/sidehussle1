import React from "react";

function CustomSelect(props,{onChange, placeholder}) {
  
  const [optionOpened, setOptionOpened] = React.useState(false);
  const newProp = React.useRef(props.items)
  const [selected, setSelected] = React.useState(()=>{
    console.log("object custom multi")
    const localState = {}
   
    return localState
  });
  const [filter, setFilter] = React.useState("");
  const [openCustomModal, setOpenCustomModal] = React.useState(false);
  React.useEffect(() => {
    
    props.onChange(Object.keys(selected))
    console.log("object onchange musk")
    return () => {
      
    }
  }, [selected])
  React.useEffect(() => {
    console.log(newProp.current)
    console.log(props.items)
    if (JSON.stringify(newProp.current) !== JSON.stringify(props.items)) {
      const localState = {}
  
    if(props.items && Array.isArray(props.items) ){
      console.log("object inside props items")  
    props.items.forEach(element => {
      localState[element] = element
    });
  }
   setSelected(localState)
    }
  }, [props.items])
  function toggle(){
    setFilter("");
    if (window.innerWidth < 992) {
      // eslint-disable-next-line no-undef
      // $('#customSelect').modal('toggle');
      if(optionOpened){
        setOptionOpened((prev) => !prev)  
      }
      setOpenCustomModal(true)
      // eslint-disable-next-line no-undef
      // $("#customSelect").appendTo("body").modal("show");
      
    } else {
      setOptionOpened((prev) => !prev);
    }
  };
  function removeItem(item) {
    // await delete selected[item]
    setSelected((prev) => {
      delete prev[item];
      return { ...prev };
    });
    // setSelected( prevItem => {
    //   delete prevItem[item]
    // return prevItem
    // })
    // setFilter("")
  }
  
  function CustomModal(){
    
    return (
      <div className="modal">
      <div className="modal-container">
        <div>Select service categories needed</div>
      <div className="job-form">
      <input
      autoFocus
                className="multiclass-filter"
                type="text"
                value={filter}
                onChange={(e) =>{e.persist(); setFilter(e.target.value)}}
              />
              </div>
              <div className="d-flex multiselect">
              {Object.keys(selected).map((item, index) => (
                <div key={`${index}option`} className="multiselect-option mx-2">
                  {" "}
                  {item}{" "}
                  <i
                    className="fa fa-times"
                    style={{ fontWeight: "700" }}
                    onClick={() => removeItem(item)}
                  >
                    {" "}
                  </i>{" "}
                </div>
              ))}
              </div>
              <div className="modal-container-body">
              {props.options
                .filter((optionx)=> !Object.keys(selected).includes(optionx))
                .filter((option) => option.includes(filter))
                .map((optionx, index) => (
                  <div
                    key={`${index}list-item`}
                    className="multiselect-select-list-item"
                    onClick={() => {
                      setSelected((prev) => {
                        return { ...prev, [optionx]: optionx };
                      });
                      // toggle()
                    }}
                  >
                    {optionx}
                  </div>
                ))}
                </div>
                <div className="modal-footer mt-2">
              <button
                type="button"
                className="modal-close-btn"
                onClick={()=> setOpenCustomModal(false)}
              >
                Close
              </button>
              {/* <button type="button" className="modal-save-btn square-btn m-0">
                Save changes
              </button> */}
            </div>
            </div>
      </div>
    // </div>
    )
  }
  return (
    <div className="multiselect">
      {/* <SelectModal
        data={props.children}
        selected={selected}
        setSelected={setSelected}
        filter={filter}
        setFilter={setFilter}
        removeItem={removeItem}
      /> */}
       {openCustomModal && (<CustomModal/>)}
       
      <div className="d-flex align-items-center">
      
      <i className="mx-1 fa  fa-angle-down" style={{ fontWeight: "900" }}></i>
      <div onClick={toggle} className="multiselect-filter">
        <input
          placeholder={props.placeholder}
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      {optionOpened && (
        <div className="multiselect-select-list">
          {" "}
          {props.options
            .filter((optionx)=> !Object.keys(selected).includes(optionx))
            .filter((option) => option.includes(filter))
            .map((optionx, index) => (
              <div
                key={`${index}list-item`}
                className="multiselect-select-list-item"
                onClick={() => {
                  
                  setSelected((prev) => {

                    return { ...prev, [optionx]: optionx };
                  });
                  
                }}
              >
                {optionx}
              </div>
            ))}{" "}
            {props.options
            .filter((optionx)=> !Object.keys(selected).includes(optionx))
            .filter((option) => option.includes(filter)).length < 1 && <div
             className="multiselect-select-list-item">
               <div style={{opacity:0.5,}} className="d-flex flex-column justify-content-center align-items-center">
                  <i className="fa fa-folder-open mx-auto"></i> 
                  <div className="subtitle3"> No Data </div> 
                  </div> 
                  </div>}
        </div>
      )}
      </div>
      
      
      
      </div>
      
      {Object.keys(selected).map((item, index) => (
        <div key={`${index}option`} className="multiselect-option">
          {" "}
          {item}{" "}
          <i
            className="fa fa-times"
            style={{ fontWeight: "700" }}
            onClick={() => removeItem(item)}
          >
            {" "}
          </i>{" "}
        </div>
      ))}

{optionOpened && (
        <div onClick={toggle} className="sidehussle-select-overlay"></div>
      )}
    </div>
  );
}

export default CustomSelect;
const MultiSelect = CustomSelect
export { MultiSelect };
