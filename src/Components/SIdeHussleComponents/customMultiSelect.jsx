import React from "react";

function CustomSelect(props,{onChange}) {
  
  const [optionOpened, setOptionOpened] = React.useState(false);
  const [selected, setSelected] = React.useState({});
  const [filter, setFilter] = React.useState("");
  const [openCustomModal, setOpenCustomModal] = React.useState(false);
  React.useEffect(() => {
    props.onChange(Object.keys(selected))
    return () => {
      
    }
  }, [selected])
  const toggle = () => {
    setFilter("");
    if (window.innerWidth < 992) {
      // eslint-disable-next-line no-undef
      // $('#customSelect').modal('toggle');
      setOpenCustomModal(true)
      // eslint-disable-next-line no-undef
      // $("#customSelect").appendTo("body").modal("show");
      console.log(window.innerWidth);
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
  function SelectModal({
    data,
    selected,
    setSelected,
    filter,
    setFilter,
    removeItem,
  }) {
    function closeModal() {
      // eslint-disable-next-line no-undef
      $("#customSelect").modal("toggle");
    }
    return (
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
            <div className="modal-body ">
              {/* <div className="sidehussle-select-modal" > { data } </div> */}
              <input
                className="multiclass-filter"
                type="text"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              />
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

              {props.options
                
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
            <div className="modal-footer">
              <button
                type="button"
                className="modal-close-btn"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button type="button" className="modal-save-btn square-btn m-0">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
  function CustomModal(){
    
    return (
      <div className="modal">
      <div className="modal-container">
        <div>Select service categories needed</div>
      <input
      autoFocus
                className="multiclass-filter"
                type="text"
                value={filter}
                onChange={(e) =>{e.persist(); setFilter(e.target.value)}}
              />
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
       
      <i className="mx-1 fa  fa-angle-down" style={{ fontWeight: "900" }}></i>
      <div onClick={toggle} className="multiclass-filter">
        <input
          className="multiclass-filter"
          type="text"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
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
                  toggle();
                }}
              >
                {optionx}
              </div>
            ))}{" "}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
