// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import TestClassComponent from './ClassComponents/TestClassComponent.jsx';
import ClickableButton from './components/ClickableButton.jsx'
import JsonComponent from './components/jsonComponent.jsx';
import LoopOfCart from './components/LoopOfCart.jsx';
import SimpleArr from './components/SimpleArr.jsx';
import ReactBootstrap from './components/ReactBootstrap.jsx';

function App() {

  const sampleArr = [
    {
      title: "This is First Card",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime?"
    },
    {
      title: "This is Second Card",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, maxime?"
    },
  ];


  return (
    <>
      {/* Render ClickableButton component */}
      <ClickableButton title="Clickable Button" label="Count is" />

      {/* Render SimpleArr component */}
      <SimpleArr arr={sampleArr} />

      {/* Render TestFile components from the array */}
      <LoopOfCart />

      {/* Render JsonComponent to display JSON data */}
      <JsonComponent />

      {/* class Component */}
      <TestClassComponent header={"This is a Class Component"} />

      {/* React Bootstrap Component */}
      <ReactBootstrap />

    </>
  )
}

export default App
