
$(document).ready(function(){
  move();
  var mePlayer= 28;
  var wallPos = 5;
  var busPos= 10;
  var sportPos= 13;
  var trainPos= 19;
  var bikePos= 24;
  var rightPressed = false;
  var leftPressed = false;
  var downPressed = false;
  var upPressed = false;
  var myScore= 0;
  var progRunning = false;

   //  controller not meant to be a click
 $("#stop").click(function(){
  if (progRunning) {
  progRunning = false;
  clearInterval(interval);
  $("#stop").html("Stop")
  } else {
  progRunning = true;
  $("#btn").html("Stop")
  }
  collison();
 });

  // the gaps
  var gap = $("td")

  // box is fixed

  // the rectangles moving in motions / animation
  function move(){

    // moving objects
    interval = setInterval(function () {

      $('#' + wallPos).removeClass('wall')

      if (wallPos == 5) {
          wallPos = 1;
      } else {
        wallPos++;
      }

      $('#' + wallPos).addClass('wall')

    }, 1500);

    setInterval(function () {
      $('#'+busPos).removeClass('bus')
      if (busPos==10) {
        busPos=6;
      }else {
        busPos++;
      }
      $('#'+busPos).addClass('bus')
    }, 1001);

    setInterval(function () {
      $('#'+sportPos).removeClass('sport-car')
      if (sportPos==15) {
        sportPos=11;
      }else {
        sportPos++;
      }
      $('#'+sportPos).addClass('sport-car')
    }, 800);

    setInterval(function () {
      $('#'+trainPos).removeClass('train')
      if (trainPos==20) {
        trainPos=16;
      }else {
        trainPos++;
      }
      $('#'+trainPos).addClass('train')
    }, 1001);

    setInterval(function () {
      $('#'+bikePos).removeClass('bike')
      if (bikePos == 25) {
        bikePos = 21;
      }else {
        bikePos++;
      }
      $('#'+bikePos).addClass('bike')
      collision();
    }, 500);

  }


  $(document).keydown(function(event){
    switch (event.which) {
      // Left player Movement
      case 37:
      // Remove current player position
      $("#" + mePlayer).removeClass("player");
      if (mePlayer % 5 == 1) {
        // Loop back to right hand side
        mePlayer += 4
      } else {
        // move 1 square left
        mePlayer--;
      }
      // add player to new position
      $("#" + mePlayer).addClass("player");
      break;
      //  move player to right
      case 39:
        $("#" + mePlayer).removeClass("player");
        if (mePlayer % 5 == 0) {
          mePlayer -= 4
        } else {
          mePlayer++;
        }
        $("#" + mePlayer).addClass("player");
        break;
        // move player up
      case 38:
        console.log("up move");
        $("#" + mePlayer).removeClass("player");
        if (mePlayer >5) {
          mePlayer-=5
        } else if (mePlayer == 1||mePlayer == 2||mePlayer == 3||mePlayer == 4||mePlayer==5) {
          mePlayer = 28;
          // location.reload();
        }
        $("#" + mePlayer).addClass("player");
        break;
       //move player down
      case 40:
        console.log("down move");
        $("#" + mePlayer).removeClass("player");
        if (mePlayer <30) {
          mePlayer+=5
        }
        $("#" + mePlayer).addClass("player");
        break;

      default:

    }
    event.preventDefault();
    collision();

   })

    //collision
   function collision(){

    if (mePlayer==bikePos) {
      var losermsg = document.getElementById('loser');

       losermsg.innerHTML = "You Lost";
      // alert("looooooser L")
      location.reload();
    console.log("collison");
    // return mePlayer= 30;
    } else if (mePlayer==trainPos) {
      var losermsg = document.getElementById('loser');

       losermsg.innerHTML = "You Lost";
      location.reload();
    console.log("collison");

    }else if (mePlayer==sportPos) {
      var losermsg = document.getElementById('loser');

       losermsg.innerHTML = "You lost";
      location.reload();
    console.log("collison");
    }else if (mePlayer==busPos) {
      var losermsg = document.getElementById('loser');

       losermsg.innerHTML = "You ";
      location.reload();
    console.log("collison");
    }else if (mePlayer==wallPos) {
      var losermsg = document.getElementById('loser');

       losermsg.innerHTML = "You  Lost";
      location.reload();
    console.log("collison");
    }

        if (mePlayer == 1||mePlayer == 2||mePlayer == 3||mePlayer == 4||mePlayer==5)  {
          $("#" + mePlayer).removeClass("player");

          console.log("you win");
         // document.createElement("div");
         // document.className="win";
         var winmsg = document.getElementById('win');

          winmsg.innerHTML = "You Win";

          Score();

        } if ($("#" + mePlayer).removeClass("player")) {
          $("#" + mePlayer).addClass("player");

        }
  }
  // score
   function Score() {
    document.getElementById('score').innerHTML = (myScore)
    myScore+=1;
    if (myScore++) {
      mePlayer=28;
    }
    console.log("score");
    if (myScore == 2) {
      setInterval(function () {
        $('#'+bikePos).removeClass('bike')
        if (bikePos == 25) {
          bikePos = 21;
        }else {
          bikePos++;
        }
        $('#'+bikePos).addClass('bike')
        collision();
      }, 350);
    } else if (myScore ==4 ) {
      setInterval(function () {
        $('#'+trainPos).removeClass('train')
        if (trainPos==20) {
          trainPos=16;
        }else {
          trainPos++;
        }
        $('#'+trainPos).addClass('train')
      }, 90);
    }

    };


  });
