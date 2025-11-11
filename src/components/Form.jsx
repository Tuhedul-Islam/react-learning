import React, {useState, useEffect} from 'react'
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


const FormStyle = {
    margin: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    maxWidth: '400px'
};

function Form() {

    const [userDetails, setUserDetails] = useState({
        username: '',
        email: '',
        password: ''
    });

    const { username, email, password } = userDetails;

    const handleUserDetails = (event) =>{
        const { name, value } = event.target;
        setUserDetails((userDetails) => ({
            ...userDetails,
            [name]: value
        }));
        console.log(value);
        
        // Alternative approach without using computed property names
        // const name = event.target.name;
        // const value = event.target.value;
        // if(name === 'username'){
        //     setUserDetails({
        //         username: value, email: email, password: password
        //     });
        //     console.log(value);
        // } else if(name === 'email'){
        //     setUserDetails({
        //         username: username, email: value, password: password
        //     });
        // } else if(name === 'password'){
        //     setUserDetails({
        //         username: username, email: email, password: value
        //     });
        // }
    }

    // useEffect(() => {
    //     console.log('Updated username:', userDetails.username);
    // }, [userDetails.username]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password')
        };

        // const data = {
        //     username: username,
        //     email: email,
        //     password: password
        // };
        console.log('Form Data Submitted:', data);
    }

    return (
        <>
            <Card>
                <form action="" method="post" onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div style={FormStyle}>
                        <label htmlFor="username">Username:</label>
                        <input type="text" value={username} onChange={handleUserDetails} id="username" name="username" />
                    </div>
                    <div style={FormStyle}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" value={email} onChange={handleUserDetails} id="email" name="email" />
                    </div>
                    <div style={FormStyle}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" value={password} onChange={handleUserDetails} id="password" name="password" />
                    </div>

                    <div style={FormStyle}>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Card>
        </>  
    );
  
}

export default Form;