import React from "react";

function ShowJsonData({ data }) {
    return (
        <div>
            <h3>JSON Data:</h3>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
}

export default ShowJsonData;