class Welcome {
  constructor() {
    //Buttons
    this.playButton = createButton("Play");
    this.genrateCodeButton = createButton("Generate Code");

    //Input boxes
    this.nameInput = createInput("").attribute("placeholder", "Name");
    this.codeInput = createInput("").attribute("placeholder", "Enter Code");
    //Messages
    this.enterYourName = createElement("h3");
    this.greeting = createElement("h1");
    this.or = createElement("h3");
    this.hello = createElement('h2');
    this.code = createElement('h2');
    this.empty = createElement('h7');

    //Giving position for messages 
    this.greeting.html("Welcome to the Football game");
    this.enterYourName.html("Enter your name :");
    this.or.html('Or')
    this.empty.html('* Name field is empty! Enter your name to continue');
    this.empty.hide()

  }

  hideElements() {
    this.playButton.hide();
    this.nameInput.hide();
    this.greeting.hide();
    this.genrateCodeButton.hide();
    this.enterYourName.hide();
    this.or.hide();
    this.codeInput.hide();
    this.hello.hide();
    this.code.hide();
    this.empty.hide();
  }

  hideElementsB() {
    this.enterYourName.hide();
    this.genrateCodeButton.hide();
    this.or.hide();
    this.codeInput.hide();
    this.nameInput.hide();
    this.playButton.hide();
    this.empty.hide();
  }

  setElementPosition() {
    this.playButton.position(width / 2.3, (height / 2 - 100));
    this.nameInput.position((width / 2) - 40, (height / 6) + 10 + 70);
    this.greeting.position((width / 2.3) - 100, (height / 12) + 70);
    this.enterYourName.position((width / 3) + 100, (height / 6) + 70);
    this.genrateCodeButton.position((width / 3) + 100, (height / 4) + 70);
    this.or.position((width / 2) - 20, (height / 4) + 70);
    this.codeInput.position((width / 2) + 20, (height / 4) + 10 + 70);
    this.hello.position((width / 3) + 50, (height / 6) + 70).hide();
    this.code.position((width / 2.3) + 30, (height / 4) + 50).hide();
    this.empty.position(width / 2.3, (height / 2.1));
  }

  setElementStyle() {
    this.playButton.class("customButton1");
    this.nameInput.class("customInput");
    this.genrateCodeButton.class('customButton2');
    this.codeInput.class('customInputCode');
  }

  handleOnpress() {

    this.playButton.mousePressed(() => {
      if (this.nameEmpty() == false && this.enterCodeEmpty() == false) {
        this.hideElements();
        gameState = 2;
        word=this.codeInput.value();
        console.log(word);
        this.updateEverything();
      }
    });
    this.genrateCodeButton.mousePressed(async () => {
      if (this.nameEmpty() == false) {
        this.hideElementsB();
        this.hello.html(`Hello ${this.nameInput.value()}! Waiting for the other player to join.....`);
        this.hello.show();
        word = this.makeId(5);
        // Player.updateSecretWord();
        this.code.html('Code : ' + word);
        this.code.show();
        gameState = 1;
        this.updateEverything();
      }
    });

  }

  updateEverything() {
    game.update(gameState);
    player.name = this.nameInput.value();
    playerCount = player.getCount();
    console.log(playerCount,player.index)
    if (playerCount==undefined){
      playerCount=0;
    }
    playerCount += 1;
    player.index = playerCount;
    console.log(playerCount,player.index)
    player.updateCount(playerCount);
    player.update();
  }

  makeId(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  nameEmpty() {
    if (this.nameInput.value() == '') {
      this.empty.show()
      return true;
    } else {
      return false;
    }
  }

  enterCodeEmpty() {
    if (this.codeInput.value() == '') {
      this.empty.html('* Code is empty! Enter your Code to continue or generate the code');
      this.empty.show();
      return true;
    } else {
      return false;
    }
  }


  display() {
    this.setElementStyle();
    this.setElementPosition();
    this.handleOnpress();
  }
}
