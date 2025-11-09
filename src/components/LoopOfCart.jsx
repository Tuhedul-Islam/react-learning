import React from "react";
import TextFile from "../TestFile.jsx";

function LoopOfCart() {

    const cardDetails = {
        title: "This is Test File Component",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime?"
    };

    // Create array of TestFile components using for loop
    const testFiles = [];
    for (let i = 0; i < 2; i++) {
        testFiles.push(<TextFile key={i} cardDetails={cardDetails} />);
    }


    return (
        <>
            <div>
                {testFiles}
            </div>

            {(typeof cardDetails === 'object' && !Array.isArray(cardDetails) && cardDetails !== null) ? (
                Array.from({ length: 2 }).map((_, index) => (
                <TextFile key={index} cardDetails={cardDetails} />
                ))
            ) : (
                <p>cardDetails must be an object</p>
            )}
        </>
    );
}

export default LoopOfCart;