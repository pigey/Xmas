//Filip Mathsson

window.onload = function(){
//canvas init
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//canvas dimensions
var W = window.innerWidth;
var H = window.innerHeight;
canvas.width = W;
canvas.height = H;

//stärnfall partiklar
var mp = 5; //antalet partiklar som man ser
var particles = [];
for(var i = 0; i < mp; i++)
{
particles.push({
x: Math.random()*W, //x kordinat
y: Math.random()*H, //y kordinat
r: Math.random()*4+1, //radius
d: Math.random()*mp //hur stora de är
})
}


function draw()
{
ctx.clearRect(0, 0, W, H);

ctx.fillStyle = "rgb(255, 255, 0)"; //färgen på partiklarna
ctx.beginPath();
for(var i = 0; i < mp; i++)
{
var p = particles[i];
ctx.moveTo(p.x, p.y);
ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
}
ctx.fill();
update();
}

var angle = 0;
function update()
{
angle += 0.01;
for(var i = 0; i < mp; i++)
{
var p = particles[i];
// det här väljer hur partiklarna kommer röra sig på skärmen
p.y += Math.cos(angle) *2 + 10;
p.x += Math.sin(angle) * 2 + 5;

//gör så att pariklarna kan komma från sidorna och inte bara uppifrån
if(p.x > W+5 || p.x < -5 || p.y > H)
{
  if(i%3 > 0) //66.67% av partiklarna kommer komma från sidorna
  {
    particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
  }
  else
  {

    if(Math.sin(angle) > 0)
    {

      particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
    }
    else
    {

      particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
    }
  }
}
}
}

//sätter hastigheten på partiklarna
setInterval(draw, 15);
}

//slideshow
var slideIndex = 0;
carousel();
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) { //plussar på i tills x.lenght som är hur många mySlides classer jag har
  x[i].style.display = "none";
}
slideIndex++;
if (slideIndex > x.length) {slideIndex = 1} //när slideindex går över dina antal slides så börjar den om igen
x[slideIndex-1].style.display = "block";

setTimeout(carousel, 2500);
}
//nedräkning till jul
var countDownDate = new Date("Dec 24, 2018 0:0:0").getTime(); //sätter ett datum till countdowndate

var x = setInterval(function() {
  var today = new Date().getTime(); //tar dagens dag

  var distance = countDownDate - today; //sätter hur lång tid som är kvar

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  document.getElementById("time").innerHTML = days + " Days To Christmas";
//om man går över jul så skriver den Merry Xmas istället för -dag
  if (distance < 0) {
      clearInterval(x);
      document.getElementById("time").innerHTML = "Merry Xmas";
  }
}, 1000);
//YOUTUBE
var vidIndex = 1;
showDivs(vidIndex);

function plusDivs(n) { //function till knapparna
  showDivs(vidIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("myvid"); //tar alla myvid klassar
  if (n > x.length) //börjar om om nummret går över
  {
    vidIndex = 1
  }
  if (n < 1) {vidIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[vidIndex-1].style.display = "block";
}
