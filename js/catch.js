var count = 0;
var bfleft;
var bfbwidth;
var bfawidth;
var pinright;

$(document).ready(function() {
//createjs.Sound.registerSound("coin05.mp3","click");
//createjs.Sound.registerSound("play.mp3","catchmusic");
//createjs.Sound.registerSound("small_footsteps.mp3","footsteps");
reSize();
//createjs.Sound.play("footsteps");
$("#catch,#escape,#start,#rightpin,#operation,#again,#return").hide();
$("#bf").animate({left: bfleft},800, 
function(){ 
$(this).attr('src','../images/bf_c.png');
$("#bf").animate({
width:bfbwidth,
height:"auto",
},"slow"); 
$("#leftpin").animate({right:pinright},800,
function(){
$("#bf").attr('src','../images/rightwalk.png');
$("#bf").animate({left: bfleft},800,
function(){
$(this).attr('src','../images/bf_c.png');
$("#bf").animate({width:bfawidth,height:'auto'},800,
function(){
$("#bf").attr('src','../images/leftwalk.png');
$("#bf").animate({left:'-500px'},800,
function(){
$("#escape").show();
$("#start").show().addClass("flip animated");
$("#start").hover(
    function() {
       $(this).attr("src","../images/stargamehover.png");
    },
    function() {
       $(this).attr("src","../images/stargame.png");
    }
 );
 
 $("#start").click(function(){
 //createjs.Sound.play("click");
 $("#start").remove().addClass("zoomOut animated");
 $("#escape").addClass("bounceOutRight animated");
 $("#leftpin").addClass("bounceOutRight animated");
 
 Run();

 });

});
});
});
});
});

});

function reSize()
{
  if($(window).width()>480)
  {
	bfleft = "20%";
	bfbwidth = "350";
	bfawidth = "300";
	pinright = "5%";
  }
  else
  {
	bfleft = "2%";
	bfbwidth = "250";
	bfawidth = "200";
	pinright = "0px";
  }
  if($(window).width()>767)
  {
	bfleft = "20%";
	bfbwidth = "450";
	bfawidth = "400";
	pinright = "10%";
	
  }

}
$( window ).resize(function() {

reSize();

});

function Run()
{
//createjs.Sound.play("catchmusic");
var ball = new Array(10);
for(var i = 0; i < 20; i++)
{
setTimeout(function(){ ball[i] = new creatObject() }, (i+1)*1000);
setTimeout(function(){ ball[i].setAttribute("class","zoomOut animated circle") }, (i+1)*1000+1000);
}

setTimeout(GameResult, 21000);

}

function GameResult()
{
if(count > 15)
{
$("#bf").attr("src","../images/shyface1.png");
$("#bf").animate({left:( $(window).width()  - bfbwidth ) / 2,width:bfbwidth,height:'auto'},500,
function()
{
 $("#rightpin").show().addClass("bounceInLeft animated");
 $("#leftpin").removeClass().addClass("bounceInRight animated");
 $("#catch").show().addClass("flip animated");
 buttonshow()
});
}
else
{

alert("大臉仔跑走啦!!");
buttonshow()

}

}

function buttonshow()
{
 $("#return").show().addClass("bounceInLeft animated");
 $("#again").show().addClass("bounceInRight animated");
 $("#return").hover(
    function() {
       $(this).attr("src","../images/return1.png");
    },
    function() {
       $(this).attr("src","../images/return.png");
    }
 );
 $("#again").hover(
    function() {
       $(this).attr("src","../images/again1.png");
    },
    function() {
       $(this).attr("src","../images/again.png");
    }
 );

}
function creatObject()
{
var result = document.getElementById("result");
var objectDiv = document.createElement( "DIV" );

objectDiv.id = 'object'; 

var x = $(window).width() * Math.random();
var y = $(window).height() * Math.random();

var r;
if($(window).width() < 480)
{
r = 100;
}
else
{
r = 150;
}

while(x > $(window).width() - r || x < r || y > $(window).height() - r || y < r)
{
x = $(window).width() * Math.random();
y = $(window).height() * Math.random();
}
objectDiv.style.left = x + "px";
objectDiv.style.top = y + "px";

objectDiv.setAttribute("class", "zoomIn animated circle");

result.parentNode.insertBefore( objectDiv, result );

objectDiv.onclick=function()
{
  objectDiv.style.background="url(../images/beat.png)";
  objectDiv.style.backgroundSize= "cover";
  count++;
};
return objectDiv;
}
