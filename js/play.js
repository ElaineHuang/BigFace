$(document).ready(function() {
  createjs.Sound.registerSound("./../music/bite.mp3","operationmusic");
  createjs.Sound.registerSound("./../music/cat_like1a.mp3","click");
  createjs.Sound.play("operationmusic");
  
  $( window ).resize(function() {
  
	resize();
  
  });
  
  $("#left,#lefthand,#right,#righthand").hide();
  $("#please").hover(
        function() {
		   $(this).addClass('pulse animated');
        },
        function() {
			$(this).removeClass();
        }
     );
  
  $("#bf").animate({left:'25%'},1000).queue(function(next) { $(this).attr('src','images/bf_c.png'); next(); });
   
  $("#bf").animate({
	width:'50%',
	height:'100%',
	},"slow").queue(function(next) { resize(); next(); }); 
	
  
  $("#bf").hover(
        function() {
		   $(this).addClass('pulse animated');
        },
        function() {
			$(this).removeClass();
        }
     );
	 
  $("#beauty").delay(1000).animate({left:'5%'}, 1000);
  $("#modify").delay(1000).animate({right:'5%'}, 1000);
  $("#please").delay(1500).animate({left:'5%'}, 1000);
  
  $("#beauty").hover(
        function() {
           $(this).attr("src","images/beauty1.png");
        },
        function() {
           $(this).attr("src","images/beauty.png");
        }
     );
	$("#modify").hover(
        function() {
           $(this).attr("src","images/modify1.png");
        },
        function() {
           $(this).attr("src","images/modify.png");
        }
     );
	$("#beauty").click(function(){
	createjs.Sound.play("click");
	 $("#lefthand,#righthand").show();
	$("#lefthand").animate({bottom:'0px',width:'300px',height:'450px',}, 800);
	$("#righthand").animate({bottom:'0px',width:'300px',height:'450px'}, 800);
	$("#bf").delay(1000).queue(function(next) { $(this).attr('src','images/pain.jpg'); next(); })
	$("#lefthand").animate({bottom:'-400px',width:'100',height:'300',}, 800);
	$("#righthand").animate({bottom:'-400px',width:'100',height:'300',}, 800);
	$("#bf").delay(700).queue(function(next) { $(this).attr('src','images/afterpain.png'); next(); }).queue(function(next) { beauty(); $("#lefthand").hide(); $("#righthand").hide();next(); })
	
	});
	
	$("#modify").click(function(){
	createjs.Sound.play("click");
	$("#left,#right").show();
	$("#left").animate({left:'0px',width:'450px',height:'300px',}, 1000);
	$("#right").animate({right:'0px',width:'450px',height:'300px',}, 1000);
	$("#bf").delay(1000).queue(function(next) { $(this).attr('src','images/poo.png'); next(); })
	$("#left").animate({left:'-400px',width:'300',height:'100',}, 1000);
	$("#right").animate({right:'-400px',width:'300',height:'100',}, 1000);
	$("#bf").delay(700).queue(function(next) { $(this).attr('src','images/fighting.png'); next(); }).queue(function(next) { modify(); next(); $("#left").hide(); $("#right").hide(); })
	
	});
});

function resize() {
  if($(window).width()>480)
  {
	$('#bf').css({"width":"70%","height":"90%","left":"25%"});
	$('#please').css({"width":"300px","height":"auto"});
	$('#beauty,#modify').css({"width":"230px","height":"60px","bottom":"10px"});
  }
  else
  {
	 $('#bf').css({"width":"100%","height":"80%","left":"0","right":"0"});
	 $('#please').css({"width":"300px","height":"auto"});
	 $('#beauty').css({"width":"270px","height":"60px","bottom":"50px"});
	 $('#modify').css({"width":"270px","height":"60px","bottom":"0px"});
	 
  
  }
  if($(window).width()>767)
  {
	$('#bf').css({"width":"50%","height":"100%","left":"25%"});
	$('#please').css({"width":"350px","height":"auto"});
	$('#beauty,#modify').css({"width":"350px","height":"80px","bottom":"10px"});
  }

}

var beautynumber = 0;
var modifynumber = 0;

image1 = new Image();
image1.src = "images/again.png";
image2 = new Image();
image2.src = "images/again1.png";
image3 = new Image();
image3.src = "images/return.png";
image4 = new Image();
image4.src = "images/return1.png";

function beauty()
{
	beautynumber++;
	if(beautynumber+modifynumber == 5)
	{
	  show();
	  $("#beauty").off('hover');
	  $("#modify").off('hover');
	  leave();
	  Return();
	  resize();
	}
}

function modify()
{
	modifynumber++;
	if(beautynumber+modifynumber == 5)
	{
	  show();
	  $("#beauty").off('hover');
	  $("#modify").off('hover');
	  leave();
	  Return();
	  resize();
	}
}

function leave()
{
	
	$('#modify').attr( "src","images/again.png" );
	$('#modify').attr( "height","80" ); 
	$('#modify').attr( "width","350" );
	$('#modify').attr( "style","position:absolute;bottom:10px; right:10px;");
	$("#modify").hover(
            function() {
              $(this).addClass('pulse animated');
            },
            function() {
              $(this).removeClass();
            }
         );
	$('#modify').click(function(){ location.href="operation.html"; });
	
}
function Return()
{
	$('#beauty').attr("src","images/return.png");
	$('#beauty').attr( "height","80" ); 
	$('#beauty').attr( "width","350" );
	$('#beauty').attr( "style","position:absolute;bottom:10px; left:10px;");
	$("#beauty").hover(
            function() {
               $(this).addClass('pulse animated');
            },
            function() {
               $(this).removeClass();
            }
         );
	$('#beauty').click(function(){ location.href="index.html"; });
}

function show()
{

if(beautynumber == 5)
{
	$("#please").attr( "src", "images/bigface.png");
	$("#bf").attr( "src", "images/big.jpg");
	
}

else if(beautynumber == 4 && modifynumber == 1)
{
	$("#please").attr( "src", "images/moonface.png");
	$("#bf").attr( "src", "images/moonface1.png");
}

else if(beautynumber == 3 && modifynumber == 2)
{
	$("#please").attr( "src", "images/babyface.png");
	$("#bf").attr( "src", "images/babyface1.jpg");
}

else if(beautynumber == 2 && modifynumber == 3)
{
	$("#please").attr( "src", "images/prettyface.png");
	$("#bf").attr( "src", "images/thinface.jpg");
}

else if(beautynumber == 1 && modifynumber == 4)
{
	$("#please").attr( "src", "images/noface.png");
	$("#bf").attr( "src", "images/noface1.jpg");
}

if(modifynumber == 5)
{
	$("#please").attr( "src", "images/shyface.png");
	$("#bf").attr( "src", "images/shyface1.png");

}

}
