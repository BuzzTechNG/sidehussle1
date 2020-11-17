import React from "react";

function SocailLink({initValue, onChange}) {
  const [Count, setCount] = React.useState(1);
  let prevNumber = React.useRef(0);
  const [socailLink, setSocailLink] = React.useState(()=>{
    const localInit = {}
    let localInc = 0
        console.log("object reload")
        if(initValue && Array.isArray(initValue)){
            initValue.forEach(
                (element,index) => {
                  localInit[index] = element
                  localInc = localInc + 1
                }
            )
      }
      prevNumber.current = localInc
      return localInit
  });
  function SocialOnChange(e, item) {
    console.log(e);
    e.persist();
    setSocailLink((prev) => ({ ...prev, [item]: e.target.value }));
  }
  React.useEffect(() => {
      onChange(Object.values(socailLink))
      return () => {
          
      }
  }, [socailLink])
  return (
    <div className="row" >
     <div className="col-2 mr-3 mt-0">
     <div
        onClick={() => {
          console.log(prevNumber.current);
          prevNumber.current = prevNumber.current + 1;
          setSocailLink((prev) => ({ ...prev, [prevNumber.current]: "" }));
        }}
        className="action-btn2"
      >
        Add <i style={{ fontWeight: "800", pointerEvents:"none" }}
        className="fa fa-plus my-auto ml-1"></i>
      </div>
     </div>
      
      <div className="col">
      {Object.keys(socailLink).map((item, index) => (
        <div key={`socaial-${item}`} className="d-flex">
          <i></i>
          <input
            type="text"
            value={socailLink[item]}
            onChange={(e) => SocialOnChange(e, item)}
          />
          <i
            style={{ fontWeight: "800" }}
            onClick={() => {
              setSocailLink((itemx) => {
                delete itemx[item];
                return { ...itemx };
              });
            }}
            className="fa fa-trash my-auto ml-2"
          ></i>
        </div>
      ))}

      </div>
          </div>
  );
}
export default SocailLink;
