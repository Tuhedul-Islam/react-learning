import React, {Component} from "react";
import '../assets/css/ClickableButton.css';

function UseSameFileComponent() {
    return (
        <p>This component is created using ES6 class syntax by extending React.Component.</p>
    );
}

class TestClassComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLogged: 'Not Logged In',
        healthStatus: 'Fine'
      }
    }

    render() {
        const { isLogged, healthStatus } = this.state;

        return (
            <div className="card">
                <h2>{this.props.header}</h2>
                <p>{isLogged}</p>
                <p>{healthStatus}</p>
                //Here we are using the same file component inside the class component...
                <UseSameFileComponent />
            </div>
        );
    }
}

export default TestClassComponent;