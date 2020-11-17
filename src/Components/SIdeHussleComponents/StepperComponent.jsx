import React from 'react'

function StepperComponent({step,currentStep,text,last}) {
    return (
        <div className="column step-container" style={{width:last ? '20px': ''}}>
            <div className={`step-circle ${currentStep >= step ? "step-background" : ""}`}>{step}
            <div className={`${!last ? "step-line" : ""}`}></div>
            <div className="subtitle1 position-absolute text-center" style={{bottom:"-25px"}}>{text}</div>
            </div>
        </div>
    )
}

export default StepperComponent
