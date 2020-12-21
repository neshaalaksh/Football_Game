class Player {
    constructor(){
      this.index = null;
      this.goal = 0;
      this.name = null;
      this.rank=null;
    }
  
    getCount(){
      var playerCountRef = database.ref(`users/${word}/`);
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref(`users/${word}/`).update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = `users/${word}/player` + this.index;
      database.ref(playerIndex).update({
        name:this.name,
        goal:this.goal
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref(`users/${word}/`);
      playerInfoRef.on("value",(data)=>{
        allusers = data.val();
      })
    }
}