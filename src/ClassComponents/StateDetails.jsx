import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class StateDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
        username: 'Guest',
        age: 25,
        location: 'Dhaka'
        }
    }

    getDetails = () => {
        return `Username: ${this.state.username}, Age: ${this.state.age}, Location: ${this.state.location}`;
    }

    render() {
        const { username, age, location } = this.state;

        const changeState = () => {
        this.setState({
            username: 'JohnDoe',
            age: 30,
            location: 'New York'
        });
        };

        const backState = () => {
            this.setState({
                username: 'Guest',
                age: 25,
                location: 'Dhaka'
            });
        };

        //This is the other way to define function in class component
        //But this way we have to bind 'this' keyword in the constructor otherwise it will give error
        // function backState() {
        //   this.setState({
        //     username: 'Guest',
        //     age: 25,
        //     location: 'Dhaka'
        //   });
        // }

        

        //Arrow function defined inside render method
        const displayState1 = () => {
            return (
                `DisplayState1 --- Username: ${this.state.username}, Age: ${age}, Location: ${location}`
            );
        }
        //Regular function defined inside render method // 'this' keyword is not used here
        function displayState2() {
            return (
                `DisplayState2 --- Username: ${username}, Age: ${age}, Location: ${location}`
            );
        }

        return (
        <div className="card" style={{ padding: '20px', margin: '20px' }}>
            <h2>User Details</h2>
            <p>Username: {username}</p>
            <p>Age: {age}</p>
            <p>Location: {location}</p>
            
            <div className="card" style={{ padding: '20px', margin: '20px' }}>
                //Functions called from class method
                <p>{this.getDetails()}</p>
                <p>{displayState1()}</p>
                <p>{displayState2()}</p>
            </div>

            <Button onClick={changeState}>Change State</Button>
            <Button style={{marginTop:'5px'}} onClick={backState}>Back State</Button>
        </div>
        )
    }
}

export default StateDetails;
