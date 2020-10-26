import React, { useEffect } from 'react'
import lottie from "lottie-web"
function Lottie({style, animation}) {
    let el = ""
    useEffect(() => {
       let animationX = lottie.loadAnimation({
            container: el,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: animation,
          });
        return () => {
            animationX.destroy()
            animation = ""
        }
    }, [])
    return (

        <div style={style}>
            <div  ref={(c) => {
            el = c;
          }} style={{width:"100%", height:"100%",opacity:"0.7"}}
           ></div>
        </div>
    )
}

export default Lottie
