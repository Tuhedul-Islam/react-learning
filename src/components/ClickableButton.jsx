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

//Can be defined inside/outside of the component as a normal function component
function ButtonLevel() {
    return (
        <p>Count is </p>
    );
}

const ButtonText = () => {
    return "Click Me";
};

function ClickableButton({ title, label }) {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <>  
            <div className="card">
                <button 
                    title={title}
                    onClick={
                        handleClick
                        // An alternative way using arrow function
                        // () => setCount(
                        //     (count) => count + 1
                        // )
                    }
                >
                    <strong>Icon :</strong>
                    <span style={styleFaIcon.BsCircleSquare}>
                        <BsCircleSquare />
                    </span>
                    {label || <ButtonLevel/>} {count}
                    <ButtonText />
                </button>
            </div>
        </>
    );
}

export default ClickableButton;