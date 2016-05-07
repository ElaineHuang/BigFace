var originalIDs = [];
var left;
var total = 0;
var count = 0;
$(document).ready(function() {
createjs.Sound.registerSound("./../music/circlestart.mp3","start");
createjs.Sound.registerSound("./../music/startplay.mp3","play");
createjs.Sound.registerSound("./../music/win.mp3","win");
createjs.Sound.registerSound("./../music/lose.mp3","lose");
createjs.Sound.play("start");
$( window ).resize(function() {
	leftresize();
});
$("#start").hide(); $("#sortable").hide();
setTimeout(function(){ $(".size").removeClass().addClass("size rollOut animated") }, 1000);
setTimeout(function(){
$("#red").removeClass().addClass("rotateIn animated startred");
$("#yellow").removeClass().addClass("rotateIn animated startyellow");
$("#purple").removeClass().addClass("rotateIn animated startpurple");
$("#blue").removeClass().addClass("rotateIn animated startblue");
$("#start").show().addClass("zoomIn animated");
$("#start").hover(
    function() {
       $(this).attr("src","images/smart/smartstart1.png");
    },
    function() {
       $(this).attr("src","images/smart/smartstart.png");
    }
 );
$("#start").click(function(){
	createjs.Sound.stop("start");
	createjs.Sound.play("play");
	$("img").removeClass();
	$("#red").addClass("rotateOut animated startred");
	$("#yellow").addClass("rotateOut animated startyellow");
	$("#purple").addClass("rotateOut animated startpurple");
	$("#blue").addClass("rotateOut animated startblue");
	$("#start").addClass("zoomOut animated");
	setTimeout(function()
	{ 
		$("img").hide();
		startgame();
		$("#sortable").show().addClass("bounceInDown animated"); 
		$('ul#sortable li').each(function() {
		originalIDs.push($(this).attr("id"));
		});
	}, 1000);
		
	
	
});

}, 2000);



});

