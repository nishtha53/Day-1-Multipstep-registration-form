import React, { useState } from 'react'
import SignUpInfo from "./SignUpInfo";
import PersonalInfo from "./PersonalInfo";
import Sucess from "./Sucess"

function Form() {

    const [step, setStep] = useState(0);

    const FormTitles = ["Sign up", "Personal Information", "Sucess"];

    const PageDisplay = () =>{
        if(step === 0)
        {
            return <SignUpInfo />
        }
        else if(step === 1)
        {
            return <PersonalInfo />
        }
        else
        {
            return <Sucess />
        }
    }

    return (
        <>
            <div className='form'>
                <div className='progressbar'>
                        <div style={{ width: step === 0 ? "33.3%" : step == 1 ? "66.6%" : "100%" }}></div>
                </div>
                <div className='form-container'>
                    <div className="header">
                        <h1>{FormTitles[step]}</h1>
                    </div>
                    <div className="body">{PageDisplay()}</div>
                    <div className="footer">
                        <button
                            disabled={step == 0}
                            onClick=
                            {() => { setStep(currPage => currPage - 1); }}>Prev</button>
                        <button disabled={step == FormTitles.length - 1}
                            onClick=
                            {() => { setStep(currPage => currPage + 1); }}>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form