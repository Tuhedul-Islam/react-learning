import React from "react";
import './TestFile.css';


function TestFile(props){
    const { cardDetails } = props;
    const title = cardDetails?.title;
    const body = cardDetails?.body;

    let testFile = "Hello From TestFile";

    return(
        <>
            <div className="box">
                <p className="para">{testFile || "Hello From TestFile"}</p> 

                <div className="card">
                    <h2> 
                        {title || "Default Title"}
                    </h2>
                    <p>
                        {body || "Default Body Content"}
                    </p>
                </div>
            </div>
        </>
    );
}

export default TestFile;