function startgame()
{
	
	WashCard();
	leftresize();
	 
	 $( "#sortable" ).sortable({
		zIndex: 99,
		opacity: 0.7,
		cursorAt: { left: left },
		placeholder: "highlight",
		update: function(e, ui) {
		leftresize();
		IDreset();
		count++;
		$('#red,#yellow,#purple,#blue').hide();
		$("#add").text("-50").removeClass().addClass("bounceIn animated");
		total = total - 50;
		setTimeout(function(){ $("#add").removeClass().addClass("bounceOut animated") }, 1000);
		for(var i = 0; i < 6; i++)
		{
			if($("#row"+i+"_0").hasClass("imageurl0") && $("#row"+i+"_1").hasClass("imageurl0") && $("#row"+i+"_2").hasClass("imageurl0")
			&& $("#row"+i+"_3").hasClass("imageurl0") && $("#row"+i+"_4").hasClass("imageurl0") && $("#row"+i+"_5").hasClass("imageurl0"))
			{					
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").remove(); 
					
					$('#red').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#red').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#red').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();
				//});
					
				
			}
			else if($("#row"+i+"_0").hasClass("imageurl1") && $("#row"+i+"_1").hasClass("imageurl1") && $("#row"+i+"_2").hasClass("imageurl1")
			&& $("#row"+i+"_3").hasClass("imageurl1") && $("#row"+i+"_4").hasClass("imageurl1") && $("#row"+i+"_5").hasClass("imageurl1"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").remove();
					
					$('#yellow').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#yellow').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#yellow').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();							
				//});
					
			}
			else if($("#row"+i+"_0").hasClass("imageurl2") && $("#row"+i+"_1").hasClass("imageurl2") && $("#row"+i+"_2").hasClass("imageurl2")
			&& $("#row"+i+"_3").hasClass("imageurl2") && $("#row"+i+"_4").hasClass("imageurl2") && $("#row"+i+"_5").hasClass("imageurl2"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").remove(); 
					
					$('#purple').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#purple').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#purple').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();
				//});
					
			}
			else if($("#row"+i+"_0").hasClass("imageurl3") && $("#row"+i+"_1").hasClass("imageurl3") && $("#row"+i+"_2").hasClass("imageurl3")
			&& $("#row"+i+"_3").hasClass("imageurl3") && $("#row"+i+"_4").hasClass("imageurl3") && $("#row"+i+"_5").hasClass("imageurl3"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").remove(); 
					
					$('#blue').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#blue').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#blue').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();
				//});
					
			}
			
			else if($("#row0_"+i).hasClass("imageurl0") && $("#row1_"+i).hasClass("imageurl0") && $("#row2_"+i).hasClass("imageurl0")
			&& $("#row3_"+i).hasClass("imageurl0") && $("#row4_"+i).hasClass("imageurl0") && $("#row5_"+i).hasClass("imageurl0"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row0_"+i+",#row1_"+i+",#row2_"+i+",#row3_"+i+",#row4_"+i+",#row5_"+i).remove();
					$('#red').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#red').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#red').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();							
				//});
					
			}
			else if($("#row0_"+i).hasClass("imageurl1") && $("#row1_"+i).hasClass("imageurl1") && $("#row2_"+i).hasClass("imageurl1")
			&& $("#row3_"+i).hasClass("imageurl1") && $("#row4_"+i).hasClass("imageurl1") && $("#row5_"+i).hasClass("imageurl1"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row0_"+i+",#row1_"+i+",#row2_"+i+",#row3_"+i+",#row4_"+i+",#row5_"+i).remove();
					$('#yellow').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#yellow').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#yellow').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();							
				//});
					
			}
			else if($("#row0_"+i).hasClass("imageurl2") && $("#row1_"+i).hasClass("imageurl2") && $("#row2_"+i).hasClass("imageurl2")
			&& $("#row3_"+i).hasClass("imageurl2") && $("#row4_"+i).hasClass("imageurl2") && $("#row5_"+i).hasClass("imageurl2"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row0_"+i+",#row1_"+i+",#row2_"+i+",#row3_"+i+",#row4_"+i+",#row5_"+i).remove();
					$('#purple').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#purple').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#purple').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();
				//});
					
			}
			else if($("#row0_"+i).hasClass("imageurl3") && $("#row1_"+i).hasClass("imageurl3") && $("#row2_"+i).hasClass("imageurl3")
			&& $("#row3_"+i).hasClass("imageurl3") && $("#row4_"+i).hasClass("imageurl3") && $("#row5_"+i).hasClass("imageurl3"))
			{
				//$("#row"+i+"_0,#row"+i+"_1,#row"+i+"_2,#row"+i+"_3,#row"+i+"_4,#row"+i+"_5").addClass("bounceOutRight animated").delay(1000).queue(function(){
					$("#row0_"+i+",#row1_"+i+",#row2_"+i+",#row3_"+i+",#row4_"+i+",#row5_"+i).remove();
					$('#blue').removeClass().show().addClass("magic rotateIn animated");
					setTimeout(function(){ $('#blue').removeClass().addClass("magic rotateOut animated"); }, 1000);
					setTimeout(function(){ $('#blue').hide(); }, 2000);
					$("#add").text("+1000");
					total = total + 50 + 1000;
					elementDown();
				//});
					
			}
		}
		result();
		
		},
	});
	
	 $( "#sortable" ).disableSelection();
	 
	 
}
function result()
{

if(count > 29)
 {
	createjs.Sound.stop("play");
	$("#sortable").hide();
	$('#red,#yellow,#purple,#blue').hide();
	setTimeout(function(){ 
	$("#add").removeClass().addClass("result bounceInRight animated").text("your score: " + total); 
	}, 2000);
	
	setTimeout(function() { 
	if(total > 5000)
	{
	$("p").text("You Win!!").addClass("bounceInLeft animated");
	createjs.Sound.play("win");
	}
	else
	{
	$("p").text("You Lose!!").addClass("bounceInLeft animated");
	createjs.Sound.play("lose");
	}
	}, 2500);
 }
}
function leftresize()
{
if($(window).width()>480)
 {
  left = 80;
 }
 else
 {
  left = 20;
 }
 
 if($(window).width()>767)
 {
  left = 200;
 }
 
 if($(window).width()>979)
 {
	left = 250;
 }
 if($(window).width()>1200)
 {
	left = 400;
 } 
}

function elementDown()
{
for(i = 0; i < 6; i++)
{
$('#sortable li:eq(0)').before("<li id = 'row1_0'></li>");
}
IDreset();
Wash0Card();

}

function WashCard()
{
	var number = Math.floor(Math.random() * 4);
	
	for(var j = 0; j < 6; j++)
	{
	for(var i = 0; i < 6; i++)
	{
	$("#row"+j+"_"+ i).addClass("imageurl" + number);
	number = Math.floor(Math.random() * 4);
	}
	}
}

function Wash0Card()
{
var number = Math.floor(Math.random() * 4);
for(var i = 0; i < 6; i++)
	{
	$("#row0_"+ i).addClass("bounceInDown animated imageurl" + number).delay(1000).queue(function(next){
	$(this).removeClass("bounceInDown animated");
	next();
	});
	number = Math.floor(Math.random() * 4);
	}
}

function IDreset()
{
var els = $('#sortable').find('li');	
for (var i = 0; i < els.length; i++) 
{
	els[i].setAttribute('id',originalIDs[i]);
}

}