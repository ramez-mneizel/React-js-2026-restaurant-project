import './App.css'
import NavBar from "./Components/NavBar/NavBar.jsx";
import Greeting from "./Components/Greeting.jsx"; 
import NextStep from "./Components/NextStep.jsx";
import LandingPage from "./Components/LandingPage/LandingPage.jsx";

function App() {

  return (
    <>
    <NavBar />
    <Greeting />
    <NextStep />
    <LandingPage />
    
    </>
  );
}

export default App;