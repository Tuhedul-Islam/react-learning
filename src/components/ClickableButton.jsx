import React from "react";
import { useState } from "react";
import { BsCircleSquare } from "react-icons/bs";
import '../assets/css/ClickableButton.css';


const styleFaIcon = {
    BsCircleSquare: {
        paddingRight: '20px',
        paddingLeft: '20px',
        fontSize: '16px',
        cursor: 'pointer',
    },
};

function ClickableButton({ title, label }) {
    const [count, setCount] = useState(0);

    return (
        <>  
            <div className="card">
                <button 
                    title={title}
                    onClick={() => setCount((count) => count + 1)}
                >
                    <strong>Icon :</strong>
                    <span style={styleFaIcon.BsCircleSquare}>
                        <BsCircleSquare />
                    </span>
                    {label || "Count is"} {count}
                </button>
            </div>
        </>
    );
}

export default ClickableButton;