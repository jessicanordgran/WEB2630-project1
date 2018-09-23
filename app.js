new Vue({
  el: '#app',
  data: {
    show: true,
    playerWins: 0,
    computerWins: 0,
    // gameIsRunning: false,
    rock: 1,
    paper: 2,
    scissors: 3,
    turns: [],
      showGame: false,
  },
  methods: {
    startGame: function(){
      // this.gameIsRunning = true;
      this.playerWins = 0;
      this.computerWins = 0;
      this.turns = [];
      this.showGame = true;
    },
    restartGame: function(){
      // this.gameIsRunning = false;
      this.playerWins = 0;
      this.computerWins = 0;
      this.turns = [];
      this.showGame = false;
    },
    userRock: function(){
      //generate computer choice
      var computer = this.computerChoice();
      //output of winner
      // paper
      if(computer === this.paper){
        this.computerWins += 1;
        this.turns.unshift({
            isPlayer: false,
            text: 'Computer Chose Paper| Paper Beats Rock| Computer Wins!'
        })
      }
      //scissors
      else if(computer === this.scissors){
        this.playerWins += 1;
        //this.playerWins = this.playerWins + 1;
          this.turns.unshift({
              isPlayer: true,
              text: 'Computer Chose Scissors | Rock Beats Scissors| Player Wins!'
          })
      }
      //TIE
      else{
          this.turns.unshift({
              tie: true,
              text: 'Computer Chose Rock | You Have Tied!'
          })
      }
      //check for winner
        this.checkWinner();
    },

      userPaper: function(){
          //generate computer choice
          var computer = this.computerChoice();
          //output of winner
          // scissors
          if(computer === this.scissors){
              this.computerWins += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Scissors| Scissors Beats Paper| Computer Wins!'
              })
          }
          //scissors
          else if(computer === this.rock){
              this.playerWins += 1;
              //this.playerWins = this.playerWins + 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Rock | Paper Beats Rock| Player Wins!'
              })
          }
          //TIE
          else{
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Paper | You Have Tied!'
              })
          }
          //check for winner
          this.checkWinner();
      },

      userScissors: function(){
          //generate computer choice
          var computer = this.computerChoice();
          //output of winner
          // rock
          if(computer === this.rock){
              this.computerWins += 1;
              this.turns.unshift({
                  isPlayer: false,
                  text: 'Computer Chose Rock| Rock Beats Scissors| Computer Wins!'
              })
          }
          //paper
          else if(computer === this.paper){
              this.playerWins += 1;
              //this.playerWins = this.playerWins + 1;
              this.turns.unshift({
                  isPlayer: true,
                  text: 'Computer Chose Paper | Scissors Beats Paper| Player Wins!'
              })
          }
          //TIE
          else{
              this.turns.unshift({
                  tie: true,
                  text: 'Computer Chose Scissors | You Have Tied!'
              })
          }
          //check for winner
          this.checkWinner();
      },


      //random computer choice
    computerChoice: function(){
      var max = 3;
      var min = 0;
      return Math.max(Math.floor(Math.random() * max) + 1, min)
    },
    // paper: function(){
    //
    // },
    // scissors: function(){
    //
    // },




    //alert after hitting 10 and announcing winner
    checkWinner: function(){
      if(this.playerWins === 10){
        if(confirm('You Win! New Game.')){
          this.startGame();
        }else{
          this.gameIsRunning = false;
        }
      }
      else if (this.computerWins === 10){
          if(confirm('Computer Won! New Game.')){
              this.startGame();
          }else{
              this.gameIsRunning = false;
          }
      }
    },
  }
});