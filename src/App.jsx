// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import ClickableButton from './components/ClickableButton.jsx'
import LoopOfCart from './components/LoopOfCart.jsx';
import SimpleArr from './components/SimpleArr.jsx';

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

    </>
  )
}

export default App
