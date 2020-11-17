import React from 'react'

function UploadInfo({type,size="sm"}) {
    const [file, setFile] = React.useState("")
    const fileRef = React.useRef(null)
    console.log(file)
    function readFile(e){
        try {
            var file = fileRef.current.files[0];
        console.log(file)
  var reader = new FileReader();
  var url = reader.readAsDataURL(file);
  reader.onloadend = function (e) {
    console.log(reader.result)
    setFile(reader.result);
  }
  console.log(url)    
        } catch (error) {
            
        }
         // Would see a path?
    }
    return (
        <div className="upload-data" style={{width:"max-content",height:"max-content"}} >
            <div upload-size={size}>
                <i style={{fontWeight:"800"}} className="fa fa-plus m-auto"></i>
                <input type="file" ref={fileRef} onChange={(e)=>{readFile(e);}}/>
    {/* <div>{`${file}`}</div> */}
                {file.length > 0 && <img width="100%" src={file} alt=""/> }
                { file.length > 0 && <div className="d-flex img-option">
                    <div className="rounded fa fa-recycle">
                    </div>
                    <div onClick={()=>setFile("")} className="round-btn fa fa-user">
                    </div>
                </div>  }   
            </div>
            
        </div>
    )
}

export default UploadInfo
