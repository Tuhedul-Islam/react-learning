import React from "react";

function SimpleArr({ arr }) {

    return (
        <div>
            <h3>Array Elements:</h3>
            <ul>
                { arr.map((item, index) => (
                    <li key={index}>{item.title} : {item.body}</li>
                ))} 
            </ul>
        </div>
    );
}

export default SimpleArr;