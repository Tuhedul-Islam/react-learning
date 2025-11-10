# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



## Learning Text
- In class component's render() method,
1. arrow func & regular func can be written.
2. Function can be defined inside/outside of the render() method
Like --details in 'StateDetails' class component,
3. In outside of the render() method, no need const/function keyword to define func.
4. Regular function defined inside the render() method --- where 'this' keyword is not workable but can be workable by binding the 'this' keyword in constrauctor.

- Example:-
```jsx
- In Class component
-------------------------------------------------------------------------------------;
import...

//components
function DisplayState(){...}  //call as component '<DisplayState />'
const DisplayState1 = () => {...}  //call as component '<DisplayState1 />'

class componentClass extends Component{
    _props = this.props
    //Func //State is defined in constructor  
    constructor(){} //call by 'this' keyword
    display(){}     //call by 'this' keyword
    ...
    render(){
        //Func // 'this' keyword is not workable inside these func
        const display1 = () => {} //No need 'this' keyword to call
        function display2(){}     //No need 'this' keyword to call
        ...
        return(
            {jsx}, <></>
        );
    }
}
-------------------------------------------------------------------------------------;


- In Functional component
-------------------------------------------------------------------------------------;
import...

//components
function DisplayState(){...}  //call as component '<DisplayState />'
const DisplayState1 = () => {...}  //call as component '<DisplayState1 />'

function componentFunction({props}){
    const [count, setCount] = useState(0);
    //Func
    const display1 = () => {} //No need 'this' keyword to call
    function display2(){}     //No need 'this' keyword to call
    ...
    return(
        {jsx}, <></>
    );
}
-------------------------------------------------------------------------------------;