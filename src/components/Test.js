import React, { useState } from "react";
 
 function GuessTheNumber() {
    const [guess,setguess]=useState(0);
    const [nbr,setnumb] = useState(generateRandomNumber());
    const [message,setmsg]= useState("Not yet");
    const [count,setcount]= useState(0);
    const [score,setscore]= useState(0);
    if(count===5){
     alert("You reached 5tries resetting game minus 1 score");
     setscore(score-1);
     resetGame1();
    }
 
    console.log(nbr);
    function generateRandomNumber() {
     return Math.floor(Math.random() * 100) + 1; // Number between 1-100
 }
 
    function checkGuess(){
     if(Number(guess)===nbr){
         setmsg("You got it");
         setscore(score+1);
      
     }
     setcount(count+1);
     
    }
  
   
 
 
    function handleGuessChange(e){
     setguess(e.target.value)
    }
 
    function resetGame1(){
      setguess(0);
      setnumb(generateRandomNumber);
      setmsg("Not yet");
      setcount(0);
      alert("reseted numbers");
    }
    function resetGame(){
     setguess(0);
     setnumb(generateRandomNumber);
     setmsg("Not yet");
     setcount(0);
     setscore(0);
     alert("reseted numbers");
   }
     return (
         <>
         <div style={{ textAlign: "center", padding: "20px" }}>
             <h1>🎯 Guess the Number</h1>
             <p>Enter a number between 1 and 100:</p>
             <input 
                 type="number" 
                 value={guess} 
                 onChange={handleGuessChange} 
                 placeholder="Your guess"
             />
             <button onClick={checkGuess}>Submit Guess</button>
             <button onClick={resetGame} style={{ marginLeft: "10px" }}>Reset</button>
             <p>{message}</p>
         </div>
         <div>
             <p>Rule: More than 5tries=Elimination and reseting</p>
             <p>Score: {score}</p>
         </div>
          
         </>
     );
 }
 
 export default GuessTheNumber;
