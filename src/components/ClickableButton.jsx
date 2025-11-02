import React from "react";
import { useState } from "react";
import '../assets/css/ClickableButton.css';


function ClickableButton({ title, label }) {
    const [count, setCount] = useState(0);

    return (
        <>  
            <div className="card">
                <button 
                    title={title}
                    onClick={() => setCount((count) => count + 1)}
                >
                    {label || "Count is"} {count}
                </button>
            </div>
        </>
    );
}

export default ClickableButton;