import React from "react";

function Accordion({ children, title, subtitle, icon, titleClass }) {
  const [isAccordionOpened, setisAccordionOpened] = React.useState(false);
  const content = React.useRef(null);
  return (
    <div className="" style={{ width: "100%" }}>
      <div
        className="d-flex"
        style={{ width: "100%" }}
        onClick={() => {
            requestAnimationFrame(()=>{
                setisAccordionOpened((prev) => !prev);
            })
        }}
      >
        <div className={`${titleClass} col`} style={{ flex: "1" }}>
          {title}
        </div>
        <div >
          <i style={{ width: "20px", fontWeight: "800" }} className={icon}></i>
        </div>
      </div>
      <div className="subtitle3">{subtitle}</div>
      <div
        ref={content}
        style={{
          opacity: isAccordionOpened ? "1.0" : "0.0",
          height: isAccordionOpened ? content.current.scrollHeight : "0px",
          minHeight: "max-content",
          transition: "height 300ms,opacity 200ms",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
