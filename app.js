const enter = document.querySelector(".enter"),
  playerInput = document.querySelector(".playerInput"),
  form = document.querySelector("form"),
  welcomePage = document.querySelector(".welcomePage"),
  playerName = document.querySelector(".player-Name"),
  rules = document.querySelector(".rules"),
  terms = document.querySelector(".terms"),
  okay = document.querySelector(".okay"),
  gameWonHead = document.querySelector(".gameWonHead"),
  computerChoices = document.querySelectorAll(".computerChoice>*"),
  playerChoices = document.querySelectorAll(".playerChoice>*"),
  middlePartHead = document.querySelector(".middlePartHead"),
  scoreBoard = document.querySelector(".scoreBoard"),
  gameWon = document.querySelector(".gameWon"),
  gameArena = document.querySelector(".gameArena"),
  restarts = document.querySelectorAll(".restart"),
  gamePage = document.querySelector(".gamePage");

  playerInput.addEventListener("keyup", ()=>{
    console.log("hey");
    console.log(playerInput.value);
    if (playerInput.value.trim().length > 2) {
        enter.removeAttribute("disabled");
        enter.style.cursor = "pointer";
    }
    else{
        enter.setAttribute("disabled", "true");
        enter.style.cursor = "initial";
    }
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        welcomePage.style.display = "none";
        gamePage.style.display = "grid";
        playerName.textContent = playerInput.value.trim()

    })
})

  //game logic

 
playerChoices.forEach(playerChoice => {
    playerChoice.addEventListener("click", (e)=>{
        let random = Math.floor(Math.random()*3);
        let computerChoses = computerChoices[random]
        let playerChosen = e.target.className;
        const computerChosen = computerChoses.className;

        console.log(playerChosen, computerChosen);
        var pc = playerChoices[0];
        var cc = computerChoices[0];
        
        
        while (pc && cc) {
          if (pc.tagName === "DIV") {
            pc.classList.remove("positionClass")
            pc.classList.add("opacityClass");
            
            cc.classList.remove("positionClass")
            cc.classList.add("opacityClass");
           
          }
          pc = pc.nextSibling;
          cc = cc.nextSibling;
        }
        e.target.classList.add("positionClass");
        e.target.classList.remove("opacityClass");

        computerChoses.classList.add("positionClass");
        computerChoses.classList.remove("opacityClass");

       
        setTimeout(()=> {
          computerChoices.forEach((computerChoice=>{
            computerChoses.classList.remove("positionClass");
            computerChoice.classList.remove("opacityClass")
          }))
          playerChoices.forEach((playerChoice => {
            e.target.classList.remove("positionClass");
            playerChoice.classList.remove("opacityClass")
          }))
        }, 2000)
       

        //compare
        function compare1() {
          let firstChoice = "scissors"
          let secondChoice = "paper"
          if (firstChoice === playerChosen &&  secondChoice === computerChosen) {
            middlePartHead.textContent = "You won this one!";
          } else if(firstChoice === computerChosen && secondChoice === playerChosen) {
           middlePartHead.innerText = "You lost this one!";
          }

        }

        compare1();

        function compare2() {
          let firstChoice = "rock";
          let secondChoice  = "scissors";
          if (firstChoice === playerChosen && secondChoice === computerChosen) {
            middlePartHead.innerText = "You won this one!";
          }
          else if(firstChoice === computerChosen && secondChoice === playerChosen){
            middlePartHead.innerText = "You lost this one!";
          }
        }
        compare2();

        function compare3() {
          let firstChoice = "rock";
          let secondChoice  = "paper";

          if (firstChoice === playerChosen && secondChoice === computerChosen) {
            middlePartHead.textContent = "You lost this one!";
          }
          else if (firstChoice === computerChosen && secondChoice === playerChosen){
            middlePartHead.textContent = "You won this one!";
          }
        }
        compare3()
          if (playerChosen === computerChosen) {
            middlePartHead.textContent = "You drew this one!"
          }
        const win = document.createElement("div");
        win.className = "good";

        const lost = document.createElement("div");
        lost.className = "Xbad";

        if ( middlePartHead.textContent === "You won this one!") {
          scoreBoard.append(win)
        } else if(middlePartHead.textContent === "You lost this one!"){
          scoreBoard.append(lost)
        }else{
          return;
        }

        // check for win

        let scoreChildrens = Array.from(scoreBoard.children);
        console.log(gameWon);
        if (scoreChildrens.length === 2) {
          if (scoreChildrens[0].className == "good" && scoreChildrens[1].className == "good") {
            setTimeout(() => {
              gameWon.style.display = "grid";
              gameWonHead.textContent = "CONGRATS YOU WIN!!!";
              gameArena.classList.add("disable");
            }, 2000);
            

          }else if(scoreChildrens[0].className == "Xbad" && scoreChildrens[1].className == "Xbad")
            setTimeout(() => {
              gameWon.style.display = "grid";
              gameWonHead.textContent = "Sorry you lose!!"
              gameArena.classList.add("disable");
            }, 2000);
            
        }else if (scoreChildrens.length === 3) {
           if (scoreChildrens[0].className == "good" && scoreChildrens[2].className =="good" ||
           scoreChildrens[1].className == "good" && scoreChildrens[2].className == "good") {
                      setTimeout(() => {
                        gameWon.style.display = "grid";
                        gameWonHead.textContent = "CONGRATS YOU WIN!!!";
                        gameArena.classList.add("disable"); 
                      }, 2000);
                          
          }
          else if (scoreChildrens[0].className == "Xbad" && scoreChildrens[2].className == "Xbad" ||
                   scoreChildrens[1].className == "Xbad" && scoreChildrens[2].className == "Xbad") {
                    setTimeout(() => {
                      gameWon.style.display = "grid";
                      gameWonHead.textContent = "Sorry you lose!!"
                      gameArena.classList.add("disable");
                    }, 2000);
                    
                
          }
        }
      })
});
console.log(gameWonHead);
//restart game
  restarts.forEach((restart=>{
    restart.addEventListener("click", ()=>{
      scoreChildrens = [];
      console.log(scoreBoard.firstChild);
      while (scoreBoard.firstChild) {
        scoreBoard.removeChild(scoreBoard.firstChild)
      }
      console.log("you");
      middlePartHead.textContent = "Wish You LUCK!";
      gameWon.style.display = "none";
      gameArena.classList.remove("disable"); 

    })
  }))
   

  rules.addEventListener("click", ()=>{
    terms.style.display = "grid";
    gamePage.classList.add ("disableGA")
})

  okay.addEventListener("click", ()=>{
    terms.style.display = "none"
    gamePage.classList.remove("disableGA");
});



