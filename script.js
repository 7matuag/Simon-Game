var flg = true;
var lvl = 0;
var gmptrn = [];
var usrclkdptrn = [];
var btnclr = ["red", "blue", "green", "yellow"];
$(document).keypress(function () {
  if (flg) {
    nxtseq();
    flg = false;
  }
});
$(".btn").click(function () {
  var usrclkdclr = $(this).attr("id");
  usrclkdptrn.push(usrclkdclr);
  plysnd(usrclkdclr);
  anmt(usrclkdclr);
  chkans(usrclkdptrn.length - 1);
});
function chkans(x) {
  if (gmptrn[x] === usrclkdptrn[x]) {
    if (gmptrn.length === usrclkdptrn.length) {
      setTimeout(function () {
        nxtseq();
      }, 1000);
    }
  } else {
    plysnd("wrong");
    $("body").addClass("game-over");
    $("h1").text("Game Over, Press Any Key to Restart");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    strtovr();
  }
}
function nxtseq() {
  lvl++;
  usrclkdptrn = [];
  $("h1").text("Level " + lvl);
  var rndmnum = Math.floor(Math.random() * 4);
  var rndmclr = btnclr[rndmnum];
  gmptrn.push(rndmclr);
  $("#" + rndmclr)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  plysnd(rndmclr);
}
function anmt(x) {
  $("#" + x).addClass("pressed");
  setTimeout(function () {
    $("#" + x).removeClass("pressed");
  }, 100);
}
function plysnd(x) {
  new Audio("sounds/" + x + ".mp3").play();
}
function strtovr() {
  lvl = 0;
  flg = true;
  gmptrn = [];
}
