import React from 'react'
import { Card } from 'react-bootstrap';

function GetChildDataStateLifting(props) {
    const sendDataToParent = "Data from Child Component";
    const { data } = props;

    props.getDataFromChild(sendDataToParent);

    return (
        <Card>
            <p>{data}</p>
        </Card>
    )
}

export default GetChildDataStateLifting;
