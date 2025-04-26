document.querySelectorAll(".drum")[0].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML); 
    });
document.querySelectorAll(".drum")[1].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });
document.querySelectorAll(".drum")[2].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/tom-3.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });
document.querySelectorAll(".drum")[3].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/tom-4.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });
document.querySelectorAll(".drum")[4].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });
document.querySelectorAll(".drum")[5].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/kick-bass.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });
document.querySelectorAll(".drum")[6].addEventListener("click", function handleEvent(){
    var audio = new Audio("./sounds/snare.mp3");
    audio.play();
    var buttonInnerHTML= this.innerHTML;
    buttonPress(buttonInnerHTML);
  });

  document.addEventListener("keypress",function(event) 
  {
     sound(event.key);
     var buttonInnerHTML= event.key;
     buttonPress(buttonInnerHTML);
  });

  function sound(instrument){
    switch(instrument){
      case "w":
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("./sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("./sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("./sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("./sounds/crash.mp3");
        audio.play();
      break;
      case "k":
        var audio = new Audio("./sounds/kick-bass.mp3");
        audio.play();
      break;
      case "l":
        var audio = new Audio("./sounds/snare.mp3");
        audio.play();
      break;
      default:
        console.log("Please select the correct keyword");
  }
  }
  function buttonPress(buttonInnerHTML){
     var classOfButton = document.querySelector("." + buttonInnerHTML)
     console.log(classOfButton);
    classOfButton.classList.add("pressed"); 
    setTimeout(function() {
      classOfButton.classList.remove("pressed");
    }, 100);
  }