import "./Hero.css";
import { useState } from "react";
function Hero() {

    const [counter, setCounter] = useState(0);
    const handleClick = () => {
         
        setCounter((counter) => counter + 1)
        if (counter === 10) {
            setCounter(0);
        }

    };
    const handleMinus = () => {
        
        setCounter((counter) => counter - 1);
        if (counter === 0) {
            setCounter(0);
        }
    };
    return (
    <>

        <div className="container">
            
<img src="" alt="" />


    </div>
           
        </> 
        
         );
            };

        export default Hero;
