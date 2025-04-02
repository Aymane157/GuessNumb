import React, { useState } from "react";

function Play() {
  const [botChoice,setbot]=useState("");
  const [userChoice,setuser]=useState("");
  const [score,setscore]=useState(0);
  const [loading, setLoading] = useState(false);
  const words = ["Scissors","Paper","Rock"];
  const randomWord = words[Math.floor(Math.random() * words.length)];

 console.log(randomWord);



  const determineWinner = (userChoice, botChoice) => {
    if (userChoice === botChoice) return "It's a tie!";
    if (
      (userChoice === "Scissors" && botChoice === "Paper") ||
      (userChoice === "Paper" && botChoice === "Rock") ||
      (userChoice === "Rock" && botChoice === "Scissors")
    ) {
      setscore(score+1);
      return "You win!";
    }
    setscore(score-1);
    return "You lose!";
  };
function Scissors(){
   setbot(randomWord);
   setuser("Scissors");
    setLoading(true);

setTimeout(() => {
    const res=determineWinner("Scissors",randomWord);
    alert(res);
    setLoading(false);
}, 2000);
}
function Paper(){
    setbot(randomWord);
    setuser("Paper");
    setLoading(true);

setTimeout(() => {
    const res=determineWinner("Paper",randomWord);
    alert(res);
    setLoading(false);
}, 2000);

}
function Rock(){
    setbot(randomWord);
    setuser("Rock");
    setLoading(true);

setTimeout(() => {
    const res=determineWinner("Rock",randomWord);
    alert(res);
    setLoading(false);
}, 2000);
}
return (
    <div className="game-container">
      <h1 className="title">Choose A Weapon!</h1>
      <div className="buttons-container">
        <button className="btn" onClick={Scissors}>Scissors</button>
        <button className="btn" onClick={Paper}>Paper</button>
        <button className="btn" onClick={Rock}>Rock</button>
      </div>

      <div className="game-info">
        {loading ? (
          <p className="loading">Loading...</p>
        ) : (
          <p className="choices">
            You chose: {userChoice} | Bot chose: {botChoice}
          </p>
        )}

        {!loading && (
          <h2 className="score">Score: {score}</h2>
        )}
      </div>
    </div>
  );
}



export default Play;
