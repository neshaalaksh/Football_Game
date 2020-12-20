class Game {
    constructor(){

    }
    getState(word) {
      var gameStateRef = database.ref(`users/${word}/game_state/`);
      gameStateRef.on("value", function (data) {
        gameState = data.val();
      });
    }
  
    update(state) {
      database.ref(`users/${word}/`).update({
        gameState: state,
      });
    }
}