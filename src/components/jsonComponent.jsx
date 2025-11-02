import React from "react";
import JsonData from '../jsonFiles/testJson.json'
import '../assets/css/ClickableButton.css'
import {v4 as uuidv4} from 'uuid';

function JsonComponent() {

    const data = JSON.stringify(JsonData, null, 2);
    //console.table(JsonData);

return (
    <>
            <div>
                    <h2>JSON Data:</h2>
                    <pre>{data}</pre>
            </div>

            <div>
                    <h2>JSON Data Mapping:</h2>
                    <ol>
                        {Array.isArray(JsonData) ? (
                            JsonData.map((item) => (
                                // Using uuidv4() to generate unique keys for each list item
                                <li key={uuidv4()} className="card">
                                    <strong>URI:</strong> {item.uri} <br />
                                    <strong>Start:</strong> line {item.range.start.line}, character {item.range.start.character} <br />
                                    <strong>End:</strong> line {item.range.end.line}, character {item.range.end.character}
                                    {
                                        Array.isArray(item.users) ? (
                                            item.users.map((userItem, index) => (
                                                <div key={index}>
                                                    <strong>User Name:</strong> {userItem.name} <br />
                                                    <strong>User Phn:</strong> {userItem.phn} <br />
                                                </div>
                                        ))) : (
                                                <div>No users data</div>
                                            )
                                    }
                                </li>
                            ))
                        ) : (
                            <li>No array data</li>
                        )}
                    </ol>

            </div>
    </>
    
);
}

export default JsonComponent;